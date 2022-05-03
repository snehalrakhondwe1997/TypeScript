/*TypeScript Abstract Class Tutorial
TypeScript Abstract Class:
Abstract class is a way of implementing 0 to 100% abstraction. A class declared with abstract keyword is known as an abstract class. An abstract class may or may not contain abstract method. Abstract classes cannot be instantiated.

Syntax:
abstract class className {
   // declare fields
   // declare abstract/non-abstract methods
}*/

abstract class Department {
 
    constructor(public name: string) {
    }
 
    printName(): void {
        console.log("Department name: " + this.name);
    }
 
    abstract printMeeting(): void; 
}
 
class AccountingDepartment extends Department {
 
    constructor() {
        super("Accounting and Auditing"); 
    }
 
    printMeeting(): void {
        console.log("The Accounting Department meets each Monday at 10am.");
    }
 
    generateReports(): void {
        console.log("Generating accounting reports...");
    }
}

let department: Department;
department = new AccountingDepartment();
department.printName();
department.printMeeting();