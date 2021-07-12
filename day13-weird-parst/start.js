(() => {

  const nan = () => {
    // NaN != Nan
    if (NaN === NaN) {
        console.log("Equal");
    }

    const result = 1 / 'Hello';
    if (Number.isNaN(result)) {
        console.log("Equal to NaN");
    }
  }

  const typeCoercion = () => {
     if ( 1 < 2 < 3) {
        console.log("1 < 2 < 3 is true");
     }

    if ( 3 > 2 > 1) { /// true > 1  true equal 1  =>  1 > 1
      console.log("3 > 2 > 1 is true");
    }


    console.log(2 - '1'); // 1
    console.log(2 + '1'); // 21 (type convert to string)
    console.log(2 + Number.parseInt('1', 10)); // 3
    console.log(true + true); // 2 (true equal 1)
  }

  const getPerson = () => {
    return
    {
      name : 'Jaruwit'
    };
  }

  const interpreterAndCompiler = () => {
    console.log(getPerson()); //undefined
    // return;
    // {
    //   name : 'Jaruwit'
    // };
  }

  const checkingObjectType = () => {
    const person = {};
    if (typeof person === 'object') {
        console.log("Yes , person is object");
    }

    const customer = null;
    if (typeof customer === 'object') {
        console.log("Yes , customer is object");
    }


    const member = null;
    if (typeof member === 'object' && member !== null) {
        console.log("Yes , member is object");
    }
  }


  const run = () => {
    nan();
    typeCoercion();
    interpreterAndCompiler();
    checkingObjectType();
  }

  run();
})();