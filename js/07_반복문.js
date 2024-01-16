// 12345 출력
function check1(){

    let result = ""; //빈 문자열

    for(let num = 1 ; num <= 5 ; num++){
        result += num;
    }
    console.log("result : ", result);
}

// 1부터 10까지 출력
function check2(){
    for(let num = 1 ; num <=10 ; num++){
        console.log("num : ", num);
    }
}

// 1부터 20까지 출력
function check3(){
    for(let num = 1 ; num <=20 ; num++){
        console.log("num : ", num);
    }
}

// 5부터 15까지 1씩 증가하며 출력
function check4(){
    for(let num = 5 ; num <= 15 ; num++){
        console.log("num : ", num);
    }
}

// 1부터 30까지 2씩 증가하며 출력
function check5(){
    for(let num = 1 ; num <=30 ; num += 2){
        console.log("num : ", num);
    }
}

//1부터 10까지 모든 정수의 합
let sum = 0; // 합계를 저장하기 위한 변수, 0은 더해도 아무 영향X
function check6(){
    for(let num = 1 ; num <= 10 ; num++){
        sum += num; // sum에 num 값(1~10) 누적
    }

    console.log("sum : ", sum);
 }

 //입력 받은 범위 내 모든 정수의 합 구하기
function sumFn(){
    // 한줄로 요약(input 에 작성된 값을 얻어와 저장)
    const start = Number(document.getElementById("inputNumber1-1").value);
    const end = Number(document.getElementById("inputNumber1-2").value);

    // 결과를 출력하기 위한 요소 (span#result1) 인 요소 얻어와 저장
    const result1 = document.getElementById("result1");

    // 합계를 저장할 변수
    let sum = 0;
    for (let num = start ; num <= end ; num++){ // start 부터 end 까지 1씩 증가
        sum += num; // num 값을 sum 에 누적
    }

    result1.innerText = sum;
}

// 입력 받은 범위 내에서 증감식 만큼 증가하며 모든 정수 출력하기
function excuteFn2(){
    const start = Number(document.getElementById("inputNumber2-1").value);
    const end = Number(document.getElementById("inputNumber2-2").value);
    const val = Number(document.getElementById("inputNumber2-3").value); // 증가값

    // 결과를 출력할 ul 요소
    const ul = document.getElementById("result2");

    ul.innerHTML = ""; //이전 ul에 작성된 내용을 모두 삭제

    for(let num = start ; num <= end ; num += val){
        ul.innerHTML += `<li>${num}</li>`;
    }
// 요소.innerText = "문자열"; <-요소의 내용으로 문자열을 대입, html 태그 사용시 해석X 그대로 출력 
// innerHTML = "<h2>문자열</h2>";  <- 요소의 내용으로 문자열을 대입, HTML 태그를 해석해서 화면에 출력
}

// 구구단 2단 출력하기
function check7(){
    for(let num = 1 ; num <=9 ; num++){ //num <- 곱해지는 수
        console.log(`2 x ${num} = ${2 * num}`);
    }
}

// 입력 받은 단 출력하기
function executeFn3(){
    const ul = document.getElementById("result3");
    const num1 = Number(document.getElementById("input3").value);

    ul.innerHTML = "";


    //입력받은 단이 2~9 사이가 아닐 경우 "2~9사이만 입력해주세요" 알림창 띄우기
    if(num1 < 2 || num1 > 9){
        alert("2~9사이만 입력해주세요.");
        return; // 함수를 종료하고 호출한 곳으로 돌아감
    }

    for(num2 = 1 ; num2 <= 9 ; num2 ++){
        ul.innerHTML += `<li>${num1} x ${num2} = ${num1 * num2}</li>`;
    }
}

// 특정 배수 마다 지정된 모양으로 출력
function executeFn4(){
    const input = Number(document.getElementById("input4").value);
    const output = document.getElementById("output4").value;
    const result = document.getElementById("result4");
    
    let str = ""; //출력할 문자열을 저장할 변수

    for(let x = 1 ; x <= 50 ; x++){

        if(x % input == 0){
            str += output + " ";

        } else{
            str += x + " ";
        }

        if(x % 10 == 0){
            str += output + "<br>";
        }
    }

    result.innerHTML = str;
}

function check8(){

    let str = "";
    result = document.getElementById("result5");

    for (let y = 1 ; y <= 4 ; y++){

        for(let x = 1 ; x <= 5 ; x++){

            str += x;
        }

        str += "<br>";
    }

    result.innerHTML = str;
}

function check9(){
    let str = "";
    result = document.getElementById("result6");

    for(let y = 1 ; y <= 5 ; y++){

        for(let x = 1 ; x <= y ; x++){

            str += x;
        }
        
        str += "<br>";
    }

    result.innerHTML = str;
}

function check10(){
    for(let num = 5 ; num <= -5 ; num -= 2){
        console.log(num);
    }
}

function check11(){

    let str = "";
    result = document.getElementById("result11");
    
    for(let y = 5 ; y >= 1 ; y --){

        for(let x = 1 ; x <= y ; x++){
            str += x;
        }

        str += "<br>";
    }

    result.innerHTML = str;
}

// if, for문 내에 코드가 한 줄만 있다면 {} 생략 가능
function check12(){

// 위쪽 삼각형
for(let row=1 ; row <= 3 ; row++){
    
    let str = "";
    for(let col=1 ; col<=row ; col++)   str += col;
    console.log(str);
}

// 아랫쪽 삼각형
for(let row = 4 ; row >= 1 ; row--){

    let str = "";
    for(let col=1 ; col<=row ; col++)   str += col;
    console.log(str);
}


console.log("----------------")

// 2중 for문 한 번만 사용하기

for(let row = 1 ; row <=7 ; row++){

    let end = 0;
    if(row <= 4)  end = row; 
    else          end = 7 - row + 1;

    let str = "";
    for(let col = 1; col<=end ; col++){
        str += col;
    }

    console.log(str);
}


}

// 카운트를 이용해서 출력하기
function check13(){

    let count = 1; //카운트 위한 변수 선언
     

    for(let y = 1 ; y <= 3 ; y++){

        let str = "";
        for(let x = 1 ; x <= 4 ; x++){
            str += count + " ";
            count++;
        }
        console.log(str);
    }
}

// 1부터 100사이에 입력된 수의 배수 count
function check14(){
    const input = Number(document.getElementById("input14").value);
    const result = document.getElementById("result14");

    // 카운트 하기 위한 변수 선언 
    let count = 0;

    for(let num = 1 ; num <= 100 ; num++){

        if(num % input == 0){ // num 이 input 의 배수와 맞는 경우
            count++;
        }
    }

    result .innerText = `${input} 의 배수 : ${count} 개`;
}

function check15(){
    let count = 0;

    for(let row = 1 ; row <= 7 ; row++){
        
        if(row <= 4) count++;
        else count--;
        
        let str = "";
        for(let col = 1 ; col <= count ; col++){
            str += col;
        }
        console.log(str);
    }
}

// while 확인
function check16(){
    let val;

    // 취소 누르기 전까지 반복
    while(val !== null){
        val = prompt("입력후 확인"); //변수에 prompt 값 대입, 확인 : 입력한값, 취소: null
        console.log(val);
    }

}

// 메뉴 주문
function check17(){
    const gimbop = 3000
    const ramen = 35020;
    const donkkaseku = 5000;

    //주문 개수 카운트
    let gCount = 0;
    let rCount = 0;
    let dCount = 0;

    // prompt 로 입력한 값을 저장할 변수
    let input; // undefined

    while(input !== null){
        input = prompt("메뉴 번호를 입력하세요.");

        switch(input){
            case '1' : gCount++; break;
            case '2' : rCount++; break;
            case '3' : dCount++; break;
            case null : alert("주문 완료!"); break;

            default : alert("메뉴에 작성된 번호만 입력해주세요.");
        }
    }

    alert(`김밥 ${gCount}, 라면 ${rCount}, 돈까스 ${dCount} `);
    let sum = (gCount * gimbop) + (rCount * ramen) + (dCount * donkkaseku);
    alert(`총 가격: ${sum} 원`);
}

// while을 for처럼 사용하기
function check18(){

    let num = 1; 
    while (num <= 10){
        console.log(num);
        num++;
    }

    console.log("------");

    let x = 10;
    while(x > 0){
        console.log(x);
        x--;
    }
}


  