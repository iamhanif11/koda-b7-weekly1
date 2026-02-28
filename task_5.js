function showNumber(n){
    for (let i = 1; i <= n; i++){
        setTimeout(() => {
            console.log(i)
        }, i * 200)
    }
}
showNumber(10);