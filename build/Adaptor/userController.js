"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
class userController {
    constructor(interactor) {
        this.interactor = interactor;
    }
    async createUser(req, res, next) {
        try {
            const userData = req.body;
            const data = await this.interactor.createUser(userData);
            res.status(200).json(data);
        }
        catch (error) {
            next(error);
        }
    }
}
exports.userController = userController;
//# sourceMappingURL=userController.js.map