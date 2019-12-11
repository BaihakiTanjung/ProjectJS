var main = true;
const kesempatan = 3;

alert("Tebak Angka dari 1 - 10\nKamu punya " + kesempatan + " kali kesempatan");

const com = Math.floor(Math.random() * 10) + 1;

while (main) {

    var i = kesempatan;
    
    for (i; i > 0; i--) {
        const p = prompt("Kesempatan ke- " + i);

        var j = i - 1;

        if (p == com) {
            alert('Angka yg kamu masukkan : ' + p + '\nSelamat Kamu Benar');
            break;
        } else if (p < com) {
            if (j == 0) {
                alert('gagal');
            } else {
                alert('Terlalu Rendah...\nAyo kamu masih punya ' + j + ' Kesempatan!');
            }
        } else if (p > com) {
            if (j == 0) {
                alert('gagal');
            } else {
                alert('Terlalu Tinggi...\nAyo kamu masih punya ' + j + ' kesempatan!');
            }
        }

    }

    main = confirm("Main Lagi?");
}