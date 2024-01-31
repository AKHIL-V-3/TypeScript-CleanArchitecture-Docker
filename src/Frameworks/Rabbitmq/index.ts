import amqp from 'amqplib'

const rabbitMqConnection = () => {


    let connection: any;

    const connectToMq = async () => {

        connection = await amqp.connect("amqp://rabbitmq_auth-container")
        const channel = await connection.createChannel()
        return channel

    }

    const closeConnection = async () => {
        if (connection) {
            await connection.close();
        }
    };


    const sendNotification = async (notificationData: any) => {

        const channel = await connectToMq()
        const queueName = "realtime_server:set_notification"
        await channel.assertQueue(queueName)
        const message = JSON.stringify(notificationData)
        channel.sendToQueue(queueName, Buffer.from(message))
    }

    return {
        sendNotification,
        closeConnection
    }
}


export default rabbitMqConnection;