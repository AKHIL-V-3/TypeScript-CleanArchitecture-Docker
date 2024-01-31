"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../../../Adaptor/userController");
const userRepository_1 = require("../../../Applications/repository/userRepository");
const userInteractor_1 = require("../../../Applications/interactor/userInteractor");
const router = express_1.default.Router();
const repository = new userRepository_1.userRepository();
const interactor = new userInteractor_1.userInteractor(repository);
const controller = new userController_1.userController(interactor);
router.post("/signin", controller.createUser.bind(controller));
exports.default = router;
//# sourceMappingURL=authRoute.js.map