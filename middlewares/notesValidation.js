const { body } = require("express-validator");

const notesValidation = () => {
  return [
    body("idChamado")
      .not()
      .equals("undefined")
      .withMessage("O número do chamado é obrigatório")
      .isString()
      .withMessage("O número do chamado é obrigatório")
      .isLength({ min: 4 })
      .withMessage("O número precisa ter no mínimo 4 caracteres.")
  ];
};

module.exports = {
  notesValidation
};
