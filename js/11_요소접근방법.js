/* 클래스 접근 테스트 */
function classTest(){

    /* 
        유사배열 : 배열차럼 index, length 를 가지고 있으나 배열 전용 기능 (메소드)를 제공하지 않음
        (fill() ...)
    */
    // .cls-test 요소 모두 얻어오기 ( == 유사배열 )
    const divs = document.getElementsByClassName("cls-test");
    
    console.log(divs);

    divs[0].style.backgroundColor = "rgb(114,203,80)";
    divs[1].style.backgroundColor = "rgb(40,225,225)";
    divs[2].style.backgroundColor = "rgb(150 90,210)";

    for(let i = 0; i < divs.length ; i++){
        divs[i].innerText = `${i}번째 div 입니다.`;
    }
}

/* input 에 입력된 숫자를 모두 얻어와 합계 구하기 */
function classTest2(){

    /* 
        ** 요소들을 한번에 얻어오게 되면 배열 형태로 반환 -> index를 이용해서 배열 요소를 하나씩 꺼내서 다뤄야한다.**

    */

    const inputList = document.getElementsByClassName("cls-test2"); // HTML Collection(유사배열) 형태로 반환

    let sum = 0;

    for(let i = 0 ; i < inputList.length ; i++){

        // 요소에 작성된 값 하나씩 얻어오기 + number 형태로 변환
        const value = Number(inputList[i].value);

        sum += value;
    }

    alert(`합계 : ${sum}`);
}

/* 태그명으로 요소 접근하기 */
function tagNameTest(){
    // HTML 문서에 존재하는 모든 li 태그 요소를 얻어와 배열로 묶어서 반환
    const tagList = document.getElementsByTagName("li");

    for(let i = 0; i < tagList.length ; i++){

/*     tagList[i].innerText : 작성된 내용 얻어오기
        tagList[i].innerText = "abc" : 내용으로 "abc" 대입하기 */
        console.log(tagList[i].innerText);

        // 반복중 현재 선택된 요소의 배경색을 작성된 내용과 똑같은 색으로 변경
        tagList[i].style.backgroundColor = tagList[i].innerText;
    }
}

/* name 으로 요소 접근하기 (선택된 취미만 출력) */
function nameTest(){
    // name 속성값이 "hobby" 인 요소를 모두 얻어와 hobbyList 에 저장
    const hobbyList = document.getElementsByName("hobby");

    let str = ""; // 체크된 값 누적
    let count = 0; // 체크된 수 카운트

    for(let i = 0 ; i < hobbyList.length ; i++){ //순차접근
        /* 
            checkbox, radio 전용 속성 : ().checked)
            input요소.checked = true <- 체크 / input요소.checked = false <- 체크해제
        */
       // checkbox 의 값, 체크여부
       console.log(hobbyList[i].value,  hobbyList[i].checked);

        // 체크 여부를 검사해서 체크가 되어있다면 체크된 요소의 값을 str 변수에 누적, count 변수 값을 1증가
        if(hobbyList[i].checked){
            
            str += hobbyList[i].value + " ";
            count++;
        }
    }

    // #name-div 요소에 내용으로 결과 출력 (받아와서 변수에 저장하지않고 바로 출력)
    document.getElementById("name-div").innerHTML = `${str}<br><br>선택된 취미 개수 : ${count}`;
}

/* CSS 선택자로 요소 접근하기 */
function cssTest(){
    /* 
        1) document.querySelector("CSS 선택자"); -> 선택자가 선택한 요소 중 첫 번째 요소를 반환 (존재하면 1개 선택)
        2) document.querySelectorAll("CSS 선택자"); -> 선택한 요소 모두!를 배열(NodeList, 유사배열) 형태로 반환 (유사배열이기때문에 불러오고 하나씩 적용 필요)
    */
    const container = document.querySelector('[target-div="css-div"]'); // 따옴표 겹침 문제 해결 위해 바깥은 홑따옴표 사용

    // 요소의 테두리를 변경
    container.style.border = "10px solid black";

    // 첫번째 자식 div 선택 방법 1
    // const div1 = document.querySelector('[target-div="css-div"] > div:first-child');

    // 첫번째 자식 div 선택 방법 2 -> querySelector() 의 첫번째 요소만 선택한다는 특징 사용 (첫번째 요소가 강조될 경우 활용)
    const div1 = document.querySelector('[target-div="css-div"] > div');

    console.log(div1);

    div1.innerText = "CSS 선택자로 선택해서 값 변경됨";

    // 두번째 자식 div 선택
    const div2 = document.querySelector('[target-div="css-div"] > div:last-child');

    div2.innerText = "첫번째 요소가 아니면 querySelector() 특징 활용 못함";

    // 모든 자식 div 한번에 선택 (배열)
    const divList = document.querySelectorAll('[target-div="css-div"] > div');

    console.log(divList);

    // index 를 이용해서 요소 하나씩 접근
    divList[0].style.fontFamily = "궁서";
    divList[1].style.fontSize = "20px";

    for(let i = 0 ; i < divList.length ; i++){
        divList[i].onclick = function(){
            alert(`${i} 번째 인덱스 요소입니다`);
          }
    }
}

/* 카카오톡 모양의 채팅 화면 만들기 */
function readValue(){
    const bg = document.querySelector("#chatting-bg"); // 채팅이 출력되는 배경
    const input = document.querySelector("#user-input"); // 채팅 내용 입력 input

    // console.log(input.value);

    // 입력된 값이 없을 경우 : 입력값 X / 공백만 입력했을때
    /* 문자열.trim() : 문자열 좌우 공백을 제거 */
    if(input.value.trim().length == 0){
        alert("채팅 내용을 입력해 주세요.");
        input.value = ""; // 이전 input에 작성된 값(띄어쓰기) 삭제

        input.focus(); // input 에 커서 활성화

        return;
    }

    // 채팅 출력
    bg.innerHTML += `<p><span>${input.value}</span></p>`;

    // bg.scrollHeight : bg의 스크롤 전체 높이
    // bg.scrollTop : 스크롤의 윗부분 위치
    // bg.scrollTop = 값 : 스크롤 윗부분을 값 위치로 이동 (값이 너무 크면 제일 밑으로 이동)
    bg.scrollTop = bg.scrollHeight;


    //이전에 입력한 내용 삭제 + input 에 커서 활성화
    input.value = "";
    input.focus();
}


/* 
    아이디가 user-input 인 요소에서 키가 올라오는 동작이 발생(감지)했을 때 올라온 키가 "Enter"키 이면 readValue() 함수 호출
  
    keydown : 키가 눌러졌을때 (+꾹 구르고 있으면 계속 인식)
    keypress : 키가 눌러지고 있을 때
    keyup: 눌러지던 키가 떼어졌을때 (1회만 인식)
*/

document.querySelector("#user-input").addEventListener("keyup", function(e){
    // console.log(e);
    // e : 이벤트 객체 (발생한 정보를 담고있는 객체)
    //e.key : 입력한 키 반환

    if(e.key == "Enter"){ //엔터가 눌러졌을 때 
        readValue(); // 채팅창 출력 함수 호출
    }
});
