import { useState, useEffect, useRef } from 'react';
import { findAnswer } from '../utils/qaData';
import { 
  initializeSpeechRecognition, 
  initializeSpeechSynthesis, 
  speakText 
} from '../utils/speechUtils';

export default function ChatbotPopup() {
  // Chat state
  const [open, setOpen] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);
  const [messages, setMessages] = useState([
    { from: 'bot', text: 'Hi! I am your AI resume assistant. Ask me anything about Sachin Jadhav.' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  // Voice assistant state
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const recognitionRef = useRef(null);
  const synthRef = useRef(null);

  // Initialize speech APIs on client side only
  useEffect(() => {
    recognitionRef.current = initializeSpeechRecognition();
    synthRef.current = initializeSpeechSynthesis();
  }, []);

  // Hide welcome message after 5 seconds or when chat is opened
  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (open) setShowWelcome(false);
  }, [open]);

  // Listen for custom event to open chatbot
  useEffect(() => {
    const handleOpenChatbot = () => setOpen(true);
    window.addEventListener('openChatbot', handleOpenChatbot);
    return () => window.removeEventListener('openChatbot', handleOpenChatbot);
  }, []);



  // Handle voice input
  const startListening = () => {
    if (!recognitionRef.current) {
      console.log('Speech recognition not supported in this browser');
      return;
    }
    setIsListening(true);
    recognitionRef.current.start();
  };

  useEffect(() => {
    if (!recognitionRef.current) return;

    const recognition = recognitionRef.current;

    const handleResult = (event) => {
      const transcript = event.results[0][0].transcript;
      setInput(transcript);
      setIsListening(false);
      handleMessage(transcript);
    };

    const handleError = (event) => {
      console.error('Speech recognition error:', event.error);
      setIsListening(false);
    };

    const handleEnd = () => {
      setIsListening(false);
    };

    recognition.onresult = handleResult;
    recognition.onerror = handleError;
    recognition.onend = handleEnd;

    return () => {
      recognition.onresult = null;
      recognition.onerror = null;
      recognition.onend = null;
      if (recognition) {
        recognition.abort();
      }
    };
  }, []);

  // Handle voice output
  const speak = (text) => {
    speakText(
      synthRef.current,
      text,
      () => setIsSpeaking(true),
      () => setIsSpeaking(false),
      () => setIsSpeaking(false)
    );
  };

  const handleMessage = (text) => {
    if (!text.trim()) return;
    const userMsg = { from: 'user', text };
    setMessages(msgs => [...msgs, userMsg]);
    setInput('');
    setLoading(true);
    setTimeout(() => {
      const answer = findAnswer(text);
      setMessages(msgs => [...msgs, { from: 'bot', text: answer }]);
      setLoading(false);
      speak(answer);
    }, 500);
  };

  async function sendMessage(e) {
    e.preventDefault();
    handleMessage(input);
  }

  return (
    <div>
      {/* Welcome message bubble */}
      {!open && showWelcome && (
        <div className="fixed bottom-24 right-6 z-50 animate-[fade-in_0.5s_ease-out]">
          <div className="bg-white p-3 rounded-lg shadow-lg border border-gray-200 max-w-xs">
            <p className="text-sm text-gray-800">
              👋 Hi! I'm Sachin's AI assistant. Ask me anything about his skills, projects, or experience!
            </p>
            <div className="absolute -bottom-2 right-5 w-4 h-4 bg-white transform rotate-45 border-r border-b border-gray-200"></div>
          </div>
        </div>
      )}

      {/* Floating chat button */}
      <button
        className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg focus:outline-none hover:scale-110 transition-transform duration-200"
        onClick={() => setOpen(o => !o)}
        aria-label="Open Chatbot"
      >
        {!open && (
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-[ping_1s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
        )}
        <svg className={`transform transition-transform duration-200 ${open ? 'rotate-360' : ''}`} width="28" height="28" fill="none" viewBox="0 0 24 24">
          <path fill="currentColor" d="M12 2C6.48 2 2 5.92 2 10.5c0 2.54 1.61 4.81 4.11 6.28-.18.64-.7 2.47-.8 2.87-.13.52.38.95.86.7.36-.19 2.36-1.38 3.33-1.94.82.13 1.67.2 2.5.2 5.52 0 10-3.92 10-8.5S17.52 2 12 2Z" />
        </svg>
      </button>
      {/* Chat window */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 w-80 max-w-[95vw] bg-white border border-gray-300 rounded-xl shadow-2xl flex flex-col">
          <div className="px-4 py-3 border-b font-bold bg-blue-600 text-white rounded-t-xl">AI Resume Chatbot</div>
          <div className="flex-1 overflow-y-auto px-4 py-2 space-y-2 max-h-72">
            {messages.map((msg, i) => (
              <div key={i} className={`text-sm ${msg.from === 'bot' ? 'text-left' : 'text-right'}`}>
                <span
                  className={`inline-block px-3 py-2 rounded-lg ${msg.from === 'bot' ? 'bg-gray-100 text-gray-800' : 'bg-blue-500 text-white'}`}
                  dangerouslySetInnerHTML={{
                    __html: msg.text.replace(
                      /(https?:\/\/[^\s]+)/g,
                      '<a href="$1" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:text-blue-800 underline">$1</a>'
                    )
                  }}
                />
              </div>
            ))}
            {loading && <div className="text-xs text-gray-400">Thinking...</div>}
          </div>
          <form onSubmit={sendMessage} className="flex border-t relative">
            <input
              className="flex-1 px-3 py-2 rounded-bl-xl focus:outline-none"
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Ask about Sachin's experience..."
              disabled={loading || isListening}
            />
            <button
              type="button"
              onClick={startListening}
              disabled={loading || isListening || isSpeaking}
              className="px-3 py-2 text-gray-500 hover:text-blue-600 disabled:opacity-50 focus:outline-none"
              title="Start voice input"
            >
              <svg className={`w-5 h-5 ${isListening ? 'text-red-500 animate-pulse' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
              </svg>
            </button>
            <button 
              type="submit" 
              className="px-4 py-2 bg-blue-600 text-white rounded-br-xl hover:bg-blue-700 disabled:opacity-50" 
              disabled={loading || !input.trim()}
            >
              Send
            </button>
            {isSpeaking && (
              <div className="absolute -top-8 right-0 bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                Speaking...
              </div>
            )}
          </form>
        </div>
      )}
    </div>
  );
}
