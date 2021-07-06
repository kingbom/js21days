(() => {
  // 1. Lexical scope & Dynamic scope
  function thisWindowGlobalObject() {
    console.log(this); //this = Window = global object
  }


  function printName() {
    console.log(this); // this is object
  }

  const jaruwit = { name : 'Jaruwint', printName };
  const jairuk = { name : 'jairuk', printName };


  function printNameGlobal() {
    console.log(this); // this is object
    console.log(`${this.name}`); // this is object
  }

  name = 'Global';


  function Person(name, nationality, city) {
    this.name = name;
    this.nationality = nationality;
    this.city = city;

    //this constructor function
    printName(this.name, this.nationality, this.city);

    //this Call function
    printName.call(this, this.name, this.nationality, this.city);

    //this Apply function
    printName.apply(this, [this.name, this.nationality, this.city]);

    //this Bind function
    const personBind = printName.bind(this);
    personBind(this.name, this.nationality, this.city);
  }


  const run = () => {
    thisWindowGlobalObject();

    //Invoke object
    jaruwit.printName();
    jairuk.printName();


    // Global
    printNameGlobal();

    const person = new Person('Jaruwit', 'Thai', 'Banhkok');
  }

  run();
})();