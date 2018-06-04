let yourBudget,
  nameYourStore,
  price = 1000; // цена чтобы проверить скидку

//запуск
/*  function start() {
    yourBudget = prompt('Ваш бюджет на месяц?', '');
    while (isNaN(yourBudget) || yourBudget == '' || yourBudget == null) {
      yourBudget = prompt('Ваш бюджет на месяц?', '');
    }
    nameYourStore = prompt('Название вашего магазина?', '').toUpperCase();
    time = 21;
  }

  start();*/

let mainList = {
  budget: yourBudget,
  nameStore: nameYourStore,
  shopGoods: [],
  employers: {},
  open: false,
  discount: false,
  shopItems: [],
  chooseGoods: function chooseGoods() {
    for (let i = 0; i < 5; i++) {
      let a = prompt('Какой тип товара будем продавать?', '');

      if ((typeof (a)) === 'string' && (typeof (a)) !== null && a != '' && a.length < 50) {
        console.log('Все верно');
        mainList.shopGoods[i] = a;
      } else {
        console.log('Неверные данные введите по новой');
        i = --i; //обнуляет счетчик и нужно вводить 5 товаров по новой
      }
    };
  },
  workTime: function workTime(time) {
    if (time < 0) {
      console.log('не может быть');
      } else if (time > 8 && time < 20) {
        console.log('Время работать');
        mainList.open = true;
        } else if (time < 24) {
          console.log('Слишком поздно');
          } else {
              console.log('В сутках 24 часа');
            }
  },
  budgetDay: function budgetDay() {
    let budgetDay = mainList.budget / 30;
    console.log('Бюждет на день: ' + budgetDay);
  },
  getDiscount: function getDiscount() {
    if (mainList.discount == true) {
      price = price * 80 / 100;
    }
  },
  getEmployers: function getEmployers() {
    for (let i = 0; i < 4; i++) {
      let name = prompt('Имя сотрудника');
      mainList.employers[i] = name;
    }
  },
  chooseShopItems: function chooseShopItems() {
    let items = prompt('Перечислите через запятую ваши товары', '');

    while (!isNaN(items) || items == '' || items == null) { // проверка на строку, пустоту и отмену
      items = prompt('Перечислите через запятую ваши товары', '');
    }
    mainList.shopItems = items.split(',');
    mainList.shopItems.push(prompt('Подождите еще ', ''));
    mainList.shopItems.sort();
    
    mainList.shopItems.forEach(function(item , i) {  //перебор массива методом forEach и вывод товаров в консоль
      console.log('У нас вы можете приобрести: ' + item + ' порядковый номер: ' + (i+1));
    })
  }
}
// перебор свойств объекта mainList методом key in и вывод в консоль
/*for (let key in mainList) {
  console.log('Свойство ' + key + ' имеет свойство ' + mainList[key]); 
}*/

console.log(mainList);
