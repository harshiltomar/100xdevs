import { Kafka } from "kafkajs"

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:9092', 'localhost:9092']
})

const producer = kafka.producer()


const run = async () => {
  // Producing
  await producer.connect()
  await producer.send({
    topic: 'quickstart-events',
    messages: [
      { value: 'Hello KafkaJS user!' },
    ],
  })
}

run().catch(console.error)