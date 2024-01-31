"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const amqplib_1 = __importDefault(require("amqplib"));
const rabbitMqConnection = () => {
    let connection;
    const connectToMq = async () => {
        connection = await amqplib_1.default.connect("amqp://localhost");
        const channel = await connection.createChannel();
        return channel;
    };
    const closeConnection = async () => {
        if (connection) {
            await connection.close();
        }
    };
    const sendNotification = async (notificationData) => {
        const channel = await connectToMq();
        const queueName = "realtime_server:set_notification";
        await channel.assertQueue(queueName);
        const message = JSON.stringify(notificationData);
        channel.sendToQueue(queueName, Buffer.from(message));
    };
    return {
        sendNotification,
        closeConnection
    };
};
exports.default = rabbitMqConnection;
//# sourceMappingURL=index.js.map