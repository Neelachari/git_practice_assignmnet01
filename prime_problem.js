for(let i=1;i<=50;i++){
    let count=0
for(let j=0;j<=i;j++){
    if(i%j==1){
        count++
    }
}
if(count==2){
    console.log(i,"is a Prime");
}
else{
    console.log(i,"is Not a Prime")
}

}


