let str="racecar";

let pali="";

for(let i=str.length-1;i>=0;i--){
    pali+=str[i]
}
if(pali===str){
    console.log("Palindrome")
}
else{
    console.log("Not a Palindrome")
}