// SOLUTION: Encapsulation using the Module Pattern
const BankAccount = (function(){

    let balance = 100 ; 

    function isValidAmount(amount){
        return amount > 0 ; 
    }

    return {
        deposit : function (amount){
            if(isValidAmount(amount)){
                balance += amount ; 
                console.log(`Deposited: $${amount}. New Balance: $${balance}`)
            }
        } , 

        withdraw : function(amount) {
            if(isValidAmount(amount) && amount <= balance){
                balance -= amount ; 
                console.log(`Withdrew: $${amount}. New Balance: $${balance}`) ; 
            }
        } , 

        getBalance : function(){
            return balance ;
        }
    }
})() ;

BankAccount.deposit(50) ; 
BankAccount.deposit(30) ; 
console.log(`Current Balance via getter: $${BankAccount.getBalance()}`);

// --- TESTING THE ATTACK LAYER ---
// Trying to access or change the private 'balance' variable directly:

BankAccount.balance = 999999;
console.log(`Attempted Hack Target: ${BankAccount.balance}`); // Prints 999999
console.log(`Actual Secure Balance: $${BankAccount.getBalance()}`); // Still securely prints 120!

BankAccount.withdraw(50000); // Correctly denied! The inner balance is completely safe.