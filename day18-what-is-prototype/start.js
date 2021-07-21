(() => {

  class Person {
  }

  const classAndPrototype = () => {
    const jaruwit = new Person();
    console.log(jaruwit);
    // class Person is a object define Prototype

    const name = 'Jaruwit';
    console.log(name.__proto__);
    //name is primitive type string
    //name.__proto__ is prototype method of primitive type string

    const arr = [];
    console.log(arr.__proto__);
    //arr is primitive type array
    //arr.__proto__ is prototype method of primitive type array

    //สิ่งที่ทำให้ prototype ใน __proto__ ในทุก primitive type เพื่อประหยัด memory และสารถมารถ reuse ได้เลยโดยไม่ต้อง copy __proto__ method ไปไว้ในทุก primitive type
  }


  const prototypeChain = () => {
    const name = 'Jaruwit';
    console.log(name.__proto__);
    console.log(name.toLocaleString());
    //name.toLocaleString() is a prototype chain  ซึ่งถ้าดูใน console จะต้องเรียก name.__proto__.__proto__.toLocaleString()
    // แต่ .__proto__ คือ object หลักของ class ใน js ซึ่งถ้าไม่มี method .toLocaleString() ในตัว __proto__ (prototype) มันเองมันไม่เรียกจาก class object ทันที
  }

  function seyHello(val) {
    console.log(`Hello ${val}`);
  }

  const extendPrototype = () => {
    const name = 'Jaruwit';
    String.prototype.seyHello = seyHello; //extend prototype add function seyHello in string
    console.log(name.__proto__);
    name.seyHello('My name is Javascript');
  }

  const run = () => {
    //classAndPrototype();
    //prototypeChain();
    extendPrototype();
  }

  run();
})();