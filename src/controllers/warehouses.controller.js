import { WarehousesServices } from "../services/warehouses.service.js";

export class WarehousesController {
    constructor() { }

    getAll = async (req, res) => {
        const { message, status, data } = await WarehousesServices.getAll();

        return res.status(status).json({
            message,
            data
        });
    };

    getOne = async (req, res) => {
        const { id } = req.params;

        const { message, status, data } = await WarehousesServices.getById(Number(id));

        return res.status(status).json({
            message,
            data
        });
    };

    created = async (req, res) => {
        const warehouseData = req.body;

        const { message, status, data } = await WarehousesServices.create(warehouseData);

        return res.status(status).json({
            message,
            data
        });
    };

    updated = async (req, res) => {
        const { id } = req.params;
        const warehouseData = req.body;

        if (warehouseData.status !== undefined) {
            warehouseData.status = warehouseData.status === "true" ? true : false;
        }

        const { message, status, data } = await WarehousesServices.update(Number(id), warehouseData);

        return res.status(status).json({
            message,
            data
        });
    };

    deleted = async (req, res) => {
        const { id } = req.params;

        const { message, status } = await WarehousesServices.delete(Number(id));

        return res.status(status).json({
            message
        });
    };
}
