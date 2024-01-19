const boxList = document.querySelectorAll(".box");
const inputList = document.querySelectorAll(".color-input");

document.querySelector("#changeButton").addEventListener("click", function(){
    
    for(let i=0 ; i < inputList.length ; i++){
        // console.log(inputList[i].value);
        boxList[i].style.backgroundColor = inputList[i].value;
    }
});