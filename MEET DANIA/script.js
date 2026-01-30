// Simple "talking avatar" using browser text to speech
// and dynamic text that changes with selected skill.

const skillCards = document.querySelectorAll('.skill-card');
const avatarText = document.getElementById('avatar-text');
const voiceToggle = document.getElementById('voice-toggle');

let voiceOn = true;

// Messages Dania says for each skill
const messages = {
  communication: "Hi, I am Dania. When I present to leaders and teams, I like to connect technical ideas to real stories. I use clear visuals, examples from the customer’s world, and I always end with the concrete next step so everyone knows what comes after the meeting.",
  discovery: "Hi, I am Dania. In discovery conversations, I listen first and ask questions that reveal the real problem behind the initial request. I map what I hear to business outcomes, then I connect Microsoft cloud capabilities that actually solve that underlying problem.",
  technical: "Hi, I am Dania. When I explain technical products, I translate features into simple outcomes. Instead of talking about APIs or configuration first, I begin with what changes for the customer: better performance, lower risk, or faster time to value, and then I walk backwards into the architecture.",
  demos: "Hi, I am Dania. In demos and proof of concepts, I focus on making cloud ideas feel real. I build small, focused scenarios with the customer’s own data or use case, so they can immediately see how Azure and AI would work inside their environment.",
  insights: "Hi, I am Dania. I keep track of competitive trends so I can help customers understand their options. I stay honest and transparent, highlight where Microsoft is strong, and show how our approach reduces risk and creates long term flexibility.",
  feedback: "Hi, I am Dania. I treat every customer meeting as a feedback loop. I capture what lands well, what is confusing, and what blockers they face, then I share those insights back with the product and engineering teams in a structured way.",
  cloud: "Hi, I am Dania. My background in computer engineering plus my experience with cloud and security lets me speak both architecture and business. I like to design solutions that are secure by default, cost aware, and ready to scale with the customer’s ambitions."
};

function getHtmlForMessage(messageKey) {
  const baseIntro = "<b>Hi, I am Dania.</b> ";
  const full = messages[messageKey] || messages.communication;
  // Avoid repeating "Hi, I am Dania." twice by trimming it if needed.
  const cleaned = full.replace(/^Hi, I am Dania\.?\s*/i, "");
  return baseIntro + cleaned;
}

// Text to speech
function speak(text) {
  if (!voiceOn) return;
  if (!('speechSynthesis' in window)) {
    return; // silent fail if not supported
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.rate = 1.02;
  utterance.pitch = 1.02;
  utterance.lang = 'en-US';
  window.speechSynthesis.speak(utterance);
}

// Handle skill card click
skillCards.forEach(card => {
  card.addEventListener('click', () => {
    skillCards.forEach(c => c.classList.remove('active'));
    card.classList.add('active');

    const key = card.getAttribute('data-skill');
    const plainText = messages[key] || messages.communication;
    avatarText.innerHTML = getHtmlForMessage(key);
    speak(plainText);
  });
});

// Voice toggle button
if (voiceToggle) {
  voiceToggle.addEventListener('click', () => {
    voiceOn = !voiceOn;
    voiceToggle.setAttribute('aria-pressed', String(voiceOn));
    voiceToggle.textContent = voiceOn ? "🔊 Voice on" : "🔈 Voice muted";

    if (!voiceOn && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  });
}

// On first load, speak default active card once
window.addEventListener('load', () => {
  const activeCard = document.querySelector('.skill-card.active');
  if (!activeCard) return;
  const key = activeCard.getAttribute('data-skill') || 'communication';
  const text = messages[key];
  speak(text);
});
