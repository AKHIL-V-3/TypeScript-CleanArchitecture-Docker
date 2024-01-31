"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const mongoose_2 = require("mongoose");
const userSchema = new mongoose_1.default.Schema({
    name: String,
    email: String,
    password: String
});
const User = (0, mongoose_2.model)('Users', userSchema);
exports.User = User;
// module.exports = mongoose.model("User",userSchema)
//# sourceMappingURL=userModel.js.map