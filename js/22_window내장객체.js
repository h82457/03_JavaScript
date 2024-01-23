/* setTimeout(함수, 지연시간(ms)) */
const btn1 = document.querySelector("#btn1");

btn1.addEventListener("click", () => {
    window.setTimeout(() => {
        console.log("3초 후에 출력된 문자열");
    }, 3000); //3초

    window.setTimeout(() => {
        console.log("1초");

    }, 1000);

    window.console.log("바로 출력");

});
/* [window.]setInrerval(함수, 지연시간(ms)) */
const btn2 = document.querySelector("#btn2");

btn2.addEventListener("click", (e) => {
    window.setInterval( () => {

        const span = document.querySelector("#box2 > span");
        // 이전 내용 + 1 한 숫자를 다시 내용으로 대입
        span.innerText = Number(span.innerText) + 1;
    } , 1000); // 1초 마다 수행

    // 클릭된 버튼을 비활성화
    e.target.disabled = true;
});

/* [window.]clearInrerval(Inrerval) */
const target3 = document.querySelector("#target3");
const start3 = document.querySelector("#start3");
const stop3 = document.querySelector("#stop3");

let currInterval; // 현재 interval 저장

// 시작 버튼 클릭시 0.1 초마다 target의 내용을 1씩 증가
start3.addEventListener("click", e => {
    currInterval = setInterval(() => {
        target3.innerText = Number(target3.innerText) + 1;
    }, 100);

    e.target.disabled = true; // 비활성화
});

// 멈춤 버튼 클릭시 
stop3.addEventListener("click", () => {
    window.clearInterval(currInterval);
    start3.disabled = false;
});

/* 팝업창 */
const openPopup1 = document.querySelector("#openPopup1");

openPopup1.addEventListener("click", () => {
    window.open("23_스톱워치.html");
});

const openPopup2 = document.querySelector("#openPopup2");

openPopup2.addEventListener("click", () => {
    window.open("23_스톱워치.html","__blank", "popup");
});

/* 팝업창 + 옵션 */
const openPopup3 = document.querySelector("#openPopup3");

openPopup3.addEventListener("click", () => {
    
    let options = [];
    options.push("width=400");
    options.push("height=600");

    /* 팝업창 띄우는 위치를 지정 ( 메인모니터에서만 적용 ) */
    options.push("left=500");
    options.push("top=100");

    // 배열명.toString() : "요소,요소,요소"
    // -> 배열 내 요소를 ,를 구분자로 한 하나의 문자열로 변환

    window.open("23_스톱워치.html","__blank", options.toString());
});

/* 팝업창(자식)이 부모창의 값을 읽고/쓰기 */
const openPopup4 = document.querySelector("#openPopup4");

openPopup4.addEventListener("click", () => {
  const options = [];

  options.push("width=600");
  options.push("height=300");
  options.push("left=500");
  options.push("top=100");

  window.open("22_팝업창.html", "_blank", options.toString());

});