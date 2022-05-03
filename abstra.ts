abstract Class Department{

constructor(public name:string){
}
print name():void{
console.log("Department name:"+this.name);
}

abstract printMetting():void;
}

class AccountingDepartment extends Department{

constructor(){
super("Accounting Department meets each Monday at 10am.");
}

generateReports():void{
 console.log("Generating accounting reports...");
}
}

let department:Department;
department = new AccountingDepartment();
deprtment.printName();

deprtment.printMeeting();



