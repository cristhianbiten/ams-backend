const { body } = require("express-validator");

const moduloValidation = () => {
    return [
        body("nome")
            .not()
            .equals("undefined")
            .withMessage("O módulo é obrigatório")
            .isString()
            .withMessage("A módulo é obrigatório")
            .isLength({ max: 3 })
            .withMessage("A módulo deve ter no máximo 3 caracteres.")
            .isLength({ min: 2 })
            .withMessage("A módulo deve ter no mínimo 2 caracteres."),
    ];
};

module.exports = {
    moduloValidation
};
