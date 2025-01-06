// 1. 배열 순회
let arr= [1,2,3];

//1.1 배열 인덱스
for(let i=0;i<arr.length;i++){
  //  console.log(arr[i]);
}

let arr2=[4,5,6,7,8];
for(let i=0;i<arr2.length;i++){
    //console.log(arr2[i]);
}

//1.2 for of 반복문
for(let item of arr){ //arr에서 하나씩 꺼내서 item에 저장
   // console.log(item); // 1....2....3 들어감
}

//2. 객체 순회
let person={
    name:"진성원",
    age:24,
    hobby:"야구",
};

//2.1 Object.keys 사용
// ->객체에서 key 값들만 뽑아서 새로운 배열로 반환
let keys =Object.keys(person);
// console.log(keys);

for(let i=0;i<keys.length;i++){
}

for(let key of keys){
    //console.log(key,person[key]); //key와 value 같이 하려면 person[key] 
}

// 2.2 Object.values
// -> 객체에서 value 값들만 뽑아서 새로운 배열로 반환
let values=Object.values(person);

for(let value of values){
   // console.log(value);
}

// 2.3 for in
for(let key in person){
    console.log(key,person[key]);
}