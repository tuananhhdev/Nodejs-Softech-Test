const { sendJsonSucess } = require("../helpers/resHandlers");
const studentsService = require("../services/students.service");

const getAllStudents = async (req, res, next) => {
  try {
    // const students = await studentsService.getAllStudents;
    // sendJsonSucess(res)(students);
    const students = await studentsService.getAllStudents();
    res.json(students);
  } catch (error) {
    next(error);
  }
};

const createNewStudent = async (req, res) => {
  try {
    const newStudent = await studentsService.createNewStudent(req.body);
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getStudentDetailsByIdd = async (req, res, next) => {
  try {
    const student = await studentsService.getStudentDetailsById(req.params.id);
    sendJsonSucess(res)(student);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getAllStudents,
  createNewStudent,
  getStudentDetailsByIdd,
};
