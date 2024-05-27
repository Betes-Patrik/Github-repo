function otoslotto() {
   
    let numbers = [];
    while (numbers.length < 5) {
        let num = Math.floor(Math.random() * 90) + 1;
        if (!numbers.includes(num)) {
            numbers.push(num);
        }
    }
    
    numbers.sort((a, b) => a - b);
    return numbers;
}

console.log(otoslotto());