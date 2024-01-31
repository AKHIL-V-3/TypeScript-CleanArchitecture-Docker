"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRepository = void 0;
const userModel_1 = require("../../Frameworks/MongoDB/Models/userModel");
const Rabbitmq_1 = __importDefault(require("../../Frameworks/Rabbitmq"));
class userRepository {
    async createUser(data) {
        // console.log(data);
        try {
            const newUser = new userModel_1.User({
                name: data.name,
                email: data.email,
                password: data.password
            });
            const response = await newUser.save();
            const rabbitMq = (0, Rabbitmq_1.default)();
            console.log(rabbitMq, 'all goooooooooooooooood');
            rabbitMq.sendNotification(response);
            setTimeout(() => {
                rabbitMq.closeConnection();
                process.exit(0);
            }, 500);
            return response;
        }
        catch (err) {
            console.log(err);
        }
        //    User.create(data).then((response)=>{
        //     console.log('hmm');
        //     console.log(response);
        //     return response
        //    })
    }
}
exports.userRepository = userRepository;
//# sourceMappingURL=userRepository.js.map