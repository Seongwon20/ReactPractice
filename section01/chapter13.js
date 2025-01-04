//1. 콜백함수
function main(value){
  
    value();
   
}

main(()=>{
   // console.log("i am sub");
});

//2. 콜백함수의 활용
function repeat(count,callback){
    for(let idx=1; idx<=count;idx++){
        callback(idx);
    }
}
 

repeat(5,function(idx){ // or repeat(5,(idx)=>{ 이걸로 하면 더 간결함
    console.log(idx);
});

repeat(5,function(idx) {
    console.log(idx * 2);
});
