function solution(x) {
    const num = String(x).split('').reduce((acc, curr) => acc + Number(curr), 0);
    
    return x % num === 0;
}