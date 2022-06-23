const {kafka} = require('.');
const producer = kafka.producer()
const {Producer} = require('./models');

setTimeout(() => {
  
}, 5000);

const prod_fn = async () => {
  await producer.connect()
  await Producer.findAll().then(data=>data.forEach(async (datum)=>{
    await producer.send({
      topic: 'start-topic',
      messages: [
        { value: JSON.stringify({name: datum.name, message: datum.message})},
      ],
    })
  }));
}
prod_fn();