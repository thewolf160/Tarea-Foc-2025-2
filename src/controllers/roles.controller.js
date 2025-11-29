import { RolesServices } from "../services/roles.service.js";

export class RolesController {
    constructor() { }

    getAll = async (req, res) => {
        const { message, status, data } = await RolesServices.getAll();

        return res.status(status).json({
            message,
            data
        });
    };

    getOne = async (req, res) => {
        const { id } = req.params;

        const { message, status, data } = await RolesServices.getById(Number(id));

        return res.status(status).json({
            message,
            data
        });
    };

    created = async (req, res) => {
        const roleData = req.body;

        const { message, status, data } = await RolesServices.create(roleData);

        return res.status(status).json({
            message,
            data
        });
    };

    updated = async (req, res) => {
        const { id } = req.params;
        const roleData = req.body;

        if (roleData.status !== undefined) {
            roleData.status = roleData.status === "true" ? true : false;
        }

        const { message, status, data } = await RolesServices.update(Number(id), roleData);

        return res.status(status).json({
            message,
            data
        });
    };

    deleted = async (req, res) => {
        const { id } = req.params;

        const { message, status } = await RolesServices.delete(Number(id));

        return res.status(status).json({
            message
        });
    };
}
