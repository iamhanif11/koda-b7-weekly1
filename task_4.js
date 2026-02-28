// pop() -> menghapus elemen terakhir array
let angka = [1, 2, 3, 4,];
angka.pop();
console.log(angka);// Output:[1,2,3]

// slice() -> mengambil elemen array tanpa mengubah array asli
let angka1 = [1, 2, 3, 4, 5];
let hasil = angka1.slice(1, 4);
console.log(hasil); // Output : [2, 3, 4]

// trim() -> menghapus spasi pada awal dan akhir string
let nama1 = "   Budi   ";
let nama2 = nama1.trim();
console.log(nama2);// Output :Budi

// join() -> menggabungkan array menjadi string
let kata = ["Hello", "World"];
console.log(kata.join(" "));// Output: Hello World

// forEach() melakukan pengulangan pada setiap elemen array
const buah = ["Apel", "Mangga", "Semangka"];
buah.forEach((item, index) =>{
    console.log(`${index}: ${item}`);
});
/*Output :
0: Apel
1: Mangga
2: Semangka
*/