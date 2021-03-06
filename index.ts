function solution(A) {
    const A2 = A.filter(item => item >= 1).sort((par1, par2) => par1 - par2);
    let foundNumber = 1;
    for (let i in A2) {
      if (foundNumber < A2[i]) {
        return foundNumber;
      }
      foundNumber = A2[i] + 1;
    }
    return foundNumber;
  }
