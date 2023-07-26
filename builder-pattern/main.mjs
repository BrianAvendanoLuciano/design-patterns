import User from "./user.mjs";
import Address from "./address.mjs";
import UserBuilder from "./user-builder.mjs";

let user = new UserBuilder('Bob').setAge(10).setAddress(new Address(3000, '199f Estrella st')).build();
console.log(user);

let user1 = new User('Bob', {age:10})
console.log(user1)

// const user = new User('Bob', undefined, undefined, new Address(3000, '199f Estrella st'));
// console.log(user);