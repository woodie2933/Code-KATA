process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const input = data.split(" ");
    const n = Number(input[0]); // 가로 길이
    const m = Number(input[1]); // 세로 길이
    
    const row = `*`.repeat(n); // 가로 길이만큼 별 생성
    for (let i = 0; i < m; i++) { // 세로 길이만큼 반복출력
        console.log(row);
    }
});
