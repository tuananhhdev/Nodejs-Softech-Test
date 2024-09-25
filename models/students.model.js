const mongoose = require("mongoose");
const validatePhoneNumber = require("../validator/phoneNumber");
const validateEmail = require("../validator/emailValidate");
const validateAge = require("../validator/ageValidate");

const studentSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      maxLength: 255,
      minLength: 2,
      unique: true,
      require: true,
    },
    age: {
      type: Number,
      maxLength: 100,
      require: true,
      validate: [validateAge, "Age must be between 0 and 100"],
    },
    email: {
      type: String,
      unique: true,
      require: true,
      validate: [validateEmail, "Please enter a valid email address"],
    },
    mobile: {
      type: String,
      require: true,
      unique: true,
      validate: [validatePhoneNumber, "Please enter a valid phone number"],
    },
    class: {
      type: String,
      require: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

studentSchema.methods.customMethod = function () {
  return `Student name is ${this.fullName}`;
};

const Student = mongoose.model("Students", studentSchema);
module.exports = Student;
