//class and objects
class name_class{
//field
//identifier:datatype
username:string;
age:number;
//constructor
constructor(uname:string){//for constructor dont use class name
use constructor here 

this.username=uname;
}

display():void{
conslor.log("name="+username);
}
}

//create an object

var obj = new Employee("snehal");
obj.display();//calling functions
