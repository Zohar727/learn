function count_say (n) {
  if (n == 1) {
    return '1';
  }
  if (n == 2) {
    return '11'
  }
  strArr = count_say(n-1);
  let res = [];
  var count = 1;
  for (var i = 1; i<strArr.length; i++) {
    if (strArr[i] == strArr[i-1]) {
      count++;
      // continue;
    } else {
      res.push(count);
      res.push(strArr[i-1]);
      count = 1;
    }
  }
  if (strArr[i-1] !== strArr[i-2]) {
    res.push(1);
    res.push(strArr[i-1]);
  } else{
    res.push(count);
    res.push(strArr[i-1]);      
  }  
  return res.join('');
}
console.log('test');
console.log(count_say(3));
