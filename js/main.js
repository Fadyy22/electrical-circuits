document.querySelectorAll('.aside-link').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelectorAll('.aside-link').forEach(link => {
      link.classList.remove('selected');
    });
    this.classList.add('selected');

    const chapter = this.innerHTML.split(' ')[1];
    console.log(chapter);
  });
});

document.querySelectorAll('#toggle-button').forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    const content = button.parentElement.nextElementSibling;
    content.classList.toggle('hidden');
  });
});
