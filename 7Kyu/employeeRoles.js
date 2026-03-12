// You get a new job working for Eggman Movers. 
// Your first task is to write a method that will allow the admin staff to enter a person’s name 
// and return what that person's role is in the company.

// You will be given an array of object literals holding the current employees of the company. 
// You code must find the employee with the matching firstName and lastName and then 
// return the role for that employee or if no employee is not found it should return "Does not work here!"

// The array is preloaded and can be referenced using the 
// variable employees ($employees in Ruby). It uses the following structure.

// let employees = [ {firstName: "Dipper", lastName: "Pines", role: "Boss"}, ...... ]
// There are no duplicate names in the array and the name passed in will be a single string 
// with a space between the first and last name i.e. Jane Doe or just a name.

// What is it asking me to do? 
    // 1. find the employee with matching first and last name
    // 2. return what their role is 
    // 3. if not an employee return 'Does not work here!'

// How do we Code it? 
    // 1. loop through the array of key value pairs for the names 
    // 2. return their role if they work here 
    // 3. return does not work here if name is not found

function findEmployeesRole(name) {
    name = name.split(' ')  // split name into two indexes in an array 

    for(let i = 0; i < employees.length; i++) { // Looping through the array
        if (name[0] === employees[i].firstName && name[1] === employees[i].lastName){ // trying to match the names 
            return employees[i].role
        }
    }
    return `Does not work here!`
}

//Better Code: 
function findEmployeesRole(name) {
  let [employee] = employees.filter(x => `${x.firstName} ${x.lastName}` === name);
  return employee ? employee.role : "Does not work here!";
}