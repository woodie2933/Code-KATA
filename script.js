// https://github.com/woodie2933/Code-KATA.git

// 알고리즘 코드카타

// 자릿수 더하기
// 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요. 예를 들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.

function solution(n) {
  return n
    .toString()
    .split("")
    .reduce((sum, digit) => sum + parseInt(digit), 0);
}

// + 다른 방법

// 1. 문자열 반복자를 활용한 풀이
function solution(n) {
  let sum = 0;
  for (let digit of n.toString()) {
    sum += Number(digit); // 각 문자를 숫자로 변환 후 합산
  }
  return sum;
}

// 2. reduce, split 이용한 풀이
function solution(N) {
  // 숫자를 문자열로 변환 후 각 자릿수를 더함
  return N.toString()
    .split("") // 문자열을 배열로 변환
    .reduce((sum, digit) => sum + parseInt(digit), 0); // 각 자릿수를 숫자로 변환 후 합산
}

// N.toString()
// 자연수 N을 문자열로 변환하여 각 자릿수를 처리할 수 있도록 준비합니다.

// split('')  :  문자열을 각 글자로 나누어 배열로 만듭니다.
// 예: "123" → ['1', '2', '3'].

// reduce((sum, digit) => sum + parseInt(digit), 0)
// : 배열의 각 요소를 숫자로 변환하고 초기값 0에서부터 하나씩 더합니다.

// parseInt(digit)는 문자열을 정수로 변환합니다.

// 3. 숫자 연산만 사용한 풀이
function solution(N) {
  let sum = 0;
  while (N > 0) {
    sum += N % 10; // 마지막 자릿수 더하기
    N = Math.floor(N / 10); // 마지막 자릿수 제거
  }
  return sum;
}

// 4. for ... of 문을 활용한 풀이
function solution(N) {
  let sum = 0;
  for (const digit of N.toString()) {
    sum += parseInt(digit);
  }
  return sum;
}

// 5. map 과 reduce 조합 사용
function solution(N) {
  return N.toString()
    .split("") // 문자열을 배열로 변환
    .map(Number) // 각 요소를 숫자로 변환
    .reduce((sum, digit) => sum + digit, 0); // 합산
}

// 6. array.from 을 활용한 풀이
function solution(N) {
  return Array.from(N.toString()) // 문자열을 배열로 변환
    .reduce((sum, digit) => sum + Number(digit), 0); // 숫자로 변환 후 합산
}

// 7. 재귀 함수를 활용한 풀이
function solution(N) {
  if (N < 10) return N; // 한 자릿수라면 그대로 반환
  return (N % 10) + solution(Math.floor(N / 10)); // 마지막 자릿수를 더하고 나머지로 재귀 호출
}

// 8. 비트 연산자를 활용한 최적화
function solution(N) {
  let sum = 0;
  while (N) {
    sum += N % 10;
    N = ~~(N / 10); // 비트 연산으로 소수점 제거
  }
  return sum;
}

// 9. for문을 활용한 풀이
function solution(n) {
  let answer = 0;
  let m = String(n);
  for (let i = 0; i < m.length; i++) {
    answer += parseInt(m[i]);
  }
  return answer;
}
