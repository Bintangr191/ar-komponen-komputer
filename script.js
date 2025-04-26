const btn = document.getElementById('downloadBtn');
btn.addEventListener('click', () => {
  btn.innerText = "Sedang Mengunduh...";  
  setTimeout(() => {
    btn.innerText = "Download Aplikasi";  
  }, 2000);
});

const desc = document.getElementById('desc');
const text = "Pelajari komponen komputer dengan teknologi Augmented Reality!";

desc.textContent = text;
