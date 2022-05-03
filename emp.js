var Employee = /** @class */ (function () {
    //constructor
    function Employee(name) {
        this.name = name;
    }
    //function
    Employee.prototype.display = function () {
        console.log("Employee Name: " + this.name);
    };
    return Employee;
}()); //create an object
var obj = new Employee("Jai"); //access the field
console.log("Employee Name: " + obj.name); //access the function
obj.display();
