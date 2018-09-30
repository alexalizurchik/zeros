module.exports = function getZerosCount(num) {
  let count = 0;
  
  while (num >= 5) {
    num = parseInt(num / 5);
    count += num;
  }
  
  return count;
}
