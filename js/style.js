// ===== BAGIAN UMUM: mode gelap (dipakai semua halaman) ===== 
const tombolTema = document.getElementById("tombol-tema"); 
  
if (tombolTema) { 
  tombolTema.addEventListener("click", function () { 
    document.body.classList.toggle("gelap"); 
  
    if (document.body.classList.contains("gelap")) { 
      tombolTema.textContent = "Mode Terang"; 
    } else { 
      tombolTema.textContent = "Mode Gelap"; 
    } 
  }); 
} 
  
// ===== BAGIAN MAHASISWA 2 (Beranda) ===== 
  
// ===== BAGIAN MAHASISWA 3 (Profil dan Kegiatan) ===== 
  
// ===== BAGIAN MAHASISWA 4 (Kontak) ===== 
const formKontak = document.getElementById('formKontak');

if (formKontak) {
    formKontak.addEventListener('submit', function (e) {
        e.preventDefault();

        const nama = document.getElementById('nama').value.trim();
        const email = document.getElementById('email').value.trim();
        const pesan = document.getElementById('pesan').value.trim();

        if (nama === '' || email === '' || pesan === '') {
            alert('Harap isi semua kolom formulir!');
            return;
        }

        alert('Terima kasih, pesan Anda berhasil dikirim!');
        formKontak.reset();
    });
}