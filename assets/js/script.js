// let text = ['Привет, ', 'мир', '!']

// let str = text.join('')
// console.log(str)



// let str = ['Привет, ', 'мир', '!']

// let text = str.join('')
// console.log(str)



// let str = ['Привет, ', 'мир', '!']
// str[0] = 'Пока, '
// let text = str.join('')
// console.log(text)


// function User(name, salary) {
//     this.name = name;
//     this.salary = salary;
// };
// let user1 = new User('Петя', '300$');
// let user2 = new User('Коля', '200$');
// console.log(`Имя: ${user1.name}, Зарплата: ${user1.salary}`)
// console.log(`Имя: ${user2.name}, Зарплата: ${user2.salary}`)



// var arr = {
//     'ru': ['Голубой', 'Красный', 'Зелёный'],
//     'en': ['blue', 'red', 'green'],
// };
// console.log(arr['ru'][1])



// arr = ['a', 'b', 'c']
// alert(arr)



// arr = ['a', 'b', 'c']
// console.log(arr[0] + arr[1] + arr[2])


// arr = ['a', 'b', 'c', 'd']

// console.log(`${arr[0]} + ${arr[1]}, ${arr[2]} + ${arr[3]}`)


// arr = [2, 5, 3, 9]

// let sum = arr[0] * arr[1];
// let sum1 = arr[2] * arr[3];

// let result = sum + sum1;
// console.log(result)


// var obj = {a: 1, b: 2, c: 3};

// console.log(obj['c'])
// console.log(obj.c)


// var obj = {Коля: '1000', Вася: '500', Петя: '200'};

// console.log(` Зарплата Пети: ${obj['Петя']}`),
// console.log(` Зарплата Коли: ${obj['Коля']}`)

// var obj = {1: 'пн', 2: 'вт', 3: 'ср', 4: 'чт', 5: 'пт', 6: 'сб', 7: 'вс'};

// console.log(obj['5']);



// var obj = {1: 'пн', 2: 'вт', 3: 'ср', 4: 'чт', 5: 'пт', 6: 'сб', 7: 'вс'};
// let day = 3;
// console.log(obj[day]);


// let obj = [ [1, 2, 3], [4, 5, 6], [7,8,9] ]

// console.log(obj[1][0])

// let obj = {js:['jQuery', 'Angular'], php: 'hello', css: 'world'}

// console.log(obj.js[0])



// let days =
// {
//     ru: ["пн", 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
//     en: ["pn", 'vt', 'sr', 'cht', 'pt', 'sb', 'vs']
// }
// console.log(days['ru'][0])
// console.log(days['en'][2])

// let day = prompt('число дня недели');
// let lang =
// {
//     ru: ["пн", 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'],
//     en: ["pn", 'vt', 'sr', 'cht', 'pt', 'sb', 'vs']
// }
// console.log(lang[prompt('Введите день недели (ru или en) : ')][day - 1]);