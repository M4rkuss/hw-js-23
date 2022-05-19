document.getElementById('aboutHTML').addEventListener('click', function () {
  document.getElementById('text-second').classList.remove('active');
  document.getElementById('text-third').classList.remove('active');
  document.getElementById('text-first').classList.add('active');
})

document.getElementById('aboutCSS').addEventListener('click', function () {
  document.getElementById('text-first').classList.remove('active');
  document.getElementById('text-third').classList.remove('active');
  document.getElementById('text-second').classList.add('active');
})

document.getElementById('aboutJS').addEventListener('click', function () {
  document.getElementById('text-first').classList.remove('active');
  document.getElementById('text-second').classList.remove('active');
  document.getElementById('text-third').classList.add('active');
})