// 함수선언

// function greeting(){
//     console.log("안녕하세요");
// }
// console.log("호출전");
// greeting();
// console.log("호출후");


let area1= getArea(10,20);
console.log(area1);
let area2= getArea(30,20);
console.log(area2);
getArea(120,200);

//호이스팅
//-> 끌어올리다 라는 뜻뜻

function getArea(width,height){
    // let width=10;
    // let height=20;
    function another(){ // 중첩 함수
     console.log("another");
    }
    another();
     let area=width*height;
 
    // console.log(area);
    return area;
 
 }