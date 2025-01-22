function solution(n) {
    const N = Math.sqrt(n);
    
    if (N === Math.floor(N)) {
        return (N + 1) ** 2;
    }
    return -1;
}