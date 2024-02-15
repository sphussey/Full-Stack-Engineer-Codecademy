const menu = {
    _meal: '',
    _price: 0,
    set price(num) {
      if (typeof num === 'number') {
        this._price = num;
      } else {
        console.log("Please provide a number!");
      };
    },
    get price() {
      return this._price;
    },
    set meal(food) {
      if (typeof food === 'string') {
        this._meal = food;
      } else {
        console.log("Please enter a valid string!");
      };
    },
    get meal() {
      return this._meal;
    }
  };
  
  menu.price = 2
  menu.meal = "buffalo hot wings"
  
  console.log(menu.price)
  console.log(menu.price)
  
  