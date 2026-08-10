function BankAccount(id, name, Address, Balance) {
    id = id;
    this.name = name;
    this.Address = Address;
    Balance = Balance;
    this.IntRate;

    this.Deposit = function (deposit) {
        Balance += deposit;
        console.log(`Rs ${deposit} has been deposited`);
    }

    this.calculateint = function (balance = Balance) {
        if (balance > 10000000) {
            this.IntRate = 9;
        } else
            if (balance > 100000) {
                this.IntRate = 8;
            }
            else
                this.IntRate = 7;

        return this.IntRate;
    }

    this.withdrawal = function (withdraw) {
        if (withdraw > Balance) {
            console.log(`Withdraw more than current balance is not allowed`);
        }
        else
            if (withdraw > 10000) {
                console.log(`Withdraw more than 10000 is not allowed`);
            }
            else {
                Balance -= withdraw;
                console.log(`Rs ${withdraw} withdrawal is successful`);
            }
    }

    this.getbalance = function () {
        console.log(`Present Balance is: Rs ${Balance}`);
    }

    this.getname = function () {
        console.log(`  Name ${this.name}   Address ${this.Address}`);
        console.log(`  `);
    }

    this.getamount = function (year, balance = Balance) {
        let amount = year * balance * this.calculateint(balance) / 100;
        amount = balance + amount;
        console.log(`${amount} will be Amount with intrest Rate ${this.calculateint(balance)}%`);

    }
}

const bankAccount = new BankAccount(100, "Mohan", "Noida", 1000);
bankAccount.withdrawal(2000);
bankAccount.getbalance();
bankAccount.Deposit(5000000);
bankAccount.getbalance();
bankAccount.withdrawal(2000);
bankAccount.getbalance();
bankAccount.getamount(7);
bankAccount.getamount(3, 1000000000);
bankAccount.getname();

/*
 OUTPUT
____________________________________________________________________________

PS C: \Users\ shivam.giri\ Documents\ Javascript > node Assignment3.js
Withdraw more than current balance is not allowed
Present Balance is: Rs 1000
Rs 5000000 has been deposited
Present Balance is: Rs 5001000
Rs 2000 withdrawal is successful
Present Balance is: Rs 4999000
7798440 will be Amount with intrest Rate 8 %
1270000000 will be Amount with intrest Rate 9 %
    Name Mohan Address Noida

*/

