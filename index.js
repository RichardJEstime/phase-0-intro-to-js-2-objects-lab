// Write your solution in this file
//Define a employee variable and assign it to an object containing name, and street address keys

function updateEmployeeWithKeyAndValue(employee,key,value) {
    const result = Object.assign({},employee, {[key]:value});
        console.log(result)
}


//function updateEmployeeWithKeyAndValue(key,value) {
//  return {key:value}
//}