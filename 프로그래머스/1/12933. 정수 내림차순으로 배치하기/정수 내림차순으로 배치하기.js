// function solution(n) {
//     const nm = String(n).split('');
//     nm.sort((a,b)=>b-a);
//     const mn = parseInt(nm.join(''))
    
//     return mn;
// }

function solution(n) {
    const number = String(n).split('');
    number.sort((a,b)=>b-a);
    const sortedNumber = parseInt(number.join(''));
    return sortedNumber;
}