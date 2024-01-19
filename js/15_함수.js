/* 매개 변수, 전달 인자 */

const input1 = document.querySelector("#input1");
const btn1 = document.querySelector("#btn1");

// 2개의 값을 전달 받아 출력하는 함수
function print1(num, str){
    console.log(`${num} 은/는 ${str} 입니다.`);
}



/* #btn1 클릭시 #input1 의 값을 읽어와 print1() 함수 호출 */
btn1.addEventListener("click",function(){

    const value = input1.value;

    // input1에 값이 입력이 안되었거나, 빈칸만 입력된 경우
    if(value.trim().length == 0){
        console.log("숫자를 입력해주세요.");
        return; // 함수 종료<-해당 (+ 호출한 곳으로 돌아감)
    }

    let result;
    
    if(Number(value) == 0) result = "0";
    else if(Number(value) > 0) result = "음수";
    else result = "음수";

    /* 함수 호출 (값 전달) */
    /* [중요] 전달되는 값의 순서가 중요하다! */
    print1(value, result);
    print1(result, value);
});

/* 매개 변수로 배열 전달하기 */
function arrayTest(arr){ 
    // 전달 받은 배열의 모든 요소 출력하기
    for(let i=0 ; i<arr.length ; i++){

        if(arr[i] == '멜론') arr[i] = '딸기';
        //^ 변수는 정보 하나밖에 저장불가-> 배열은 다른곳에 저장+참조(주소복사)해서 사옹하기때문에 복사본이 아닌 원본의 정보가 바뀜. 

        console.log(`${i} 번 인덱스 값:`,arr[i]);
    }

}

// #btn2a 가 클릭 되었을 때 arrayTest() 함수 호출

document.querySelector("#btn2a").addEventListener("click",function(){

    const arr1 = [10,20,30];
    const arr2 = ['사과','바나나','멜론'];

    const temp = 100;

    /* 
            참조:
        - 객체 지향 언어에서 배열, 객체 등 object는 값을 여러개를 가지고있는 자료형이나
        변수는 값을 1개만 저장할 수 있기때문에 object를 메모리 다른곳에 저장하고 저장된곳의 주소를 변수에 저장해서
        필요할때마다 해당 주소를 찾아가 원하는 값을 얻어오거나 수정할 수 있게 하는것
        이때 주소를 찾아가는것 <- 참조
    */

    arrayTest(arr1); 
    arrayTest(arr2);

     console.log("arr2[2] : ", arr2[2]);
     // arrTest(arr2) 호출시 arr2 배열을 통째로 복사해서 전달하는 것이 아닌 arr2에 저장된 주소만 보내서 함수를 수행
    
     // arrayTest() 함수에서 arr2와 같은 배열을 참조해서 수정 ->
     // 함수 수행 후 돌아 와서도 참조하고 있던 배열의 2번 인덱스 값이 변화되어 있음
     // (참조하고 있던 배열의 2번 인덱스 내용이 "딸기"로 변경))
});

/* 매개 변수로 요소 전달 */
function btn2bFn(el){ // btn2bFn(this) -> JS에서는 ()안에 this 사용X element/btn 등으로 사용
    // 매개변수 el(element) : 이벤트가 발생한 요소(HTML 에서 this)

    el.style.backgroundColor = "red";
}

/* --- */

/* 매개 변수로 함수 전달 */
function print2(otherFn){ //아래에서 print2의 매개변수자리 atherFn에 sumFn값 전달
    // otherFn == sumFn (변수 이름만 달라짐)

    // print2(function(a,b){ return a + b; } 와 내용이 같다

    console.log(`3 + 4 = ${otherFn(3,4)}`);
}

const btn2c = document.querySelector("#btn2c");
btn2c.addEventListener("click", function(){

    // 함수도 변수에 저장 가능
    const sumFn = function(a,b){// a, b 를 전달 받아서 
        return a + b; // 함수를 끝냄 + 값(a+b)을 가지고 호출한곳으로 돌아감
    }

    // 매개 변수로 함수 전달
    print2(sumFn); // print2 에 sumFn 전달
});

/* --- */

/* return 확인하기1 */
function sumFn(arr){ // 전달된 배열 요소의 합을 반환
    
    let sum = 0;

    for(let i=0 ; i<arr.length ; i++){
        sum += arr[i];
    }

    return sum; 
}

function pow(num, x){ // 전달받은 수 (num)을 x제곱후 반환

    let result = 1; // 곱했을때 결과에 영향을 주지 않기 위해 1로 초기화 

    for(let i=0 ; i < x ; i++){
        result *= num;
    }

    return result;
}

const btn3a = document.querySelector("#btn3a");

btn3a.addEventListener("click", function(){

    const numbers = []; // 빈 배열 생성
    
    /* 배열.push(값) : 배열의 마지막 요소로 값을 추가 */

    numbers.push(30);
    numbers.push(50);
    numbers.push(4);

    numbers.push(pow(2,5)); 
    // ^ == numbers.push(32) (<-매개변수로 pow 함수로 보내서 실행된 return 값(32)를 받아옴)

    console.log("합계 : ", sumFn(numbers)); // 위에서 값을 추가한 배열을 sumFn 으로 보내서 받은 값 출력
});


/* --- */
/* 화살표 함수 */

const arrowList = document.querySelectorAll(".arrow");

/* 화살표 함수 기본 형태 */
// arrowList[0].addEventListener("click", function(){});
arrowList[0].addEventListener("click", ()=>{
    alert("화살표 함수 기본 형태 연습");
});

/* 매개 변수가 1개인 경우 */

/* 
arrowList[1].addEventListener("click", function(e){
    //e: 이벤트 객체(모든 이벤트 관련 정보가 담겨있는 객체),e.target: 이벤트가 발생한 요소
    e.target.style.backgroundColor = "grey";
});
 */
arrowList[1].addEventListener("click", e => {
    //e: 이벤트 객체(모든 이벤트 관련 정보가 담겨있는 객체),e.target: 이벤트가 발생한 요소
    e.target.style.backgroundColor = "grey";

    // print3( function(arr){})
    print3( arr => {
        let result = 1;

        for(let i=0 ; i<arr.length ; i++){
            result *= arr[i];
        }
        return result;
    })
}); 

function print3(otherFn, arr){

    const numbers = [1,2,3,4];

    console.log(otherFn(numbers));
}

/* return 한줄만 작성된 경우 */
arrowList[2].addEventListener("click", () => {

    twoNumberPlus( (a, b) => a + b )
});

// function twoNumberPlus( (a, b) => { return a + b;}  ){}
function twoNumberPlus( otherFn ){
    
    const input1 = Number(prompt("첫번째 값"));
    const input2 = Number(prompt("두번쨰 값"));

    alert(otherFn(input1, input2));
}



/* return 한줄인데 object만 반환하는 경우 */
arrowList[3].addEventListener("click", () => {
    printObject( (name, age) => {
        return {"name" : name, "age" : age} // JS 객체 { K:V, K:V }
    } );
});

function printObject(otherFn){
    const obj = otherFn("홍길동",20);

    console.log("obj.name", obj.name);
    console.log("obj.age", obj.age);
}

/* 즉시 실행 함수 확인 */
// (() => {})();
(() => {
    console.log("즉시 실행 함수입니다.");
    console.log("함수 모양이 좀 어렵죠?");
})();


