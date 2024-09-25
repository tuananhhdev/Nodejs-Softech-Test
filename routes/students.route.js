const express = require("express");
const studentController = require("../controllers/students.controller");
const router = express.Router();

// get all students
router.get("/", studentController.getAllStudents);

// create new student
router.post("/", studentController.createNewStudent);

// get students details by id
router.get("/:id", studentController.getStudentDetailsByIdd);


module.exports = router;
