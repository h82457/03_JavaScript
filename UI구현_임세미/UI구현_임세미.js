const dial = document.querySelector("#dial");
const dialNum = document.querySelectorAll(".dialNum");
const dialHeader = document.querySelector("#dialHeader");
const listBoard = document.querySelector("#listBoard");
const addBtn = document.querySelector("#addBtn");
const resetBtn = document.querySelector("#resetBtn");






// 번호 클릭 시 번호 위에 클릭한 번호가 누적 되서 출력
for(let num of dialNum){
    num.addEventListener("click", e => {

        if(dialHeader.textContent.length == 11) return;
        
        dialHeader.textContent += e.target.textContent;
    });
    


}

// "초기화" 버튼 클릭 시 번호 위에 누적된 클릭한 번호를 지움
resetBtn.addEventListener("click", () => {

    dialHeader.textContent = "";
    listBoard.remove();
});

// "추가" 버튼 클릭 시 오른쪽 "전화 번호 목록"에 요소 추가 후 
// 번호 위에 누적된 클릭한 번호를 지움
addBtn.addEventListener("click", () => {
    const number = dialHeader.textContent;
    const regExp =  /^01[01679]\d{3,4}\d{4}$/;

    if(regExp.test(number)){

        const li = document.createElement("li");
        
        const divNum = document.createElement("div");
        divNum.textContent = number;

        const divStar = document.createElement("div");
        divStar.classList.add("img-s");

        // 즐겨찾기 클릭
        divStar.addEventListener("click", e => {
            const parent = e.target.parentElement;
        
            if(parent.classList.contains("favorite")){
                parent.classList.remove("favorite");        
            }else{
                parent.classList.add("favorite");
            }
        })

        const divX = document.createElement("div");
        divX.classList.add("img-x");

        // 삭제 클릭

        divX.addEventListener("click", e => {
            e.target.parentElement.remove();

        })

        li.append(divNum, divStar, divX);
        listBoard.append(li);
        dialHeader.textContent = "";
    }
});

