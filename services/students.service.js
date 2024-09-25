const Student = require("../models/students.model");

// get all
const getAllStudents = async (res) => {
  try {
    const students = await Student.find();
    console.log("🚀 ~ getAllStudents ~ students:", students);
    return students;
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// get students details

const getStudentDetailsById = async (id) => {
  const student = await Student.findById(id);
  if (!student) {
    throw new Error("Student not found");
  }
  return {
    fullName: student.fullName,
    age: student.age,
    email: student.email,
    mobile: student.mobile,
    class: student.class,
  };
};

const createNewStudent = async (studentData) => {
  try {
    const newStudent = new Student(studentData);
    return await newStudent.save();
  } catch (error) {
    throw new Error("Creating student failed:" + error.message);
  }
};

module.exports = {
  getAllStudents,
  createNewStudent,
  getStudentDetailsById,
};
