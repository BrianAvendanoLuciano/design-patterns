export default class User {
    constructor(name, {age, phone = '999999', address} = {}) {
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.address = address;
    }
}