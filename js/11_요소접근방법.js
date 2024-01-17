/* 클래스 접근 테스트 */
function classTest(){
    // .cls-test 요소 모두 얻어오기
    const divs = document.getElementsByClassName("cls-test");
    
    console.log(divs);

    divs[0].style.backgroundColor = "rgb(114,203,80)";
    divs[1].style.backgroundColor = "rgb(40,225,225)";
    divs[2].style.backgroundColor = "rgb(150 90,210)";

    for(let i = 0; i < divs.length ; i++){
        divs[i].innerText = `${i}번째 div 입니다.`;
    }
}