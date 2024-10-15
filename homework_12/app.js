//standart
function isEven(n){
   return n % 2 === 0;
}

console.log(isEven(8));

//arrow
n => {return n % 2 === 0}

console.log(isEven(5));

function findMax(numbers){
    return Math.max(...numbers) 
}

console.log(findMax([1, 2, 3, 4, 5])); 

//----------------------------------------

// Преобразование к числу
// a. Используя Number()

let str = "123";
let num = Number(str); // Преобразует строку в число
console.log(num); // 123

// b. Используя parseInt() и parseFloat()

let strInt = "123abc";
let strFloat = "123.45abc";

let intNum = parseInt(strInt);   // Преобразует строку в целое число
let floatNum = parseFloat(strFloat); // Преобразует строку в число с плавающей запятой

console.log(intNum); // 123
console.log(floatNum); // 123.45

// 2. Преобразование к строке
// a. Используя String()

let num = 456;
let str = String(num); // Преобразует число в строку
console.log(str); // "456"

// b. Используя метод toString()

let bool = true;
let strBool = bool.toString(); // Преобразует булевое значение в строку
console.log(strBool); // "true"
// 3. Преобразование к логическому типу
// a. Используя Boolean()

let num = 0;
let bool = Boolean(num); // Преобразует число в логическое значение
console.log(bool); // false (0 является ложным значением)

let str = "hello";
let boolStr = Boolean(str); // Преобразует непустую строку в логическое значение
console.log(boolStr); // true

// b. Преобразование через двойное отрицание

let value = "text";
let boolValue = !!value; // Преобразует значение в логическое с помощью двойного отрицания
console.log(boolValue); // true

// 4. Преобразование объектов
// a. Преобразование к строке

let obj = { name: "Alice", age: 25 };
let strObj = JSON.stringify(obj); // Преобразует объект в строку JSON
console.log(strObj); // '{"name":"Alice","age":25}'

// b. Преобразование к числу
// При попытке преобразовать объект к числу, используется метод valueOf() или toString(), если он определён:

let objNum = {
    valueOf: function() {
        return 42;
    }
};

let numObj = Number(objNum); // Преобразует объект в число
console.log(numObj); // 42

// Примеры объединения преобразований
// Вот пример функции, которая демонстрирует преобразование различных типов данных:

function convertTypes() {
    let num = 123;
    let str = "456";
    let bool = false;
    let obj = { key: "value" };

    // Преобразования
    let numToStr = String(num); // Число в строку
    let strToNum = Number(str); // Строка в число
    let boolToNum = Number(bool); // Булевое значение в число
    let objToStr = JSON.stringify(obj); // Объект в строку JSON

    console.log(`Число в строку: ${numToStr}`); // "123"
    console.log(`Строка в число: ${strToNum}`); // 456
    console.log(`Булевое значение в число: ${boolToNum}`); // 0
    console.log(`Объект в строку JSON: ${objToStr}`); // '{"key":"value"}'
}

convertTypes();