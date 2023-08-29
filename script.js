// Задание 1

// console.log('старт');

// for(i = 1; i < 10; i++){
// console.log(i);
// }

// console.log('финиш');

// Задание 2


// for(i = 10; i < 100; i+=5){
//     if(i % 3 == 0 && i % 5 == 0){
//         console.log(i);
//     }
// }

numbers = [15, 30, 45, 60, 75, 90];

// for(index = 0; index <= numbers.length; index++){
//     if(numbers[index] >= 15){
//         console.log(numbers[index]);
//     }
// }

// for(i = 0; i <= numbers.length-1; i++){
//     if(numbers[i] % 2 !== 0){
//         console.log(numbers[i]);
//     }
// }

for(i = 0; i <= numbers.length; i++){
    if(i % 3 === 0){
        console.log(i);
    }
}