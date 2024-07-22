document.querySelectorAll('#toggle-button').forEach(button => {
  button.addEventListener('click', () => {
    const content = button.parentElement.nextElementSibling;
    content.classList.toggle('hidden');
  });
});
