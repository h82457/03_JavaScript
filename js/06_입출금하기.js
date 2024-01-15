/* prompt 사용 연습 */

// function test(){
//     const password = prompt("비밀번호를 입력하세요.");

//     // 확인: 입력한 문자열, 취소: null

//     if(password == null){ //취소
//         alert("취소");
//     } else{ //확인
//         // 입력한 비밀번호가 '1234' 가 맞는지 확인
//         if(password == '1234'){
//             alert("비밀번호 일치");
//         } else{
//             alert("비밀번호가 일치하지 않습니다.");
//         }

//     }

    // 입금 버튼 클릭 시 input에 입력된 금액 만큼 잔액(balance)에 추가

    let balance = 10000;
    const amount1 = document.getElementById("amount");

    function deposit(){

        let balance = 10000;
        const amount = Number(amount1.value);

        balance += amount;
        
        alert(balance);
        
    }

    // 출금 버튼 클릭 시 prompt를 이용해 비밀번호를 입력 받기

    function withdrawal(){

        let balance = 10000;
        const amount = Number(amount1.value);

        const password = prompt("비밀번호를 입력하세요.");

        switch (password){
            case null :
            alert("취소");
            break;

            case "1234" :
            alert("비밀번호 일치");

            if (amount > balance){
                alert("출금 금액이 잔액보다 클 수 없습니다");
                break;
            } else {
                balance -= amount;
                alert(`${balance}원이 출금 되었습니다. 남은 잔액 : ${balance}원`);
                break;
            }
        }



    }

