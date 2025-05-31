import {Kafka} from "kafkajs"
export const kafka = new Kafka({
    clientId:"Quick_chat",
    brokers:[process.env.KAFKA_BOOTSTRAP_SERVER_URL],
    ssl:true,
    sasl:{
        mechanism:"plain",
        username:process.env.KAFKA_API_KEY,
        password:process.env.KAFKA_API_SECRET
    }

});
export const producer = kafka.producer();
export const consumer = kafka.consumer({ groupId: "chats" });

export const connectKafkaProducer = async () => {
  await producer.connect();
  console.log("Kafka Producer connected...");
};
