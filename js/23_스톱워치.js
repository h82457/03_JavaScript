const display         = document.querySelector("#display");
const list            = document.querySelectorAll("#display > span");
const startBtn        = document.querySelector("#startBtn");
const recordBtn       = document.querySelector("#recordBtn");
const resetBtn        = document.querySelector("#resetBtn");
const recordContainer = document.querySelector("#recordContainer");




let count = 0; // 1/100 초마다 1씩 증가한 값을 저장할 변수

// 1/100 초 : count % 100

// 1초      : count / 100 % 60
// 1분      : count / 100 / 60


let currInterval; // 인터벌 저장 변수

/* START 버튼 클릭 시 10ms 마다 display (시간)을 증가 */
startBtn.addEventListener("click", e => {

  // 클릭한 버튼에 작성된 내용이 "PAUSE" 인 경우
  if(e.target.textContent == "PAUSE"){
    e.target.textContent == "START" // 버튼 내용 변경
    clearInterval(currInterval); // currInterval 정지
    return;
  }

  // 클릭한 버튼에 작성된 내용이 "START" 인 경우
  currInterval = setInterval( () => {
    count++; // count 1증가
    output(); // 화면에 시간 출력

  }, 10); // 10ms

  e.target.textContent = "PAUSE";  // 버튼 내용 "PAUSE" 로 변경
 // e.target.disabled = true; // (임시)
});

/* 시계 출력 함수 */
function output(){
  let minute = Math.floor( count / 100 / 60 );
  let second = Math.floor(count / 100 % 60);
  let ms     = count % 100;

  // 0 붙여서 문자열로 변환해서 반환
  minute = attachZero(minute);
  second = attachZero(second);
  ms     = attachZero(ms);

  // minute의 값과 화면에 출력된 분이 다를 경우 (초마다 숫자 새로고침 방지)
  if(list[0].innerText != minute)  list[0].innerText = minute;

  // second의 값과 화면에 출력된 초가 다를 경우
  if(list[1].innerText != second)  list[1].innerText = second;

  list[2].innerText = ms;
}

/* 한 자리 숫자인 경우 앞에 0 붙여서 반환하는 함수 */
function attachZero(num){

  if(num < 10){ // 한 자리 숫자인 경우
    return "0" + num;
  }
  return "" + num;
}

resetBtn.addEventListener("click", () => {
    // currInterval 제거
    clearInterval(currInterval);

    // count, 출력된 시간 모두 0으로 변경
    count = 0;
    output();

    // start 버튼의 내용을 "START" 로 변경
    startBtn.textContent = "START";
    
    // #recordContainer 의 내용 모두 삭제
    recordContainer.innerHTML ="";
});

/* recordBtn 클릭시 */
recordBtn.addEventListener("click", () => {
  // li 요소 생성
  const li = document.createElement("li");
  //li 요소 내용으로 #display에 출력된 시간을 얻어와 대입
  li.innerText = display.innerText;
  // #recordContainer의 첫번째 자식으로 li 추가
  recordContainer.prepend(li);

});



/* recordBtn 클릭시 li 요소를 생성, 내용으로 #display에 출력된 시간을 얻어와 대입
      #recordContainer의 첫번째 자식으로 li 추가
 */



/* 요소.textContent / 요소.innerText */
/* 
  textContent 를 이용해 요소에 작성된 내용 얻어오기 -> HTML 파일에 작성된 내용 행태(단. 태그 제외) 그대로 얻오옴(띄어쓰기 줄바꿈 포함)

  innerText 를 이용해 요소에 작성된 내용 얻어오기 -> 브라우저 화면에 보이는 형태 (단. 태그 제외)를 얻어옴



*/
