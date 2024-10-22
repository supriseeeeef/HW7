let task1Array = [1, 2, 3];

task1Array[1] = 10;
console.log(task1Array);

let task2Array = ["hi", "hihi"];

task2Array.push("really hi");
console.log(task2Array);


let task3Array = [1, 2, 3, 4, 5, 6, 7];
let sum = 0;

for (let i = 0; i < task3Array.length; i++) {
    sum += task3Array[i];
}
console.log(sum);


let task4Array = [1, 2, 3, 4, 5];

for (let i = 0; i < task4Array.length; i++) {
    console.log(task4Array[i]);
}


let task5Array = ["mountain", "river", "ocean", "desert", "forest"];

for (let i = 0; i < task5Array.length; i++) {
    if (task5Array[i].length > 5) {
        console.log(task5Array[i]);
    }
}



let task6Array = [5, 11, 9, 33, 18, 2, 27, 45, 68, 4];
let getMax = task6Array[0];
for (let i = 1; i < task6Array.length; i++) {
    if (getMax < task6Array[i]) {
        getMax = task6Array[i];
    }
}

console.log(getMax);


let task7Array = [14, 7, 21, 36, 8, 19, 44, 55, 60, 3];
let evenNumbers = [];
for (let i = 0; i < task7Array.length; i++) {
    if (task7Array[i] % 2 === 0) {
        evenNumbers.push(task7Array[i]);
    }
}

console.log(evenNumbers); 
