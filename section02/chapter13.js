function add10(num){
    const promise =new Promise((resolve,reject)=>{
        //비동기 작업 실행하는 함수
        // executor
    
        setTimeout(()=>{
            //const num=null;
    
            if(typeof num==='number'){
                resolve(num+10);
            }else{
                reject("num이 숫자가 아닙니다");
            }
        },2000);
    });
    return promise;
}

//무한 체이싱 방지
const p=add10(0);
p.then((result)=>{
    console.log(result);
    return add10(result);
    })
    .then((result)=>{
    console.log(result);
    return add10(undefined);
})
.then((result=>{
    console.log(result);
})).catch((error)=>{
    console.log(error);
});


// console.log(promise);

//then 메서드
// -> 그 후에

// 체이싱싱
// promise.then((value)=>{
//     console.log(value);
// })
// .catch((error)=>{ // 에러 잡기
//     console.log(error);
// });



// setTimeout(()=>{
//     console.log(promise);
// },3000);