import { body } from "express-validator";

const loginValidations = [
  body("email").matches(/^[A-Za-z@.0-9_-]+$/).notEmpty(),
  body("password").matches(/^[A-Za-z@$.0-9]+$/).notEmpty(),
];

export default loginValidations;