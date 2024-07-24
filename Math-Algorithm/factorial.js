function factorial(n){
    let facto = 1
    for(let i=2 ; i<=n ; i++){
        facto = facto * i
    }
    return facto
}

console.log(factorial(5));
