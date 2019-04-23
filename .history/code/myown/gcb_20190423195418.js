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
function toGcb (arr)  {
  arr.sort((a, b) => b-a)
  console.log(arr)
  for(let i = 0, len=arr.length;i<len;i++) {
    var temp=0;
    while(arr[1]!=0){     //当num2==0时,最大公约数为num1
        temp=arr[0]%arr[1];
        arr[0]=arr[1];
        arr[1]=temp;
    }
    arr.splice(0,2,arr[0])
  }
  if(arr.length!==1) {
    toGcb(arr)
  } else {
    return arr[0]
  }
  return arr[0]
}

export default toGcb;
