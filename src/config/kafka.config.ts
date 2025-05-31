import { Kafka } from "kafkajs";

export const kafka = new Kafka({
  brokers: [process.env.KAFKA_BROKER!],
  clientId: "quick-chat",
});

export const producer = kafka.producer();
export const consumer = kafka.consumer({ groupId: "chats" });

export const connectKafkaProducer = async () => {
  await producer.connect();
  console.log("Kafka Producer connected...");
};
