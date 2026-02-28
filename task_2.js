function getMultiplacationTable(total){
    let multiplyTable = "";
    for (let i = 1; i <= total; i++) {
        for (let j = 1; j <= total; j++){
            multiplyTable += i * j + " ";
        }
        multiplyTable += "\n";
    }
    return multiplyTable;
}
console.log(getMultiplacationTable(5));