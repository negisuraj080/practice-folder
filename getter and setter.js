// class User {
//     constructor(email,password){
//         this.email = email;
//         this.password = password;
//     }

//     get email(){
//         return this._email.toUpperCase()
//     }

//     set email(value){
//         this._email = value;
//     }

//     get password(){
//         return `${this._password}hitesh`;
//     }

//     set password(value){
//        this._password = value;
//     }
// }


// const hitesh = new User("hitesh@ai", 123);
// console.log(hitesh.email);



// class BankAccount{
//     #balance;
//     constructor(name,balance,bank){
//         this.name = name;
//         this.#balance = balance;
//         this.bank = bank;
//     }
    
//     get getBalance(){
//         return this.#balance;
//     }
//     set setBalance(value){
//         this.#balance = value;
//     }
// }

// const rahul = new BankAccount("rahul",5000,"sbi");
// console.log(rahul);

// console.log(rahul.getBalance);
// rahul.setBalance = 10;
// console.log(rahul);




// rahul.setBalance(1000000000);
// console.log(rahul);
// rahul.#balance = 100000;
// console.log(rahul);

//console.log(rahul.getBalance());
// rahul.setBalance(5);
// console.log(rahul);


// let person = {
//     _name: 'John',
//     getname() {
//         return this._name;
//     },
//     setname(asd) {
//         this._name = asd;
//     }
// };

// console.log(person);
// console.log(person.getname);
// console.log(person);

// person.setname("suraj");
// console.log(person.getname);
// console.log(person);




let person = {
    _name: 'John',
    get getname() {
        return this._name;
    },
    set setname(asd) {
        this._name = asd;
    }
};

console.log(person);
console.log(person.getname);
console.log(person);

person.setname = "suraj";
console.log(person.getname);
console.log(person);