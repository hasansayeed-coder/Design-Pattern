// PROBLEM: Everything is in the global scope. 
// Any other developer or third-party script can accidentally (or maliciously) change this.

let balance = 100 ; 

function deposit(amount) {
    if(amount <= 499){
        console.log("Amount less than 500 can't be deposited") ; 
        return ; 
    }

    balance += amount  ; 
    console.log('Amount deposited successfully') ; 
}

function withdraw(amount){
    if(amount > balance){
        console.log('You don;t have enough balance') ; 
        return ; 
    }

    balance -= amount ; 
    console.log(`Amount withdrawed successfully...Current balance : ${balance}`)
}

// --- Normal Application Usage ---
deposit(50)  ; // balance 150
withdraw(200) ; // balance 150..shows console


// --- THE CRITICAL FLAW ---
// Because 'balance' is global, anyone can bypass our rules and alter it directly!
balance = -100 ;    // Accidentally hacked/overwritten!

deposit(500) ; 
withdraw(250) ; 