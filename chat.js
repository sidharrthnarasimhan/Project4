// AI Chat Widget for StartUp OS
(function() {
  'use strict';

  // Chat data - common questions and answers about startup tools
  const chatKnowledge = {
    greetings: [
      "Hi there! I'm here to help you understand how tool sprawl affects startups. Ask me anything!",
      "Hello! Want to know how much time your startup loses to context switching? Ask away!",
      "Hey! I can help you understand the true cost of managing multiple tools. What would you like to know?"
    ],

    questions: {
      'tools': {
        keywords: ['tools', 'software', 'apps', 'platforms', 'saas'],
        answer: "Most startups use 12+ different tools including Slack, Asana, Notion, Linear, BambooHR, Google Workspace, Zoom, GitHub, and more. Each tool costs money and requires context switching, leading to significant productivity loss."
      },
      'cost': {
        keywords: ['cost', 'price', 'expensive', 'money', 'spend', 'budget'],
        answer: "The average startup spends $47,000 per year on software tools. But the hidden cost is even higher - wasted time, context switching, and lost information cost far more than the subscription fees."
      },
      'time': {
        keywords: ['time', 'hours', 'productivity', 'waste', 'lost', 'switching'],
        answer: "Studies show that startup teams lose 15+ hours per week to context switching between tools. That's nearly 2 full workdays per person, every week! This time is spent searching for information, switching between apps, and dealing with fragmented workflows."
      },
      'searching': {
        keywords: ['search', 'find', 'looking', 'locate', 'where'],
        answer: "Employees spend an average of 2 hours per day just searching for information across different tools. 'Was that decision in Linear? Notion? Email? Slack?' This constant treasure hunt kills momentum and frustrates teams."
      },
      'context': {
        keywords: ['context', 'switching', 'jumping', 'between'],
        answer: "Context switching between tools can reduce productivity by up to 40%. Every time you switch from Slack to Notion to Asana, your brain needs time to reorient. These micro-interruptions add up to massive productivity loss."
      },
      'onboarding': {
        keywords: ['onboarding', 'new hire', 'training', 'learning'],
        answer: "New hires typically receive logins to 15+ different tools. It takes weeks before they know where to find information or how to complete basic workflows. This slows ramp-up time and impacts team velocity."
      },
      'solution': {
        keywords: ['solution', 'fix', 'solve', 'help', 'startup os', 'startupos'],
        answer: "StartUp OS consolidates your essential workflows into one unified platform. Instead of juggling 12+ tools, you get decisions, tasks, announcements, people ops, and insights in a single workspace. We integrate with Slack and email so you don't lose your existing workflows - we just make them more powerful."
      },
      'integrations': {
        keywords: ['integrate', 'slack', 'gmail', 'outlook', 'connect'],
        answer: "StartUp OS connects with the tools you already use - Slack, Gmail, and Outlook. We capture important moments from these platforms and surface them in your unified dashboard. Turn Slack messages into decisions, emails into tasks, without leaving your flow."
      },
      'features': {
        keywords: ['features', 'what does', 'capabilities', 'modules'],
        answer: "StartUp OS includes 6 core modules: Decision Engine (document and track decisions), Smart Tasks (AI-powered prioritization), Team Updates (broadcast communication), People Ops (PTO, onboarding, org charts), Insights (team velocity metrics), and Enterprise Security (SOC 2, GDPR compliant)."
      },
      'pricing': {
        keywords: ['pricing', 'how much', 'plan', 'free', 'trial'],
        answer: "We're currently in early access! Join our waitlist to lock in founder rates and get exclusive early access pricing when we launch. We'll have generous free tiers for small teams and fair scaling as you grow."
      }
    }
  };

  // Simple keyword matching function
  function findBestAnswer(userMessage) {
    const messageLower = userMessage.toLowerCase();

    // Check for greetings
    if (messageLower.match(/^(hi|hello|hey|sup|yo)\b/)) {
      return chatKnowledge.greetings[Math.floor(Math.random() * chatKnowledge.greetings.length)];
    }

    // Find matching topic
    let bestMatch = null;
    let maxMatches = 0;

    for (const [topic, data] of Object.entries(chatKnowledge.questions)) {
      let matches = 0;
      for (const keyword of data.keywords) {
        if (messageLower.includes(keyword)) {
          matches++;
        }
      }

      if (matches > maxMatches) {
        maxMatches = matches;
        bestMatch = data.answer;
      }
    }

    if (bestMatch) {
      return bestMatch;
    }

    // Default response
    return "That's a great question! I can help you understand:\n\n• How many tools startups typically use\n• The true cost of tool sprawl\n• Time lost to context switching\n• How StartUp OS solves these problems\n\nWhat would you like to know more about?";
  }

  // Create chat widget HTML
  function createChatWidget() {
    const chatHTML = `
      <div id="startup-os-chat" class="chat-widget">
        <button id="chat-toggle" class="chat-toggle" aria-label="Open chat">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
          <span class="chat-badge">Ask me anything</span>
        </button>

        <div id="chat-window" class="chat-window">
          <div class="chat-header">
            <div class="chat-header-content">
              <div class="chat-avatar">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" fill="white" stroke="white" stroke-width="1.5"/>
                </svg>
              </div>
              <div>
                <div class="chat-title">StartUp OS Assistant</div>
                <div class="chat-status">Online • Instant answers</div>
              </div>
            </div>
            <button id="chat-close" class="chat-close" aria-label="Close chat">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          <div id="chat-messages" class="chat-messages">
            <div class="chat-message bot-message">
              <div class="message-avatar">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" fill="white" stroke="white" stroke-width="1.5"/>
                </svg>
              </div>
              <div class="message-content">
                <div class="message-text">Hi! I'm here to help you understand how tool sprawl impacts startups. Ask me about:<br><br>• Tools & software costs<br>• Time lost to context switching<br>• How StartUp OS can help<br><br>What would you like to know?</div>
              </div>
            </div>
          </div>

          <div class="chat-input-container">
            <input
              type="text"
              id="chat-input"
              class="chat-input"
              placeholder="Ask about startup tools, costs, productivity..."
              autocomplete="off"
            />
            <button id="chat-send" class="chat-send" aria-label="Send message">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </div>

          <div class="chat-suggestions">
            <button class="suggestion-chip">How much do tools cost?</button>
            <button class="suggestion-chip">Time lost searching?</button>
            <button class="suggestion-chip">What is StartUp OS?</button>
          </div>
        </div>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', chatHTML);
  }

  // Add message to chat
  function addMessage(text, isBot = false) {
    const messagesContainer = document.getElementById('chat-messages');
    const messageHTML = `
      <div class="chat-message ${isBot ? 'bot-message' : 'user-message'}">
        ${isBot ? `
          <div class="message-avatar">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" fill="white" stroke="white" stroke-width="1.5"/>
            </svg>
          </div>
        ` : ''}
        <div class="message-content">
          <div class="message-text">${text.replace(/\n/g, '<br>')}</div>
        </div>
      </div>
    `;

    messagesContainer.insertAdjacentHTML('beforeend', messageHTML);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }

  // Handle sending message
  function sendMessage() {
    const input = document.getElementById('chat-input');
    const message = input.value.trim();

    if (!message) return;

    // Add user message
    addMessage(message, false);
    input.value = '';

    // Show typing indicator
    const messagesContainer = document.getElementById('chat-messages');
    const typingHTML = `
      <div class="chat-message bot-message typing-indicator" id="typing">
        <div class="message-avatar">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" fill="white" stroke="white" stroke-width="1.5"/>
          </svg>
        </div>
        <div class="message-content">
          <div class="typing-dots">
            <span></span><span></span><span></span>
          </div>
        </div>
      </div>
    `;
    messagesContainer.insertAdjacentHTML('beforeend', typingHTML);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    // Simulate thinking time
    setTimeout(() => {
      document.getElementById('typing')?.remove();
      const answer = findBestAnswer(message);
      addMessage(answer, true);
    }, 800 + Math.random() * 400);
  }

  // Initialize chat widget
  function initChat() {
    createChatWidget();

    const chatToggle = document.getElementById('chat-toggle');
    const chatWindow = document.getElementById('chat-window');
    const chatClose = document.getElementById('chat-close');
    const chatInput = document.getElementById('chat-input');
    const chatSend = document.getElementById('chat-send');

    // Toggle chat window
    chatToggle.addEventListener('click', () => {
      chatWindow.classList.add('chat-window-open');
      chatToggle.style.display = 'none';
      setTimeout(() => chatInput.focus(), 300);
    });

    chatClose.addEventListener('click', () => {
      chatWindow.classList.remove('chat-window-open');
      chatToggle.style.display = 'flex';
    });

    // Send message
    chatSend.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        sendMessage();
      }
    });

    // Suggestion chips
    document.querySelectorAll('.suggestion-chip').forEach(chip => {
      chip.addEventListener('click', () => {
        chatInput.value = chip.textContent;
        sendMessage();
      });
    });
  }

  // Load when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initChat);
  } else {
    initChat();
  }
})();
