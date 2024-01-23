/* 유효성 여부를 체크해두는 객체 생성 */
const checkList = {
    "inputId" : false,
    "InputPw" : false,
    "inputPwCheck" : false,
    "inputName" : false
};

/* 회원가입 JS 코드 작성시 필요한 요소 모두 얻어오기 */
const signupForm = document.signupForm;
const inputId = document.querySelector("#inputId");
const inputPw = document.querySelector("#inputPw");
const inputPwCheck = document.querySelector("#inputPwCheck");
const inputCheck = document.querySelector("#inputCheck");
const inputName = document.querySelector("#inputName");


/* 아이디 유효성 검사 */
inputId.addEventListener("input", e => {
    const value = e.target.value; // 입력한 값
    // 메세지 출력 span 요소
    const span = e.target.nextElementSibling.nextElementSibling;

    // 입력 X
    if(value.trim().length == 0){
        span.textContent = "영어,숫자,-,_ 6~16글자 사이";
        e.target.value = "";
        span.classList.remove("check", "error");

        /* 유효성 여부 체크 객체에서 inputId를 false로 변경 */
        checkList['inputId'] = false;

        return;
    }

    /* 정규식을 이용해 유효성 판별 */
    const regExp = /^[A-Za-z0-9\-\_]{6,16}$/;
    if(regExp.test(value)){ // 입력값이 정규식과 일치
        span.textContent = "유효한 아이디 형식입니다";
        span.classList.add("check");
        span.classList.remove("error");
        
        /* 유효성 여부 체크 객체에서 inputId를 true로 변환 */
        checkList["inputId"] = true;

    } else{ // 정규식과 일치 X
        span.textContent = "유효하지 않은 아이디 형식입니다";
        span.classList.add("error");
        span.classList.remove("check");
        
        /* 유효성 여부 체크 객체에서 inputId를 false로 변환 */
        checkList["inputId"] = false;
    }    
});

/* 이름 유효성 검사 */
inputName.addEventListener("input", e => {
    const value = e.target.value;
    const span = e.target.nextElementSibling.nextElementSibling;

    // 입력 X
    if(value.trim().length == 0){
        span.textContent = "한글 2~15(단자음, 단모음 제외)";
        e.target.value = "";
        span.classList.remove("check", "error");
    }

    /* 정규식검사 */
    const regExp = /^[가-힣]{2,15}$/;

    //유효한 경우
    if(regExp .test(value)){
        span.textContent = "유효한 이름 형식입니다.";
        span.classList.add("check");
        span.classList.remove("error");

        checkList['inputName'] = true;
    } else{// 무효한 경우
        span.textContent = "유효하지않은 이름 형식입니다.";
        span.classList.add("error");
        span.classList.remove("check");

        checkList['inputName'] = false;
    }
});

/* 비밀번호 유효성 검사 */
inputPw.addEventListener("input", e => {

    const value = e.target.value;
    const span = e.target.nextElementSibling.nextElementSibling;
  
  
    if (value.length === 0) { // 입력된 값이 없을 경우
        span.innerText = "영어,숫자,!@#$%^&* 8~20글자 사이";
        span.classList.remove("check", "error");
        checkList["inputPw"] = false;
        
        checkPwFn();
  
        return; // 비밀번호 , 비밀번호 확인 값 일치 여부 확인 함수 호출
    }
  
    // 정규표현식 객체 생성
    const regExp = /^[A-Za-z\d\!\@\#\$\%\^\&\*]{8,20}$/;
  
    if (regExp.test(value)) { // 유효한 경우
        span.innerText = "유효한 비밀번호 형식입니다";
        span.classList.add("check");
        span.classList.remove("error");
  
        checkList["inputPw"] = true;
  
    } else {
        span.innerText = "비밀번호가 유효하지 않습니다";
        span.classList.add("error");
        span.classList.remove("check");
  
        checkList["inputPw"] = false;
    }
  
    checkPwFn(); 

  });
  
  
  
  // 비밀번호, 비밀번호 확인 같은지 체크하는 함수
  function checkPwFn() {
    const span = inputPwCheck.nextElementSibling.nextElementSibling;
  
    // 비밀번호, 비밀번호 확인 값 얻어와 변수에 저장
    const pwVal = inputPw.value.trim();
    const checkVal = inputPwCheck.value.trim();
  
    if (pwVal.length == 0 || checkVal.length == 0) { // 비밀번호 미입력 시
        span.innerText = "비밀번호를 먼저 입력 해주세요";
        span.classList.remove("check");
        span.classList.remove("error");
  
        checkList["inputPwCheck"] = false;
  
        return;
    }
  
    if (pwVal === checkVal) {
        span.innerText = "비밀번호 일치";
        span.classList.add("check");
        span.classList.remove("error");
  
        checkList["inputPwCheck"] = true;
  
    } else {
        span.innerText = "비밀번호 불일치";
        span.classList.add("error");
        span.classList.remove("check");
  
        checkList["inputPwCheck"] = false;
  
    }
  }
  
  
  // /* 비밀번호 확인 유효성 검사 */
  inputPwCheck.addEventListener('input',checkPwFn);
  // ** 함수 이름만 작성하면 해당 부분에 함수 정의 코드가 그대로 대입된다. 


  /* 회원가입 form이 제출 되었을때 */
  signupForm.addEventListener("submit", e => {
    /* 아이디, 비밀번호, 비밀번호 확인, 이름이 모두 유효한지 확인 */
    // for ~in 구문
    for(let key in checkList){
        // console.log("KEY : ", key);
        // console.log("value : ", checkList[key]);
        if(checkList[key] == false){ // 유효하지 않은 경우

            let str;
            switch(key){
            case 'inputId' : str = "아이디가"; break;
            case 'inputPw' : str = "비밀번호가"; break;
            case 'inputPwCheck' : str = "비밀번호 확인이"; break;
            case 'inputName' : str = "이름이"; break;
            }
            alert(`${str} 유효하지 않습니다.`);
            e.preventDefault(); // form 기본 이벤트(제출) 막기

            // 유효하지 않은 input에 초첨 맞추기
            document.getElementById(key).focus();

            return;
        }
    }
    /* 성별 선택 검사 */
    // 체크된 name='gender' 라디오 버튼 얻어오기 -> check된 라디오 버튼이 없다면 null
    const gender = document.querySelector("[name='gender']:checked");

    if(gender == null){ // 체크 안한 경우
        alert("성별을 선택해주세요.");
        e.preventDefault(); // form 제출 막기
    }



    
  });

  /* 
    객체 전용 향상된 for문 : for ~in 구문
    - 객체에 존재하는 key를 순서대로 하나씩 꺼내오는 반복문
    
    ex) checkList 객체
       (KEY)    (VALUE)
    {"inputId" : false,
    "InputPw" : false,
    "inputPwCheck" : false,
    "inputName" : false}

    [작성법]
    for(let key in 객체명){
        // 반복 때 마다 key를 하나씩 꺼내와서 사용
    }
  */