import {IUser} from "./Interfaces/user.interface";

const user: IUser = {
    name: 'Max',
    age: 18,
    gender: 'male'
}

const sum = (a:number, b:number): number => {
    return a + b
}
const showSum = (a: number, b: number) => {
    console.log(a + b);
}

const incAge = (someUser: IUser, inc: number):IUser=> {

    someUser.age += inc
    return someUser;

}
showSum(2, 3)
console.log(sum(1, 2));
incAge(user, 2);
console.log(user);




