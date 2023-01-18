//Шаг 1. Генерируем массив со случайными числами с заданными параметрами длины и числами от 0 до max
function generateArray(lengthArr, max) {
    let randArr = [], length = lengthArr;
    for (let i = 0; i < lengthArr; i ++) { // перебираем элементы
        randArr[i] = Math.round(Math.random() * max); 
        randArr.push([i]); //добавляем в массив случайное число в указанном диапазоне
    }   
    return randArr;
};

let randArr1 = generateArray(10, 100); //задаем параметры изначального массива

alert('Задан массив:' + '\n' + randArr1.join(', ') + '\n'); //вывод рандомизированного массива

//Шаг 2. Выводим новый массив с числами полученного массива кратными 3.
function multiplicity(arr) {
    var newArr = [],
    length = arr.length;
        for (var i = 0; i < length; i++) {
            if (arr[i] != 0 && (arr[i] % 3 == 0)) {
                newArr.push(arr[i]);
            }
        }
        return newArr;
    };

let numbers1 = multiplicity(randArr1);

alert('Числа массива кратные 3:' + '\n' + numbers1.join(', ')); //вывод полученного итогового массива