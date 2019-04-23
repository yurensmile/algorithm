// function toGcb(a, b) {
//   let gcb
//   let min = Math.min(a, b);
//   let rest = a > b ? a%b : b%a;
//   if(rest !== 0) {
//     toGcb(min, rest)
//   } else {
//     return min
//   }
//   return gcb
// }
console.log(+Date.now())
let max = Math.max(arr[0], arr[1]);
function toGcb (arr)  {
  var temp=0;
  while(arr[1]!=0){     //当num2==0时,最大公约数为num1
      temp=arr[0]%arr[1];
      arr[0]=arr[1];
      arr[1]=temp;
  }
  arr.splice(0,2,arr[0])
  if(arr.length!==1) {
    toGcb(arr)
  } else {
    return arr[0]
  }
  return arr[0]
}
console.log(toGcb([33,15,21,27]))
console.log(+Date.now())
