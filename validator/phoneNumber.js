const phoneNumberRegex = /^\d{10}$/;

const validatePhoneNumber = (phoneNumber) => {
  return phoneNumberRegex.test(phoneNumber);
};

module.exports = validatePhoneNumber;
