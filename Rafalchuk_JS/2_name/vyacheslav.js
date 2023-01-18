let myName = 'Вячеслав';
          var yourName;
          do {
            var yourName = prompt('Введите имя: ');
            if (yourName == myName) {alert ('Привет, ' + yourName)}
            else {alert('Нет такого имени')}
          }
          while (yourName !== myName || yourName == Null);
