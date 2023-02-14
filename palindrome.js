let str = 1221;
let number = str;
let sum = '';
while(number>0){
let m = number%10;
sum +=m;
number = Math.floor(number/10);
}
if(sum == str){
console.log("palindrome");
}
else{
console.log("not palindrome");
}

