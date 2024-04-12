function getMinMaxSum(numbers) {
    
    const [min, max, ...rest] = numbers.sort((a, b) => a - b);
    
    const sum = rest.reduce((acc, num) => acc + num, 0);
    return { min, max, sum };
}


const numbers = [4, 5, 7, 8, 9];
const result = getMinMaxSum(numbers);
console.log(result); 
