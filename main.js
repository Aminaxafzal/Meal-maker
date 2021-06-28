const menu = {
    _courses: {
       appetizers: [] ,
      mains:[] ,
      desserts: [] 
    },
      get appetizers() {
     return this._courses.appetizers;
      },
      get mains() {
     return this._courses.mains;
      },
      get desserts() {
     return this._courses.desserts;
      },
    
    set appetizers(appetizers) {
     return this._courses.appetizers = appetizers;
    },
    set mains(mains) {
     return this._courses.mains = mains;
    },
    set dessert(desserts) {
     return this._courses.desserts = desserts;
    },
    get _courses() {
      return {
        appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
      };
         },

    addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice
    }; 
    return this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName]
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
    },

    generateRandomMeal() {
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('main');
        const dessert = this.getRandomDishFromCourse('dessert');
        const totalPrice = appetizer.price + main.price + dessert.price 
  return `'your meal is ${appetizer.price}, ${main.price} and ${dessert.price}. The total price is ${totalPrice}'`
    },
};
      
  menu.addDishToCourse('appetizer', 'Caesar Salad', 4.25),
  menu.addDishToCourse('appetizer', 'Spring rolls', 8.55),
  menu.addDishToCourse('appetizer', 'Fries', 3.00),
  
  menu.addDishToCourse('main', 'Steak', 19.25),
  menu.addDishToCourse('main', 'lobster', 25.00),
  menu.addDishToCourse('main', 'Chicken Pilau', 12.95),
  
  menu.addDishToCourse('dessert', 'Sundae', 5.25),
  menu.addDishToCourse('dessert', 'Chocolate cake', 2.95),
  menu.addDishToCourse('dessert', 'Cookies', 2.55),
  
  
 let meal = menu.generateRandomMeal();
 console.log(meal);
 

      
   