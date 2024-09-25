const { getAllStudents } = require("../services/students.service");

const sendJsonSucess = (res, message = "Success", code = 200) => {
  return (data = null) => {
    const resData = data
      ? {
          statusCode: code,
          message,
          data,
        }
      : {
          statusCode: code,
          message,
        };
    res.status(code).json(resData);
  };
};

const sendJsonErrors = (res, error) => {
  return res.status(error.status || 500).json({
    statusCode: error.status || 500,
    errorType: error.name || "UnknownName",
    message: error.message || "Unhandled Error",
  });
};

module.exports = { sendJsonSucess, sendJsonErrors };
