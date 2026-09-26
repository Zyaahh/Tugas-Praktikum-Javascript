/**
 * ============================================================
 * TUGAS MANDIRI — PEMROGRAMAN INTERNET (JAVASCRIPT DASAR)
 * Program Studi : Pendidikan Sistem dan Teknologi Informasi
 * Universitas   : Universitas Pendidikan Indonesia
 * Study Case    : Sistem Poin & Keanggotaan Member Kedai Kopi
 * Berkas        : app.js (STARTER CODE MAHASISWA)
 * ============================================================
 *
 * PETUNJUK PENGERJAAN:
 * 1. Buka file index.html di browser (klik dua kali atau via Live Server).
 * 2. Buka tab Developer Tools dengan menekan tombol F12 -> pilih tab "Console".
 * 3. Kerjakan tugas ini secara bertahap dari AKTIVITAS 1 sampai AKTIVITAS 6
 *    dengan melengkapi bagian bertanda "// TODO:".
 * 4. Simpan progres pekerjaanmu dengan melakukan minimal 3 kali Git Commit
 *    sesuai panduan di PANDUAN_TUGAS_MANDIRI.md.
 * ============================================================
 */


// ============================================================
// AKTIVITAS 1: Setup Berkas & Integrasi JavaScript Eksternal
// ============================================================
// Menampilkan judul sistem ke tab Console (F12)
console.log("=== SISTEM POIN MEMBER KEDAI KOPI ===");

// TODO 1: Tulis satu baris console.log() untuk memastikan file app.js sudah terhubung!
// Contoh output: "Skrip app.js berhasil terhubung!"

console.log("Skrip app.js berhasil terhubung!")


// ============================================================
// AKTIVITAS 2: Variabel & Dialog Interaktif
// ============================================================

// ---- BAGIAN 2A: VARIABEL IDENTITAS KEDAI KOPI ----
// TODO 2A:
// 1. Buat konstanta "NAMA_KEDAI" bertipe string (misal: "Kopi PSTI Kampus").
// 2. Buat variabel "namaKasir" (misal: "Kak Eko") dan "shiftKerja" menggunakan "let".
// 3. Cetak nilai NAMA_KEDAI, namaKasir, dan shiftKerja ke Console menggunakan console.log().

const Nama_Kedai = "Kopi PSTI Kampus";
let Nama_Kasir = "Kak Eko";
let Shift_Kerja = "Sore";

console.log("Nama Kedai : " + Nama_Kedai);
console.log("Nama Kasir : " + Nama_Kasir);
console.log("Shift Kerja : " + Shift_Kerja);


// ---- DEMO PERBEDAAN LET vs CONST ----
// TODO 2B:
// Ubah (re-assign) nilai variabel "namaKasir" dengan nama kasir lain,
// lalu cetak ke Console untuk membuktikan bahwa variabel "let" nilainya dapat diubah.

Nama_Kasir = "Kak Tara";
console.log("Kasir Baru : " + Nama_Kasir);

// ---- BAGIAN 2B: INPUT INTERAKTIF & PENGANDAIAN DASAR ----
// TODO 2C:
// 1. Tampilkan pop-up salam pembuka selamat datang menggunakan alert().
// 2. Tampilkan dialog prompt() untuk meminta nama pengunjung, simpan hasilnya ke variabel "namaPelanggan".
// 3. Gunakan percabangan "if - else":
//    - JIKA namaPelanggan ada isinya: tampilkan alert sapaan dan log ke console.
//    - JIKA namaPelanggan kosong / klik Cancel: beri nilai default "Pelanggan Setia" dan tampilkan alert pemberitahuan.

alert("Selamat Datang di Sistem Kedai Kopi!");

let Nama_Pelanggan = prompt("Hai! Masukkan Nama Kamu Untuk Memulai : ");

if(Nama_Pelanggan) {
    alert("Halo, " + Nama_Pelanggan + " Yuk kita Lihat Berapa Poin Member Kamu! ");
    console.log("Nama Pelanggan : " + Nama_Pelanggan);
} else {
    Nama_Pelanggan = "Pelanggan Setia"
    alert("Kamu tidak memasukkan nama. Kamu dipanggil Pelanggan Setia");
    console.log("Nama Pelanggan: " + Nama_Pelanggan);
}
// ============================================================
// AKTIVITAS 3: Operasi Aritmatika — Akumulasi Poin Transaksi
// ============================================================
// Catatan: Gunakan bilangan bulat (integer murni tanpa desimal/float).

// TODO 3:
// 1. Buat 3 variabel poin transaksi: "poinKopi", "poinMakanan", dan "poinMerchandise"
//    (isi dengan angka bulat bebas, misal: 45, 35, 20).
// 2. Buat variabel "totalPoin" yang menjumlahkan ketiga variabel poin di atas.
// 3. Cetak rincian perolehan poin dan totalPoin ke Console menggunakan console.log().
console.log("=== Status Poin ===")

let Poin_Kopi = 60;
let Poin_Makanan = 30;
let Poin_Merchandise = 10;

let Total_Poin = Poin_Kopi + Poin_Makanan + Poin_Merchandise;

console.log("Poin Kopi : " + Poin_Kopi);
console.log("Poin Makanan : " + Poin_Makanan);
console.log("Poin Merchandise : " + Poin_Merchandise);
console.log("Total Poin : " + Total_Poin);

// ============================================================
// AKTIVITAS 4: Percabangan if-else — Penentuan Tier Membership
// ============================================================

// TODO 4:
// 1. Buat variabel "tierMember" dan "benefit" bertipe string kosong ("").
// 2. Gunakan percabangan "if - else if - else" berdasarkan nilai "totalPoin":
//    - totalPoin >= 100 : tierMember = "Platinum", benefit = "Diskon 20% + Gratis 1 Minuman Signature"
//    - totalPoin >= 70  : tierMember = "Gold", benefit = "Diskon 10% di setiap transaksi"
//    - totalPoin >= 40  : tierMember = "Silver", benefit = "Diskon 5% untuk menu minuman"
//    - selain itu       : tierMember = "Bronze", benefit = "Member Reguler (kumpulkan poin untuk naik tier)"
// 3. Cetak hasil tierMember dan benefit ke Console.
// 4. Tampilkan ringkasan hasil member (nama, total poin, tier, benefit) via dialog alert().

console.log("=== Status Member ===")

let Tier_Member = "";
let Benefit = "";

if (Total_Poin >= 100) {
    Tier_Member = "Platinum";
    Benefit = "Diskon 20% + Gratis 1 Minuman Signature";
} else if (Total_Poin >= 70 ) {
    Tier_Member = "Golden";
    Benefit = "Diskon 10% di setiap transaksi";
} else if (Total_Poin >= 40 ) {
    Tier_Member = "Silver";
    Benefit = "Diskon 5% untuk menu minuman";
} else {
    Tier_Member = "Bronze";
    Benefit = "Member Reguler";
}

console.log("Tier Member : " + Tier_Member);
console.log("Benefit : " + Benefit);

alert(
    "==== Ringkasan Member ====" + "\n" +
    "Nama Pelanggan : " + Nama_Pelanggan + "\n" +
    "Total Poin : " + Total_Poin + "\n" +
    "Tier Member : " + Tier_Member + "\n" +
    "Benefit : " + Benefit
);


// ============================================================
// AKTIVITAS 5: Function — Membuat Fungsi yang Bisa Dipakai Ulang
// ============================================================

// TODO 5A:
// Buat fungsi "hitungTotalPoin(p1, p2, p3)" yang menerima 3 parameter nilai poin,
// menjumlahkannya, dan mengembalikan (return) nilai total penjumlahannya.

function Hitung_Total_Poin(p1,p2,p3) {
    let Total = p1 +p2 +p3;
    return Total;
}

// TODO 5B:
// Buat fungsi "tentukanTierMember(poin)" yang menerima 1 parameter nilai poin,
// dan mengembalikan (return) string nama tier beserta keterangannya.

function Tentukan_Tier_Member(Total){
    ////setiap baris  "if" untuk menentukan predikat
    if(Total >= 100) return "Platinum";
    if(Total >= 70) return "Golden";
    if(Total >= 40) return "Silver";
    return "Bronze";
}

let Pelanggan_A = Hitung_Total_Poin(40, 30, 10);
let Pelanggan_A_Member = Tentukan_Tier_Member(Pelanggan_A);

console.log("==== Simulasi Function Member =====");
console.log("Total Poin : " + Pelanggan_A);
console.log("Tier Member : " + Pelanggan_A_Member);

// TODO 5C:
// Buktikan bahwa fungsi di atas bisa dipakai ulang (reusable):
// 1. Hitung total poin dan tentukan tier untuk simulasi Pelanggan B (misal poin: 35, 25, 20).
// 2. Hitung total poin dan tentukan tier untuk simulasi Pelanggan C (misal poin: 15, 10, 5).
// 3. Cetak data Pelanggan B dan C ke tab Console.

let Pelanggan_B = Hitung_Total_Poin(50, 20, 30);
let Pelanggan_B_Member = Tentukan_Tier_Member(Pelanggan_B);

console.log("==== Simulasi Function Member B =====");
console.log("Total Poin : " + Pelanggan_B);
console.log("Tier Member : " + Pelanggan_B_Member);

let Pelanggan_C = Hitung_Total_Poin(20, 45, 20);
let Pelanggan_C_Member = Tentukan_Tier_Member(Pelanggan_C);

console.log("==== Simulasi Function Member  C =====");
console.log("Total Poin : " + Pelanggan_C);
console.log("Tier Member : " + Pelanggan_C_Member);
// ============================================================
// AKTIVITAS 6: Array & For Loop — Daftar Menu Rekomendasi
// ============================================================

// TODO 6A:
// Buat variabel Array bernama "menuRekomendasi" yang berisi minimal 5 nama menu kopi/makanan.

let Daftar_Menu_Rekomendasi = [ 
    "Roti Panggang Milo",  
    "Kopi Susu Gula Aren", 
    "Matcha Strawberry", 
    "Mocca Lattae", 
    "Pancake Bluberry" 
];

// TODO 6B:
// Gunakan perulangan "for loop" untuk mencetak setiap menu ke Console dengan format:
// "1. Nama Menu", "2. Nama Menu", dst. Gunakan (i + 1) untuk nomor urutnya.

for (let i = 0; i< Daftar_Menu_Rekomendasi.length; i++) {
    console.log((i +1) + "-" + Daftar_Menu_Rekomendasi[i]);
}

// TODO 6C:
// Cetak jumlah total menu di akhir daftar menggunakan properti ".length".
// Akhiri program dengan: console.log("=== TUGAS MANDIRI SELESAI DENGAN SUKSES! ===")

console.log("Total_Menu : " + Daftar_Menu_Rekomendasi.length + " Best Seller");
console.log("SEKIAN TERIMAKASIH - TIARA RAMZIYAH A");