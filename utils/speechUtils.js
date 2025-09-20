// Helper function to initialize speech recognition
export function initializeSpeechRecognition() {
  if (typeof window === 'undefined') return null;
  
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) return null;

  const recognition = new SpeechRecognition();
  recognition.continuous = false;
  recognition.lang = 'en-US';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;
  
  return recognition;
}

// Helper function to initialize speech synthesis
export function initializeSpeechSynthesis() {
  if (typeof window === 'undefined') return null;
  return window.speechSynthesis || null;
}

// Helper function to speak text
export function speakText(synth, text, onStart, onEnd, onError) {
  if (!synth) {
    console.log('Speech synthesis not supported in this browser');
    return;
  }
  
  // Strip HTML links from text
  const plainText = text.replace(/<a[^>]*>(.*?)<\/a>/g, '$1');
  
  // Cancel any ongoing speech
  synth.cancel();

  const utterance = new SpeechSynthesisUtterance(plainText);
  utterance.rate = 1.0;
  utterance.pitch = 1.0;
  utterance.volume = 1.0;
  
  utterance.onstart = onStart;
  utterance.onend = onEnd;
  utterance.onerror = onError;
  
  synth.speak(utterance);
}