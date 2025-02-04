const allStudents = (req, res) => {
    res.send("get all students");
}

const newStudents = (req, res) => {
    res.send("post new students");
};

const deleteStudents = (req, res) => {
    res.send("delete students");
};

const updateStudents = (req, res) => {
    res.send("update students");
};

export { allStudents, newStudents, deleteStudents, updateStudents };