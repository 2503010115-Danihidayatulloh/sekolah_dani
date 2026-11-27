/*menu burger*/
var tombol_burger = document.getElementById("dani_tombol_burger");
var menu_utama = document.getElementById("dani_menu_utama");

if (tombol_burger && menu_utama) {
  tombol_burger.addEventListener("click", function () {
    var terbuka = menu_utama.classList.toggle("menu_tampil");
    tombol_burger.setAttribute("aria-expanded", terbuka);
    tombol_burger.setAttribute(
      "aria-label",
      terbuka ? "Tutup menu" : "Buka menu",
    );
  });
}

/*form kontak*/
var email_tujuan = "cdann299@gmail.com";
var kontak_form = document.getElementById("dani_kontak_form");
var kontak_status = document.getElementById("dani_kontak_status");

function tampilkan_status(teks, jenis) {
  kontak_status.textContent = teks;
    kontak_status.className = "dani_kontak_status dani_kontak_status_" + jenis;
}

function ambil_nilai(id) {
  return document.getElementById(id).value.trim();
}

if (kontak_form) {
  kontak_form.addEventListener("submit", function (e) {
    e.preventDefault();

    var nama = ambil_nilai("dani_kontak_nama");
    var email = ambil_nilai("dani_kontak_email");
    var telepon = ambil_nilai("dani_kontak_telepon");
    var subjek = ambil_nilai("dani_kontak_subjek");
    var pesan = ambil_nilai("dani_kontak_pesan");

    if (!nama || !email || !subjek || !pesan) {
      tampilkan_status("Mohon lengkapi semua kolom yang bertanda *.", "galat");
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      tampilkan_status(
        "Format email belum benar. Contoh: nama@email.com",
        "galat",
      );
      return;
    }

    var judul_email = "[Website SMKN 1 Rancah] " + subjek + " - " + nama;
    var isi_email =
      "Nama: " +
      nama +
      "\n" +
      "Email: " +
      email +
      "\n" +
      "Nomor HP: " +
      (telepon || "-") +
      "\n" +
      "Subjek: " +
      subjek +
      "\n\n" +
      "Pesan:\n" +
      pesan;

    window.location.href =
      "mailto:" +
      email_tujuan +
      "?subject=" +
      encodeURIComponent(judul_email) +
      "&body=" +
      encodeURIComponent(isi_email);

    tampilkan_status(
      'Aplikasi email Anda akan terbuka. Tekan "Kirim" di sana untuk mengirim pesan.',
      "sukses",
    );
  });
}
