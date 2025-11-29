import { ProductsServices } from '../services/products.service.js';
import { body, param, validationResult } from 'express-validator';
import { CategoriesServices } from '../services/categories.service.js';
import { AreasServices } from '../services/areas.service.js';

const validatorName = async (req, res, next) => {
    await body('name').notEmpty().withMessage('El campo nombre no puede estar vacío').run(req);

    const errors = validationResult(req);
    if (errors.array().length > 0) {
        return res.status(400).json({
            message: errors.array()[0].msg,
        });
    }

    next();
};

const validatorId = async (req, res, next) => {
    await param('id').isInt().withMessage('El campo id debe ser un número entero').run(req);

    const errors = validationResult(req);
    if (errors.array().length > 0) {
        return res.status(400).json({
            message: errors.array()[0].msg,
        });
    }

    next();
};


const validatorPrice = async (req, res, next) => {
    await body('price')
        .isFloat({ min: 0 }).withMessage('El campo precio debe ser un número válido mayor o igual a 0')
        .run(req);

    const errors = validationResult(req);
    if (errors.array().length > 0) {
        return res.status(400).json({
            message: errors.array()[0].msg,
        });
    }

    next();
};


const validatorQuantity = async (req, res, next) => {
    await body('quantity')
        .isInt({ min: 0 }).withMessage('El campo cantidad debe ser un número entero mayor o igual a 0')
        .run(req);

    const errors = validationResult(req);
    if (errors.array().length > 0) {
        return res.status(400).json({
            message: errors.array()[0].msg,
        });
    }

    next();
};


const validatorCategoryId = async (req, res, next) => {
    await body('category_id')
        .isInt().withMessage('El campo category_id debe ser un número entero válido')
        .run(req);

    const errors = validationResult(req);
    if (errors.array().length > 0) {
        return res.status(400).json({
            message: errors.array()[0].msg,
        });
    }

    next();
};


const validatorAreaId = async (req, res, next) => {
    await body('area_id')
        .isInt().withMessage('El campo area_id debe ser un número entero válido')
        .run(req);

    const errors = validationResult(req);
    if (errors.array().length > 0) {
        return res.status(400).json({
            message: errors.array()[0].msg,
        });
    }

    next();
};

const validatorCategoryExist = async (req, res, next) => {
    const { category_id } = req.body;

    const { message, status, data } = await CategoriesServices.getById(Number(category_id));

    if (status === 404) {
        return res.status(status).json({
            message: message
        })
    }

    next();
}

const validatorAreaExist = async (req, res, next) => {
    const { area_id } = req.body;

    const { message, status, data } = await AreasServices.getById(Number(area_id));

    if (status === 404) {
        return res.status(status).json({
            message: message
        })
    }

    next();
}


const validatorIdExist = async (req, res, next) => {
    const { id } = req.params;

    const { message, status, data } = await ProductsServices.getById(Number(id));

    if (status === 404) {
        return res.status(status).json({
            message: message
        })
    }

    next();
}


const validatorNameAreaExist = async (req, res, next) => {
    const { name, area_id } = req.body;

    const { message, status, data } = await ProductsServices.getByNameAndArea(name, Number(area_id));

    if (status === 200) {
        return res.status(400).json({
            message: `Ya existe un producto con ese nombre en esta área`,
        });
    }

    next();
}

export default {
    validatorId, validatorName, validatorPrice, validatorQuantity,
    validatorCategoryId, validatorAreaId, validatorIdExist,
    validatorCategoryExist, validatorAreaExist, validatorNameAreaExist
};