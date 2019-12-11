var main = true;
while (main) {
    var p = prompt('Pilih : Gunting, Kertas atau Batu ?');
    var c = Math.random();

    if (c < 0.33) {
        c = "Gunting";
    } else if (c >= 0.34 && c <= 0.66) {
        c = "Kertas";
    } else {
        c = "Batu";
    }

    var hasil = "";
    if (p == c) {
        hasil = "Seri";
    } else if (p == "Batu") {
        hasil = (c == "Gunting") ? "Menang" : "Kalah";
    } else if (p == "Gunting") {
        hasil = (c == "Kertas") ? "Menang" : "Kalah";
    } else if (p == "Kertas") {
        hasil = (c == "Batu") ? "Menang" : "Kalah";
    } else {
        hasil = "Anda Salah Memasukkan Input!!";
    }

    if (hasil == "Anda Salah Memasukkan Input!!") {
        alert("Kamu Salah Input");
    } else {
    alert("Kamu Memilih " + p + " Komputer Memilih " + c + " Dan Hasilnya kamu : " + hasil);
    }

    main = confirm("Ingin Bermain Lagi ?");
}
alert("Terimakasih Sudah Bermain!!");