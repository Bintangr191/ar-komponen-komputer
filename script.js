const btn = document.getElementById('downloadBtn');
btn.addEventListener('click', () => {
  btn.innerText = "Sedang Mengunduh...";  
  setTimeout(() => {
    btn.innerText = "Download Aplikasi";  
  }, 2000);
});

// Typing Effect
const desc = document.getElementById('desc');
const text = "Pelajari komponen komputer dengan teknologi Augmented Reality!";
let index = 0;

function typeWriter() {
  if (index < text.length) {
    desc.textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, 50); 
  }
}

window.addEventListener('load', () => {
  setTimeout(typeWriter, 500); 
  const teamMembers = document.querySelectorAll('.team-member');
  teamMembers.forEach(member => {
    member.classList.add('show'); 
  });
}); 
