const allTeachers = (req, res) => {
  res.send("get all Teachers");
};

const newTeachers = (req, res) => {
  res.send("post new Teachers");
};

const deleteTeachers = (req, res) => {
  res.send("delete Teachers");
};

const updateTeachers = (req, res) => {
  res.send("update Teachers");
};

export { allTeachers, newTeachers, deleteTeachers, updateTeachers };
