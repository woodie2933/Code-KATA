function solution(price, money, count) {
   //등차수열
    const total = price * (count * (count +1)) /2;
    
    // 부족한 금액
    return total > money ? total - money : 0;
}