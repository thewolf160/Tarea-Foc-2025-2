import { ProductsServices } from "../services/products.service.js";

export class ProductsController {
    constructor() { }

    getAll = async (req, res) => {
        const { message, status, data } = await ProductsServices.getAll();

        return res.status(status).json({
            message,
            data
        });
    };

    getOne = async (req, res) => {
        const { id } = req.params;

        const { message, status, data } = await ProductsServices.getById(Number(id));

        return res.status(status).json({
            message,
            data
        });
    };

    created = async (req, res) => {
        const productData = req.body;
        productData.category_id = Number(productData.category_id);
        productData.area_id = Number(productData.area_id);
        productData.price = Number(productData.price);
        productData.quantity = Number(productData.quantity);

        const { message, status, data } = await ProductsServices.create(productData);

        return res.status(status).json({
            message,
            data
        });
    };

    updated = async (req, res) => {
        const { id } = req.params;
        const productData = req.body;

        if (productData.status !== undefined) {
            productData.status = productData.status === "true" ? true : false;
        }
        productData.category_id = Number(productData.category_id);
        productData.area_id = Number(productData.area_id);
        productData.price = Number(productData.price);
        productData.quantity = Number(productData.quantity);

        const { message, status, data } = await ProductsServices.update(Number(id), productData);

        return res.status(status).json({
            message,
            data
        });
    };

    deleted = async (req, res) => {
        const { id } = req.params;

        const { message, status } = await ProductsServices.delete(Number(id));

        return res.status(status).json({
            message
        });
    };
}