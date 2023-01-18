
            let myNum = 7;
            var userNum;
            do {
                    var userNum = prompt('Введите число: ');
                    if (isNaN(userNum)) {
                        alert('Введите число!');
                    } else {
                        var userNum = Number(userNum);
                    } 
                }
            while (isNaN(userNum) || userNum <= myNum);

            alert('Привет');