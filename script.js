const btn = document.getElementById('downloadBtn');
btn.addEventListener('click', () => {
  btn.innerText = "Sedang Mengunduh...";
  setTimeout(() => {
    btn.innerText = "Download Aplikasi";
  }, 2000);
});

const desc = document.getElementById('desc');
setTimeout(() => {
  desc.style.borderRight = 'none';
}, 4000);

