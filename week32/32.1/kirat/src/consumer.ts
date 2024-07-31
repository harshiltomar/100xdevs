import { Kafka } from "kafkajs"

const kafka = new Kafka({
  clientId: 'my-app',
  brokers: ['localhost:9092', 'localhost:9092']
})


const consumer = kafka.consumer({ groupId: 'test-group' + Math.random() })

const run = async () => {

  // Consuming
  await consumer.connect()
  await consumer.subscribe({ topic: 'quickstart-events', fromBeginning: true })

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
        if(!message.value) {
            return;
        }
        console.log({
            partition,
            offset: message.offset,
            value: message.value.toString(),
        })
    },
  })
}

run().catch(console.error)