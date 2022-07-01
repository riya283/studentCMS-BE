// const { studentInfo } = require("../models/index.js");

module.exports = app => {
  const studentInfo = require("../controllers/student_info_controller.js");

  var router = require("express").Router();

  // Create a new student
  router.post("/", studentInfo.create);

  // Retrieve all students
  router.get("/", studentInfo.findAllActiveStudent);

  // Retrieve all students
  router.post("/byFilter", studentInfo.getStudentInfoByFilter);

  //Retrive aa students by user input
  router.post("/getStudentInfoByUserInput", studentInfo.getStudentInfoByUserInput);


  // Update a student with id
  router.post("/update", studentInfo.updateStudent);

  // Delete a student with id
  router.post("/delete", studentInfo.deleteStudent);

  
  app.use('/api/studentInfo', router);
};
