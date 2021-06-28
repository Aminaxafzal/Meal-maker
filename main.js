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
    set dessert(dessert) {
     return this._courses.dessert = dessert;
    },
    get _courses() {
      return {
        appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.dessert
      };
         },
    addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice
    }
    return this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName]
    const randomIndex = Math.floor(Math.random() * dishes.length);
    
    }
    
    };