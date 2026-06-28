document.querySelectorAll('.item').forEach(item => {
  item.addEventListener('click', (e) => {
    e.stopPropagation();
    document.querySelectorAll('.item').forEach(i => i.classList.remove('selected'));
    item.classList.add('selected');
  });
  document.getElementById('desktop').addEventListener('click', () => {
    document.querySelectorAll('.item').forEach(i => i.classList.remove('selected'));
  });
});