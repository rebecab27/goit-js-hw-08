import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('input[name="email"]');
const messageInput = feedbackForm.querySelector('textarea[name="message"]');
const feedbackKey = 'feedback-form-state';

// Funcția pentru salvarea datelor în local storage
const saveFormData = () => {
  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem(feedbackKey, JSON.stringify(formData));
};

// Funcția pentru completarea câmpurilor cu datele din local storage la încărcarea paginii
const loadFormData = () => {
  const savedData = localStorage.getItem(feedbackKey);
  if (savedData) {
    const { email, message } = JSON.parse(savedData);
    emailInput.value = email;
    messageInput.value = message;
  }
};

// Funcția pentru gestionarea evenimentului de submit al formularului
const handleSubmit = event => {
  event.preventDefault();

  // Afișează în consolă obiectul cu câmpurile email, message și valorile lor curente
  const formData = {
    email: emailInput.value,
    message: messageInput.value,
  };
  console.log(formData);

  // Șterge datele din local storage după ce au fost utilizate
  localStorage.removeItem(feedbackKey);
};

// Adaugă evenimentele necesare formularului
emailInput.addEventListener('input', throttle(saveFormData, 500));
messageInput.addEventListener('input', throttle(saveFormData, 500));
window.addEventListener('DOMContentLoaded', loadFormData);
feedbackForm.addEventListener('submit', handleSubmit);
