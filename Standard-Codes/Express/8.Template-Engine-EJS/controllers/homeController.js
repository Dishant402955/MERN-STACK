const homeController = (req, res) => {
    const data = {
        fname: "Dishant",
        lname: "radadiya",
        id: 10
    };
    res.render("index", data);
}

export default homeController;