alert("welcome to bank")
alert("press 1 to check balance"
    +("press 2 for deposit")
+("press 3 to withdraw "))
let option=prompt("Select option for more details")
let balance =2000
switch(option){
    case "1":
        alert("your bank balance is " +balance)
        break;
    case "2":
        let amount=prompt(("enter amount to deposite:") ) 
        balance=balance+Number(amount )
        alert("the balance is now"+(balance1)) 
        break;
    case "3":
        let withdrawAmount=prompt("enter amount to withdraw")
        if(withdrawAmount>balance){
            alert("insufficient balance")
        }
        else{
            balance=balance-Number(withdrawAmount)
            alert("After the withdraw Now the balance is"+(balance))
            break;
        }
        
    default:
        alert("sorry invalid option")    

}