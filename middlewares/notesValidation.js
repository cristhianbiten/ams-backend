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
      .withMessage("O número precisa ter no mínimo 4 caracteres."),
    body("titulo")
      .not()
      .equals("undefined")
      .withMessage("O título é obrigatório")
      .isString()
      .withMessage("O título é obrigatório")
      .isLength({ max: 120 })
      .withMessage("O título deve ter no máximo 60 caracteres.")
      ,
    body("modulo")
      .not()
      .equals("undefined")
      .withMessage("O módulo é obrigatório")
      .isString()
      .withMessage("O módulo é obrigatório"),
    body("cliente")
      .not()
      .equals("undefined")
      .withMessage("O cliente é obrigatório")
      .isString()
      .withMessage("O cliente é obrigatório"),
    body("solicitacao")
      .not()
      .equals("undefined")
      .withMessage("A solicitação é obrigatória")
      .isString()
      .withMessage("A solicitação é obrigatória"),
    body("prioridade")
      .not()
      .equals("undefined")
      .withMessage("A prioridade é obrigatória")
      .isString()
      .withMessage("A prioridade é obrigatória")
  ];
};

module.exports = {
  notesValidation
};
