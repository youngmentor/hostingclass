import {User} from './model/User'

const user = new User({name: "my name", age: 25})

user.set({ age:30})
console.log(user.get('name'));
console.log(user.get('age'));
