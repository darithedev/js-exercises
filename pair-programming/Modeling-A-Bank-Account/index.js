// Write a program that creates an `account` object with the following characteristics:
    // * A `name` property.
    // * A `balance` property set to 0 
  // * A `deposit` method adding the (positive or negative) value passed as an argument to the account balance.
  // * A `describe` method that prints the account description in the console.
  // * A `transfer` method with two parameters: the name of the account that will receive the transfer, and the amount of money to transfer. 

  function Account(name) {
    this.name = name;
    this.balance = 0;
    this.deposit = (amount) => {
      this.balance += amount;
    };
    this.describe = () => {
      console.log(`${name}'s account has a balance of $${this.balance}`);
    };
    this.transfer = (name, amount) => {
      this.balance -= amount
      name.balance += amount;
    };
  }
  
// ## Test
// - Create an account for Billy, Rosie, Jack and Jill
// - Give each of the accounts a deposit on money
// - Print a string describing the current amount of money on each account
// - Transfer positive values between Billy and Jack and negative values between Rosie and Jack

// Creating new accounts for these users
const Billy = new Account("Billy");
const Rose = new Account("Rose");
const Jack = new Account("Jack");
const Jill = new Account("Jill");

// Giving each account recipient a balance of $100
Billy.balance = 100;
Rose.balance = 100;
Jack.balance = 100;
Jill.balance = 100;

// Prints screen describing the current ammount on each account
Billy.describe();
Rose.describe();
Jack.describe();
Jill.describe();
console.log('\n')

// Transfer positive values between Billy and Jack
Billy.transfer(Jack, 25);
Jack.transfer(Billy, 10);

// Transfer negative valuse between Rose and Jack
Rose.transfer(Jack, -25);
Jack.transfer(Rose, -50);
Rose.describe();
Jack.describe();

// Bonus: How might credit method work
this.credit = (amount) => {
  this.credit += amount;
}

/* 
 credit method works by increasing the ammount everytime there is a change
 but decreasing when a payment is made.
 For example Billy.credit(100) would mean Billy purchased something that cost $100
 and Billy.credit(-25) would mean Billy made a payment towards that balance.
 Now we can get fancy and start charging monthly interest at a set apr, so
 the date of creation could be the start day and every 28th day the remaining 
 balance would be charged interest and added to the balance. 
*/
