function palindromTest (word){
    let result = "";

    for(let i = word.length - 1; i >= 0; i--) {
        result += word[i];
    }

    if (result === word){
        return "Palindrom";
    } else {
        return "Bukan Palindrom";
    }
}

console.log(palindromTest("katak"));
console.log(palindromTest("baju"));

