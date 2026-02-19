function initChat() {
  const chatBtn = document.getElementById("chatBtn");
  const chatBox = document.getElementById("chatBox");
  const chatMessages = document.getElementById("chatMessages");
  const faqButtons = document.querySelectorAll(".faq-btn");

  // Abrir / fechar chat
  chatBtn.addEventListener("click", () => {
    chatBox.style.display = chatBox.style.display === "flex" ? "none" : "flex";
  });

  // Perguntas automáticas
  faqButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const question = btn.querySelector("strong").textContent;
      const answer = btn.dataset.answer;

      const userMsg = document.createElement("div");
      userMsg.className = "user-msg";
      userMsg.textContent = question;
      chatMessages.appendChild(userMsg);

      chatMessages.scrollTop = chatMessages.scrollHeight;

      setTimeout(() => {
        const botMsg = document.createElement("div");
        botMsg.className = "bot-msg";
        botMsg.textContent = answer;
        chatMessages.appendChild(botMsg);

        chatMessages.scrollTop = chatMessages.scrollHeight;
      }, 500);
    });
  });
}

document.addEventListener("DOMContentLoaded", initChat);