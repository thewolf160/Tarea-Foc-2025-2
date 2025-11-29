import { UsersServices } from "../services/users.service.js";

export class UserController {
    constructor() { }

    getAll = async (req, res) => {
        const { message, status, data } = await UsersServices.getAll();

        return res.status(status).json({
            message,
            data
        });
    };

    getOne = async (req, res) => {
        const { id } = req.params;

        const { message, status, data } = await UsersServices.getById(Number(id));

        return res.status(status).json({
            message,
            data
        });
    };

    created = async (req, res) => {
        const userData = req.body;
        userData.role_id = Number(userData.role_id);

        const { message, status, data } = await UsersServices.create(userData);

        return res.status(status).json({
            message,
            data
        });
    };

    updated = async (req, res) => {
        const { id } = req.params;
        const userData = req.body;

        if (userData.status !== undefined) {
            userData.status = userData.status === "true" ? true : false;
        }
        userData.role_id = Number(userData.role_id);

        const { message, status, data } = await UsersServices.update(Number(id), userData);

        return res.status(status).json({
            message,
            data
        });
    };

    deleted = async (req, res) => {
        const { id } = req.params;

        const { message, status } = await UsersServices.delete(Number(id));

        return res.status(status).json({
            message
        });
    };
}
