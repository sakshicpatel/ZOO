class Animal{
  //special function that takes incoming parameers
  constructor(breed="human", name="Nobody" ,lang="silence"){
   //personal properties
    this.breed = breed;
    this.name = name;
    this.language = lang;
  }
  
  //personal function
  talk(){
    print(this.language);
  }
  
  expressYourself() {
    //String concotenation example
    print("Hello, I'm " + this.breed + " , I say " + this.language);
  }
}

