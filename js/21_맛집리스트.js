/* Restaurant 생성자 함수 */
function Restaurant(resName, resAdress, resMenu){
    
    // 속성(변수, 필드), 객체 안에서의 this == 만들어지는 객체 자체
    this.resName = resName;
    this.resAdress = resAdress;
    
    // 메뉴 ("메뉴1, 메뉴2, 메뉴3" -> 배열로 변환), (문자열.split("구분자") -> 문자열을 "구분자"로 쪼개서 배열 반환)
    this.resMenu = resMenu.split(", "); // 전달 받은 문자열을 쪼갠후 배열로 바꿔서 저장

    // 기능
    this.info = function(){ // this 사용, 화살표함수 사용 불가
        return `${this.resName} / [${this.resMenu}] / ${this.resAdress}`;
    }
}

/* 전역 변수로 식당 목록을 저장할 배열 선언 */
const resList = [];

// 샘플 식당 데이터 추가
resList.push(new Restaurant("김밥천국", "김밥, 라면", "서울시 중구 어딘가"));
resList.push(new Restaurant("왕가탕후루", "샤인머스켓, 딸기, 통귤", "서울시 서대문구"));


/* 화면에 존재하는 요소들 얻어오기 (button, input) */
const resName = document.querySelector("#resName");
const resAdress = document.querySelector("#resAdress");
const resMenu = document.querySelector("#resMenu");
const addBtn = document.querySelector("#addBtn");
const selectBtn = document.querySelector("#selectBtn");

/* addBtn 클릭시 input 에 입력된 값을 모두 얻어와 resList에 추가 */
addBtn.addEventListener("click", () => {

    /* 
    유효성 검사-> 전달된 데이터가 형식, 크기, 작성법 등이 맞는지 검사
        ex) 입력값이 없을 경우, 비밀번호 형식이 맞지 않을 경우, 입력값 범위가 옳지 않을 경우
    */

    // 빈칸 검사
    if(resName.value.trim().length == 0){
        alert("식당명을 입력해주세요.");
        resName.focus();
        return; // 함수를 종료시켜 아래 구문(push) 수행 X
    }

    if(resAdress.value.trim().length == 0){
        alert("주소를 입력해주세요.");
        resName.focus();
        return;
    }

    if(resMenu.value.trim().length == 0){
        alert("메뉴명을 입력해주세요.");
        resName.focus();
        return;
    }

    // resList 에 식당 객체 추가
    resList.push(new Restaurant(resName.value, resAdress.value, resMenu.value));

    // 이전 input 에 작성된 내용 삭제 (빈 문자열 대입)
    resName.value = "";
    resAdress.value = "";
    resMenu.value = "";

    alert("추가 성공");

    // 가게명 input 요소에 focus 맞추기
    resName.focus();
});

/* 조회 버튼 클릭시 #printList 의 이전 내용을 모두 삭제 + resList의 요소로 li요소를 만들어 추가 */
const printList = document.querySelector("#printList");

selectBtn.addEventListener("click", function(){
    // #printList 내용 삭제
    printList.innerHTML = "";
    
    // resList의 요소를 이용해 li 요소 만들어 추가
    for(let i=0 ; i<resList.length ; i++){
        //resList[i]

        //li 요소 만들기
        const li = document.createElement("li");
        // 만들어진 li의 내용으로 resList[i]의 info() 메서드 반환값 대입
        li.innerText = resList[i].info();

        // li 요소를 #printList 의 마지막 자식으로 추가
        printList.append(li);
    }
});

