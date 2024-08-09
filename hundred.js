function factorial(n) {
  const result = [1]; // 用数组存储

  for (let i = 2; i <= n; i++) {
    let carry = 0;

    for (let j = 0; j < result.length; j++) {
      const product = result[j] * i + carry;
      result[j] = product % 10; // 存储对应位 个位，十位 ...
      carry = Math.floor(product / 10); // 计算进位
    }
    // 如果有进位，则继续存储进位,假设 99 * 9 + 0= 891
    // carry = 89
    while (carry > 0) {
      // 先后push 9 8
      result.push(carry % 10);
      carry = Math.floor(carry / 10);
    }
  }

  return result.reverse().join("");
}

console.log(factorial(100));
