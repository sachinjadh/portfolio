// Custom event to control chatbot visibility
export const openChatbot = () => {
  // Dispatch a custom event that ChatbotPopup will listen for
  const event = new CustomEvent('openChatbot');
  window.dispatchEvent(event);
};