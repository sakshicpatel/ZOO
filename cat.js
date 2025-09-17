class Cat extends Animal {
  //overwrite parent constructor
  constructor (name, language, mustashStyle="curly") {
    //create a clone of parent
    super ("Cat", name, "mewwwww-www"); //calls parents creation
  
  //personal class property
 this.mustashStyle = mustashStyle
}

    //overwrite parent function
  talk(){
  //Another way of String concotenation
    print(` I'm a ${this.breed}, with ${this.mustash} my name is ${this.name}`)
  }
}