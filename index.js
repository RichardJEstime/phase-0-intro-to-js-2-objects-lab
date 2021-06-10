// Write your solution in this file
//Define a employee variable and assign it to an object containing name, and street address keys
const employee = {
   name: " ",
   streetAddress: " "
 };
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const result = Object.assign({}, employee, { [key]: value });
        console.log(result)
        return result;
}

// updates `employee` with the given `key` and `value` (it is destructive) and returns the entire updated employee
//returns employee without the delete key/value pair
//modifies the original employee

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
        employee[key] = value;
         return employee;
}

//1) deletes `key` from a clone of employee and returns the new employee (it is non-destructive)
//2) does not modify the original employee (it is non-destructive)
function deleteFromEmployeeByKey(employee, key) {
    const newEmployee = {...key}
    delete newEmployee.key;
    return newEmployee;
}


function destructivelyDeleteFromEmployeeByKey(employee,name) {
    const newEmployee = ['name']
}
//       3) returns employee without the delete key/value pair
//       4) modifies the original employee

