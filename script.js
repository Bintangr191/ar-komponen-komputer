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

// BIODATA DINAMIS PEMBUAT
function loadBiodata() {
  const dataPembuat = {
    "helmi": {
      nama: "Muhammad Helmi",
      role: "AR Application Developer",
      email: "nama1@example.com",
      asal: "Sumbawa",
      hobi: "Coding and Game",
      foto: "gambar/capybara.png"
    },
    "syafiq": {
      nama: "Syafig Nuhaa Naufal Muzakky",
      role: "3D Artist and Logo Designer",
      email: "nama2@example.com",
      asal: "Karanganyar",
      hobi: "Tinju and Martial Combact",
      foto: "gambar/KUDA.png"
    },
    "bintang": {
      nama: "Bintang Rachman",
      role: "AR Book Creator and Web Developer",
      email: "nama3@example.com",
      asal: "Depok",
      hobi: "Nonton and Lari",
      foto: "gambar/BINTANGLAUT.png"
    },
    "darul": {
      nama: "Mashdarul Mawahib",
      role: "Video Editor",
      email: "nama4@example.com",
      asal: "Karanganyar",
      hobi: "Mancing",
      foto: "gambar/fish.png"
    }
  };

  // Ambil parameter dari URL
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const allowedIds = ['helmi', 'syafiq', 'bintang', 'darul'];
  if (!allowedIds.includes(id)) {
      document.body.innerHTML = '404 Not Found';
  }


  // Log untuk memeriksa apakah parameter berhasil diambil
  console.log('ID yang didapat:', id);

  // Memastikan id valid dan ada dalam dataPembuat
  if (id && dataPembuat[id]) {
    const p = dataPembuat[id];
    
    // Helper function untuk mengakses elemen dan memastikan elemen tersebut ada
    function setTextContent(id, value) {
      const el = document.getElementById(id);
      if (el) {
        el.textContent = value;
      } else {
        console.log(`Element dengan id "${id}" tidak ditemukan`);
      }
    }

    // Mengisi data biodata berdasarkan ID
    setTextContent("nama", p.nama);
    setTextContent("role", p.role);
    setTextContent("email", p.email);
    setTextContent("asal", p.asal);
    setTextContent("hobi", p.hobi);

    const foto = document.getElementById("foto");
    if (foto) {
      foto.src = p.foto;
      foto.alt = p.nama;
    }

        // Mengisi footer
    const footerNamaElement = document.getElementById("footerNama");
    if (footerNamaElement) {
      footerNamaElement.textContent = p.nama;
    }
  } else {
    console.log('Data tidak ditemukan untuk ID:', id);
    // Memberikan umpan balik jika data tidak ditemukan
    const el = document.getElementById("nama");
    if (el) {
      el.textContent = "Data Pembuat Tidak Ditemukan";
    }
  }
}

// Inisialisasi Saat Load
window.addEventListener('load', () => {
  // Jalankan typing effect jika ada elemen desc
  if (desc) {
    setTimeout(typeWriter, 500);
  }

  // Jalankan animasi team-member jika ada
  const teamMembers = document.querySelectorAll('.team-member');
  if (teamMembers.length > 0) {
    teamMembers.forEach(member => {
      member.classList.add('show');
    });
  }

  // Jalankan biodata jika halaman memiliki elemen nama
  if (document.getElementById('nama')) {
    loadBiodata();
  }
});

function initDownloadPopup() {
  const unduhButtons = document.querySelectorAll(".btn-unduh");
  const modal = document.getElementById("unduhModal");
  const closeModal = document.querySelector(".close");
  const btnDrive = document.getElementById("btn-drive");
  const btnSourceforge = document.getElementById("btn-sourceforge");

  const links = {
    v15: {
      drive: "https://drive.google.com/file/d/1XECKETs-W0mJr1B_OzG0kwOtw3hANLhZ/view?usp=drivesdk ",
      sf: ""
    },
    v13: {
      drive: "https://drive.google.com/uc?export=download&id=1QGH3nRk3hK9j02YkNL8wTRSWoTFElaIF",
      sf: "https://sourceforge.net/projects/ar-project-rakit/files/Augmented_reality_(1,3).zip/download"
    },
    v12: {
      drive: "https://drive.google.com/uc?export=download&id=1IYt9fQcTvPkQOxTPa2ZtJKq9-ofBilBI",
      sf: "https://sourceforge.net/projects/ar-project-rakit/files/Augmented_reality_(1,2).zip/download"
    },
    v10: {
      drive: "https://drive.google.com/uc?export=download&id=1BHBZIfJbHPqhkhSgSpDn8ZrubzhXxaNI",
      sf: "https://sourceforge.net/projects/ar-project-rakit/files/Augmented_reality_(1,0).zip/download"
    }
  };

// Ketika tombol unduh diklik
unduhButtons.forEach(button => {
  button.addEventListener("click", function() {
    const version = button.getAttribute("data-version");
    btnDrive.href = links[version].drive;
    btnSourceforge.href = links[version].sf;

    // Tampilkan modal
    modal.style.display = "block";
  });
});


  if (closeModal) {
    closeModal.onclick = () => {
      modal.style.display = "none";
    };
  }

  window.onclick = e => {
    if (e.target == modal) {
      modal.style.display = "none";
    }
  };
}

// Panggil fungsi saat halaman dimuat
window.addEventListener('load', () => {
  initDownloadPopup();
});
