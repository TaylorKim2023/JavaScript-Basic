
function solution(answers) {
    let answer = [40];
  
      // 수포자들의 답안 패턴
    let one = [1, 2, 3, 4, 5];
    let two = [2, 1, 2, 3, 2, 4, 2, 5]
    let three = [ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  
      // 맞춘 정답의 개수를 저장
    let oneResult = 0;
    let twoResult = 0;
    let threeResult = 0;
  
      // 정답과 수포자들의 답안을 비교
    for (let i = 0; i < answers.length; i++) {
      if (one[i % 5] === answers[i]) oneResult++;
      if (two[i % 8] === answers[i]) twoResult++;
      if (three[i % 10] === answers[i]) threeResult++;
    }
  
      // 가장 많이 맞춘 정답의 개수
    let max = Math.max(oneResult, twoResult, threeResult);
  
    if (oneResult === max) answer.push(1);
    if (twoResult === max) answer.push(2);
    if (threeResult === max) answer.push(3);
   
    return answer;
}