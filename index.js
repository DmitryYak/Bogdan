// console.log('hello')
function myltByFactor(value, multiplier = 1) {
    // console.log( value * multiplier)
}

myltByFactor(2,3)

// console.log(Date());

const newPost = (post, addedAt = Date()) => ({
    ...post,
    addedAt,
})

const firstPost = {
    id: 1,
    author: 'Bogdan',
}
// console.log(newPost(firstPost));

const newPost_2 = (a, b = Date()) => ({
    ...a,
    b,
})

const secondPost = {
    id: 2,
    author: 'Dmitry',
}
// console.log(newPost_2(secondPost));

const newError = () => {
    throw new Error('some error')
}
// console.log('before error')

// newError();
// console.log('after error');

const newError_2 = () => {
    throw new Error('some new Error');
}

try {
    newError_2()
} catch(error){
    // console.error(error);
    // console.log(error.message)
}

const myArray = [1,2,3]
// console.log(myArray)

const MyArray_2 = new Array(1, 2, 3)
// console.log(MyArray_2)

const myArray_3 = [1, true, 'Bo']
// console.log(myArray_3.length)

myArray_3[1] = false;
// console.log(myArray_3)

myArray_3[3] = 'new string'
// console.log(myArray_3)

myArray_3.push('Grigory')
// console.log(myArray_3)

const removedEl = myArray_3.pop();
// console.log(myArray_3)
// console.log(removedEl)

// myArray_3.forEach(el => console.log(el))

const newArrMap = myArray_3.map(el => el * 2)
// console.log(newArrMap)

const destructur_1 = {
    name_1: "Pavel",
    age: 37
}
const {age,name_1} = destructur_1
// console.log(age)
// console.log(name_1)

const fruits = ['apple', 'orange']
const [fruitONe, fruitTwo] = fruits;
console.log(fruitONe)


const objectUser_1 = {
    id: 1,
    name: 'Ivan',
    age: 18
}
const userInfo_1 = ({name, age}) => {
    console.log(`new user: ${name} is ${age} ears old`)
}
// userInfo_1(objectUser_1);

const sumPositiveNumbers = (a, b) => {
    if (typeof a !== Number || typeof b !== Number) {
        console.log('one of values is not a number')
    } 
    if (a <= 0 || b <= 0) {
        console.log('one of values is not positive')
    }
    else console.log(a + b)
    
}
// sumPositiveNumbers("d",5)

const month = 11
switch (month) {
    case 12:
        console.log('dec');
        break
    case 11:
        // console.log('now');
        break
}

const value_2 = 5
value_2
    // ? console.log('good')
    // : console.log('not good')


    const newUser_1 = {
        name: 'Valentin',
        age: 18,
        status: true
    }

    addNewFlag = (a) => {
        return a.status ? a.flag = true: a.flag = false
    } 

    // addNewFlag(newUser_1)
    // console.log(newUser_1)

    for(let i = 0; i < myArray_3.length; i++) {
        // console.log(i)
    }

    myArray_3.forEach((i,index) => {
        // console.log(index,':', i)
    })

    let i = 0;
    while (i < 5) {
        // console.log(myArray_3)
        i++
    }

  class Comment {
    constructor(text) {
        this.text = text
        this.votesQty = 0
    }
    upvote() {
        this.votesQty += 1
    }
  }

  const firstComment = new Comment('First comment')
  const secondComment = new Comment('Second comment')
  const thirdComment = new Comment('Third comment')

//   console.log(firstComment)
  firstComment.upvote()
  thirdComment.upvote()
//   console.log(firstComment.votesQty)

//   console.log(firstComment.hasOwnProperty('text'))
//   console.log(secondComment)
//   console.log(thirdComment)

class NumbersArray extends Array {
    sum() {
        return this.reduce((el, acc) => acc += el, 0)
    }
}
const myArray_4 = new NumbersArray(2, 5, 7)
// console.log(myArray_4)
// myArray_4.sum();

const someString = 'some string'
console.log(someString.length);
console.log(someString.toUpperCase())

// const mySecondName = new String('Yakovlev')
// console.log(mySecondName)

// Промисы

const myPromise = new Promise((resolve, reject) => {

})

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => {
//         console.log(response)
//         return response.json()
//       })
//       .then(json => console.log(json))
//       .catch(error => console.log(error.message))

// const getData = (url) => 
//     new Promise((resolve, reject) => 
//     fetch(url)
// .then(response => response.json())
// .then(json => resolve(json))
// .catch(error => reject(error))
// )

// getData('https://jsonplaceholder.typicode.com/todos/1')
// .then(data => console.log(data))
// .catch(error => console.log(error.message))

const asyncFn = async () => {
    return 'Success!'
}

asyncFn()
.then(value => console.log(value))

const asyncFn_2 = async () => {
    throw new Error('there was an arror!')
}

asyncFn_2()
.then(value => console.log(value))
.catch(error => console.log(error.message))

const timerPromise = () => 
    new Promise((resolve, reject) =>
    setTimeout(() => resolve(), 2000))

const asyncFn_3 = async () => {
    console.log('timer starts')
    const startTime = performance.now()
    await timerPromise()
    const endTime = performance.now()
    console.log('timer ended', endTime - startTime)
}
asyncFn_3()