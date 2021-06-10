// Write your solution in this file
//Define a employee variable and assign it to an object containing name, and street address keys

const updatedEmployeeWithKeyAndValue(employee,key,value) {
    return Object.assign({},employee, {[key]:value})
}

//function updateEmployeeWithKeyAndValue(key,value) {
//  return {key:value}
//}