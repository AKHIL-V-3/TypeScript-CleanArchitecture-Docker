declare const rabbitMqConnection: () => {
    sendNotification: (notificationData: any) => Promise<void>;
    closeConnection: () => Promise<void>;
};
export default rabbitMqConnection;
