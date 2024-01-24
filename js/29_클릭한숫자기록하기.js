const numBoard = document.querySelector("#numBoard");
const numbers = document.querySelectorAll(".number");
const result = document.querySelector("#result > span");
const resetBtn = document.querySelector("#resetBtn");

for(let item of numbers){
    item.addEventListener("click", e => {
        // console.log(e.target.textContent);

        if(result.textContent.length == 10){
            alert("10글자 까지만 입력 가능");
            return;
        }
        result.textContent += e.target.textContent;
    });  
}

resetBtn.addEventListener("click", () => {

    result.textContent = "";

});


