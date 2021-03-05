// 自上而下
function fib(n) {
  if (n === 1 || n === 2) {
    return 1
  }
  return fib(n - 2) + fib(n - 1)
}
function fib2(n) {
  function _fib(cache, n) {
    if (n === 1 || n === 2) {
      return 1
    }
    if (cache[n]) {
      return cache[n]
    }
    cache[n] = _fib(cache, n - 2) + _fib(cache, n - 1)
    return cache[n]
  }
  let cache = []
  return _fib(cache, n)
}

// 自下而上
function fib3(n) {
  let dp = []
  dp[1] = dp[2] = 1
  for (let i = 3; i <= n; i++) {
    dp[i] = dp[i - 2] + dp[i - 1]
  }
  return dp[n]
}

function Change(changeType) {
  this.changeType = changeType
  this.cache = {}

  this.makeChange = function(amount) {
    // 最少张数
    let min = []
    if (!amount) {
      return []
    }
    if (this.cache[amount]) {
      return this.cache[amount]
    }
    for (let i = 0; i < this.changeType.length; i++) {
      // 先找一张
      const leftAmount = amount - this.changeType[i]
      let newMin
      if (leftAmount >= 0) {
        // 只要还得继续找钱
        // 下一步找钱的数组
        newMin = this.makeChange(leftAmount)
      }
      if ((leftAmount >= 0 && newMin.length < min.length - 1) || !min.length) {
        // 纠正结果
        min = [this.changeType[i]].concat(newMin)
      }
    }
    return (this.cache[amount] = min)
  }
}
// console.time('fib')
// console.log(fib3(245))
// console.timeEnd('fib')

const change = new Change([1, 5, 10, 20, 50, 100])
console.log(change.makeChange(13))
console.log(change.makeChange(5))
console.log(change.makeChange(163))
