const {kafka} = require('.');
const consumer = kafka.consumer({ groupId: 'test-group' })
const {Consumer} = require('./models');

const cons_fn = async () =>{
  let id = 0;
  await consumer.connect()
await consumer.subscribe({ topic: 'test-topic', fromBeginning: true })
await consumer.subscribe({ topic: 'start-topic', fromBeginning: true })
await consumer.run({
  eachMessage: async ({ topic, partition, message }) => {
    try{
      let x = await Consumer.create({...JSON.parse(message.value), id});
      id+=1;
      console.log(x);
    }
    catch(err){
      console.log(JSON.parse(message.value));
      console.log("Err >>>>> ",err);
    }
  },
})}

cons_fn();