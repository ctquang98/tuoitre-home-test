var arr = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];
var counts = {};

for (var i = 0; i < arr.length; i++) {
  var num = arr[i];
  counts[num] = counts[num] ? counts[num] + 1 : 1;
}

console.log(counts[5], counts[2], counts[9], counts[4]);