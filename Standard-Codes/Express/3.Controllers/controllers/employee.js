const allEmployees = (req, res) => {
  res.send("get all Employees");
};

const newEmployees = (req, res) => {
  res.send("post new Employees");
};

const deleteEmployees = (req, res) => {
  res.send("delete Employees");
};

const updateEmployees = (req, res) => {
  res.send("update Employees");
};

export { allEmployees, newEmployees, deleteEmployees, updateEmployees };
