const db = require("../models");
const student_info = db.studentInfo;
const Op = db.Sequelize.Op;

// Create and Save a new student
exports.create = (req, res) => {
    const studentInfo = req.body;
    // Save Student Information in the database
    student_info.create(studentInfo)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the student Information."
            });
        });
};


// find all Student Information
exports.findAllActiveStudent = (req, res) => {
    student_info.findAll({ where: { status: "active" } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving student information."
            });
        });
};

// Delete a student with the specified id in the request
exports.deleteStudent = (req, res) => {
    const id = req.body.id;

    student_info.update({ status: "deleted" }, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "student information deleted."
                });
            } else {
                res.send({
                    message: `Cannot delete student information with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error deleting student information with id=" + id
            });
        });
};

// Update a student by the id in the request
exports.updateStudent = (req, res) => {
    const id = req.body.id;

    student_info.update(req.body, {
        where: { id: id }
    })
        .then(num => {
            if (num == 1) {
                res.send({
                    message: "student information was updated successfully."
                });
            } else {
                res.send({
                    message: `Cannot update student information with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating student information with id=" + id
            });
        });
};

// filter student by city
exports.getStudentInfoByFilter = (req, res) => {
    let orderBy = [];
    if (req.body.filterType === "BY_CITY_ASC") {
        orderBy.push(['city', 'ASC']);
    } else if (req.body.filterType === "BY_REG_DATE_ASC") {
        orderBy.push(['registrationDate', 'ASC']);
    } else if (req.body.filterType === "BY_NAME_ASC") {
        orderBy.push(['name', 'ASC']);
    } else {
        res.status(500).send({
            message:
                "Invalid Filter Value"
        });
    }

    student_info.findAll({ order: [orderBy], where: { status: "active" } })
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while filtering student info."
            });
        });
};

