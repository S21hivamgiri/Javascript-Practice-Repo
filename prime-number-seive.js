
function findAllPrimesUpto(n) {
    let touched = [];
    let sqrtOfN = Math.sqrt(n);
    primes = [];
    primes.push(2);
    for (let i = 2; i <= n; i += 2) {
        touched[i] = true;
    }
    for (let i = 3; i <= sqrtOfN; i++) {
        if (!touched[i]) {
            for (let j = i * i; j <= n; j = j + (i * 2)) {
                touched[j] = true;
            }
        }
    }
    for (let i = 2; i <= n; i++) {
        if (!touched[i]) {
            primes.push(i);
        }
    }
    return primes;
}

console.log(findAllPrimesUpto(100))