// here we had to find the k number which is repeating most times in the array but in sorted format.

let array = [2,2,3,4,4,1,1,1,4,5,4,2,6,2,5,4,4];    
let k=2;         //output 2 4
// if k=1    output 4
// if k = 4   1 2 4 5


// solution

let obj={};
for(let i=0;i<array.length;i++){
    if(obj[array[i]]){
        obj[array[i]]++;
    }else{
        obj[array[i]]=1;
    }
}

// console.log(obj)
let ans=[];
let maxKey;

let c=0;
while(c<k){
    let max=0;
  for(let i in obj){
    if(obj[i]>max){
        max=obj[i];
        maxKey=i;
    }
}
ans.push(maxKey);
delete obj[maxKey];
c++;
}
ans.sort((a,b)=>{
    return a-b;
})

console.log(ans.join(" "));