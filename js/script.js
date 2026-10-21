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