///Intervier question with answers

// function BankAccount(balance) {
    //   this.balance = balance;
    // }
    
    // BankAccount.prototype.deposit = function(amount) {
    //   this.balance += amount;
    // };
    
    // BankAccount.prototype.withdraw = function(amount) {
    //   if (this.balance < amount) {
    //     throw new Error("Insufficient funds");
    //   }
    
    //   this.balance -= amount;
    // };
    
    // BankAccount.getTotalBalance = function() {
    //   let totalBalance = 0;
    
    //   for (let account of BankAccount.prototype.constructor.instances) {
    //     totalBalance += account.balance;
    //   }
    // // console.log(BankAccount.prototype.constructor.getTotalBalance)
    
    //   return totalBalance;
    // };
    
    // const account1 = new BankAccount(100);
    // const account2 = new BankAccount(200);
    
    // account1.deposit(50);
    // account2.withdraw(100);
    
    // console.log(BankAccount.getTotalBalance()); 
    
    
    
    
    function BankAccount() {
        this.balance = 0;
    }
    
    BankAccount.prototype.deposit = function (amount) {
        this.balance += amount;
    };
    
    BankAccount.prototype.withdraw = function (amount) {
        if (amount > this.balance) {
            throw new Error("Insufficient balance");
        }
        this.balance -= amount;
    };
    
    BankAccount.getTotalBalance = function (accounts) {
        let totalBalance = 0;
        for (let account of accounts) {
            totalBalance += account.balance;
        }
        return totalBalance;
    };
    
    const account1 = new BankAccount();
    const account2 = new BankAccount();
    
    
    account1.deposit(1000);
    account2.deposit(500);
    
    console.log(account1.balance);  // Output: 1000
    console.log(account2.balance);  // Output: 500
    
    account1.withdraw(200);
    console.log(account1.balance);  // Output: 800
    
    const accounts = [account1, account2];
    console.log(BankAccount.getTotalBalance(accounts));  // Output: 1300