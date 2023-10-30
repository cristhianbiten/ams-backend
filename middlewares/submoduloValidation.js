const { body } = require("express-validator");

const submoduloValidation = () => {
    return [
        body("nome")
            .not()
            .equals("undefined")
            .withMessage("O submodulo é obrigatório")
            .isString()
            .withMessage("A submodulo é obrigatório")
            .isLength({ max: 3 })
            .withMessage("O submodulo deve ter no máximo 3 caracteres.")
            .isLength({ min: 2 })
            .withMessage("O submodulo deve ter no mínimo 2 caracteres."),
    ];
};

module.exports = {
    submoduloValidation
};
