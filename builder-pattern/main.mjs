class Address {
    constructor(zip, street) {
        this.zip = zip;
        this.street = street;
    }
}

class User {
    constructor(name, {age, phone = '999999', address} = {}) {
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.address = address;
    }
}

let user1 = new User('Bob', {age:10})
console.log(user1)

// class UserBuilder {
//     constructor(name) {
//         this.user = new User(name);
//     }

//     setAge(age) {
//         this.user.age = age;
//         return this;
//     }

//     setPhone(phone) {
//         this.user.phone = phone;
//         return this;
//     }

//     setAddress(address) {
//         this.user.address = address;
//         return this;
//     }

//     build() {
//         return this.user;
//     }
// }

// let user = new UserBuilder('Bob').setAge(10).build();
// console.log(user);

// const user = new User('Bob', undefined, undefined, new Address(3000, '199f Estrella st'));
// console.log(user);