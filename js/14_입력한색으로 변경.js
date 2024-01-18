const boxList = document.querySelectorAll("#col div");
const inputList = document.querySelectorAll("#col input");
const btn = document.querySelector("#btn");

btn.addEventListener("click", function(){
    
    for(let i=0 ; i < inputList.length ; i++){
        // console.log(inputList[i].value);
        boxList[i].style.backgroundColor = inputList[i].value;
    }
})