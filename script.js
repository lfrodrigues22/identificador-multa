//tipo booleano

var isenabled = false; //palavra reservada
console.log(isenabled);
console.log(test)

//array 

var names = ['luiz', 'felipe', 'miguel'];
console.log(names)
console.log(names[2])

names.push('jane')  //novo item
console.log(names)

//if - condicional

function testName(name){
    if(name.length > 10) {
        return 'nome grande'
  }
    else {
        return 'nome pequeno'
  }
  
}
console.log(testName('luiz felipe rodrigues de souza dos santos'))
