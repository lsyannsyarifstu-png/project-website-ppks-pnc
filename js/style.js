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
const kegiatan = [
    {
        id: 1,
        nama: "Seminar Teknologi Informasi",
        kategori: "seminar",
        tanggal: "10 November 2026",
        lokasi: "Aula Kampus",
        deskripsi: "Seminar tentang perkembangan teknologi informasi dan kecerdasan buatan."
    },
    {
        id: 2,
        nama: "Pelatihan Web Development",
        kategori: "akademik",
        tanggal: "15 November 2026",
        lokasi: "Laboratorium Komputer",
        deskripsi: "Pelatihan dasar HTML, CSS, dan JavaScript."
    },
    {
        id: 3,
        nama: "Rapat Organisasi Mahasiswa",
        kategori: "organisasi",
        tanggal: "18 November 2026",
        lokasi: "Ruang Organisasi",
        deskripsi: "Koordinasi dan perencanaan program kerja mahasiswa."
    },
    {
        id: 4,
        nama: "Lomba Desain Website",
        kategori: "lomba",
        tanggal: "22 November 2026",
        lokasi: "Kampus",
        deskripsi: "Kompetisi desain website untuk mahasiswa."
    },
    {
        id: 5,
        nama: "Seminar Karier Digital",
        kategori: "seminar",
        tanggal: "28 November 2026",
        lokasi: "Aula Kampus",
        deskripsi: "Pengenalan peluang karier di industri digital."
    },
    {
        id: 6,
        nama: "Workshop Pemrograman",
        kategori: "akademik",
        tanggal: "5 Desember 2026",
        lokasi: "Laboratorium Komputer",
        deskripsi: "Workshop untuk meningkatkan keterampilan pemrograman."
    }
];

const daftarKegiatan = document.getElementById("daftarKegiatan");
const cariKegiatan = document.getElementById("cariKegiatan");
const kategoriKegiatan = document.getElementById("kategoriKegiatan");
const pesanKosong = document.getElementById("pesanKosong");
const modal = document.getElementById("modalKegiatan");
const detailKegiatan = document.getElementById("detailKegiatan");

function tampilkanKegiatan() {
    const kataKunci = cariKegiatan.value.toLowerCase().trim();
    const kategori = kategoriKegiatan.value;

    const hasil = kegiatan.filter(item => {
        const cocokNama = item.nama.toLowerCase().includes(kataKunci);
        const cocokKategori =
            kategori === "semua" || item.kategori === kategori;

        return cocokNama && cocokKategori;
    });

    daftarKegiatan.innerHTML = hasil.map(item => `
        <article class="kartu-kegiatan">
            <div class="ikon-kegiatan">📅</div>
            <span class="label-kategori">${item.kategori}</span>
            <h3>${item.nama}</h3>
            <p><strong>Tanggal:</strong> ${item.tanggal}</p>
            <p><strong>Lokasi:</strong> ${item.lokasi}</p>
            <button class="btn-detail" data-id="${item.id}">
                Lihat Detail
            </button>
        </article>
    `).join("");

    pesanKosong.hidden = hasil.length > 0;
}

function bukaDetail(id) {
    const item = kegiatan.find(k => k.id === Number(id));

    if (!item) return;

    detailKegiatan.innerHTML = `
        <p><strong>Kategori:</strong> ${item.kategori}</p>
        <p><strong>Tanggal:</strong> ${item.tanggal}</p>
        <p><strong>Lokasi:</strong> ${item.lokasi}</p>
        <p><strong>Deskripsi:</strong> ${item.deskripsi}</p>
    `;

    modal.hidden = false;
    document.getElementById("tutupModal").focus();
}

daftarKegiatan.addEventListener("click", function(event) {
    const tombol = event.target.closest(".btn-detail");

    if (tombol) {
        bukaDetail(tombol.dataset.id);
    }
});

cariKegiatan.addEventListener("input", tampilkanKegiatan);
kategoriKegiatan.addEventListener("change", tampilkanKegiatan);

document.getElementById("tutupModal").addEventListener("click", () => {
    modal.hidden = true;
});

modal.addEventListener("click", event => {
    if (event.target === modal) {
        modal.hidden = true;
    }
});

document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
        modal.hidden = true;
    }
});

tampilkanKegiatan();