const employee = {
    name: "Jane",
    streetAddress: "Tenafly Road",
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newEmployee = { ...employee };
  
    newEmployee[key] = value;
  
    return newEmployee;
  }

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value; //Why are we using bracket notation here?
  
    return employee;
  }

function deleteFromEmployeeByKey(employee, key, value) {
    const newEmployee = {...employee};
    newEmployee[key] = value;
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key, value) {
    employee[key] = value; //Why are we using bracket notation here?
  
    return employee;
  }