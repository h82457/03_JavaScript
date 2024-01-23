// createBtn 버튼 클릭시 로또판 생성
const createBtn = document.querySelector("#createBtn");
const lottoContainer = document.querySelector("#lottoContainer");

// 버튼 클릭시 로또판 생성
createBtn.addEventListener("click", () => {

    for(let i=0 ; i<45 ; i++){
        const number = document.createElement("div");
        number.classList.add("number");
        lottoContainer.append(number);
        number.textContent = i;
    }
});

// 로또판 숫자 클릭시 선택 + 취소
number.addEventListener("click", () => {
    number.classList.add("checked");


});