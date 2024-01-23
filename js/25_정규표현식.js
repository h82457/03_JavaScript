/*  입력 받은 이름이 한글 2~5글자 사이가 맞는지 확인  */

const inputName = document.querySelector("#inputName");
const nameResult = document.querySelector("#nameResult");

// inputName이 입력 되었을 경우
inputName.addEventListener("input", e => {

  /* input 이벤트 : 입력과 관련된 모든 행동
    (단, 어떤 키로 입력했는지는 알 수 없음)
  */

  // 입력된 값 얻어오기
  const value = e.target.value;
  // console.log(value);

  
  // 아무것도 입력하지 않은 경우
  if(value.trim().length == 0){
    nameResult.textContent = "";
    return;
  }

  /* !조건에 맞는 정규 표현식 객체 생성! */
  const regExp = /^[가-힣]{2,5}$/;

  /* 정규식객체.test(문자열) : 
    - 문자열이 정규식에 일치하면 true
    - 아니면 false   */

  if(regExp.test(value)){ // 일치하면
    nameResult.textContent = "유효한 이름 형식입니다.";
    nameResult.style.color = "green";
  
  } else{
    nameResult.textContent = "이름 형식이 유효하지 않습니다.";
    nameResult.style.color = "red";
  } 

});



/* 입력 받은 값이 휴대전화 번호가 맞는지 확인 */

const inputPhone = document.querySelector("#inputPhone");
const phoneResult = document.querySelector("#phoneResult");

inputPhone.addEventListener("input", e => {

  const value = e.target.value; // 입력한 값

  // 입력한 값이 없을 경우
  if(value.trim().length == 0){
    phoneResult.textContent = ""; // 출력 내용 삭제
    phoneResult.classList.remove("check", "uncheck"); // 클래스 제거
    e.target.value = ""; // 값으로 빈칸 대입
    return;
  }


  /* 정규식을 이용한 검사 */
const regExp = /^01[01679]-\d{3,4}-\d{4}$/;
  if(regExp.test(value)){ //입력받은 값이 정규식과 일치
    phoneResult.textContent = "유효한 번호 형식입니다.";
    phoneResult.classList.add("check"); // check 클래스 추가
    phoneResult.classList.remove("uncheck"); // check 클래스 제거

  }else{
    phoneResult.textContent = "번호가 유효하지 않습니다.";
    phoneResult.classList.add("uncheck"); // check 클래스 추가
    phoneResult.classList.remove("check"); // check 클래스 제거
  }

});