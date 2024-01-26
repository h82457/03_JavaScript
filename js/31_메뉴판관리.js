const spanName = document.querySelector("#spanName");
const inputName = document.querySelector("#inputName");

// spanName 클릭시 inputName 의 display 속성 제거, 
spanName.addEventListener("click", () => {
    inputName.classList.remove("dis-non");
    spanName.classList.add("dis-non");
    spanName.value = spanName.textContent;

    // spanInput 입력 완료시 inputName 사라짐
    inputName.addEventListener("blur", () => {

        spanName.textContent = inputName.value;
        inputName.classList.add("dis-non");
        spanName.classList.remove("dis-non");
    });

});

// editBtn
const editBtn = document.querySelector("#editBtn");
const addBtn = document.querySelector("#addBtn");
const delBtn = document.querySelector("#delBtn");
const setBtn = document.querySelector("#setBtn");

const iMenuList = document.querySelectorAll(".i-menu");
const iPriceList = document.querySelectorAll(".i-price");
const checkList =  document.querySelectorAll(".check");
const menuList = document.querySelector("#menuList");



editBtn.addEventListener("click", () => {

    editBtn.classList.add("dis-non");
    addBtn.classList.remove("dis-non");
    delBtn.classList.remove("dis-non");
    setBtn.classList.remove("dis-non");
    
    addBtn.addEventListener("click", () => {

        const li = document.createElement("li");
        const check = document.createElement("input");
        const menu = document.createElement("input");
        const price = document.createElement("input");



        check.classList.add("check");
        check.setAttribute("type", "checkbox")
        menu.classList.add("i-menu");
        price.classList.add("i-price");

        li.append(check, menu, price);
        menuList.append(li);
    });

    delBtn.addEventListener("click", () => {





    });





    // checkList.classList.remove("dis-non");
    
    // 수정
    





});

