var countPrimes = function (n) {
    let x = new Array(n).fill(true);

    x[0] = false, x[1] = false;

    for (let i = 2; i * i < n; i++) {
        for (let j = i * i; j < n; j += i) {
            x[j] = false;
        }
    }

    return x.filter((num) => num == true).length;
};