module.exports = {
  name: 'ready',
  once: true,
  async execute(client) {
    const cron = require('node-cron');
    console.log(`<3`);
    console.log(``);
    console.log(`Done! Logged in as ${client.user.tag}~`);
    console.log(``);

    const quotes = require('../quotes.js');
    let Picked = quotes[Math.floor(Math.random() * quotes.length)];

    cron.schedule('0 0 * * *', function() {
      client.channels.cache.get('1003510516838309978').send("Reminder to stay hydrated out there!~ :bubbles:");
      console.log("stay hydrated hun~");
    });
    cron.schedule('0 2 * * *', function() {
      client.channels.cache.get('1003510516838309978').send("Go take a sip of water! :droplet:");
      console.log("stay hydrated hun~");
    });
    cron.schedule('0 4 * * *', function() {
      client.channels.cache.get('1003510516838309978').send("Make sure to get some water!~ :sweat_drops:");
      console.log("stay hydrated hun~");
    });
    cron.schedule('0 6 * * *', function() {
      client.channels.cache.get('1003510516838309978').send("Hydration check~ :bubbles:");
      console.log("stay hydrated hun~");
    });
    cron.schedule('0 8 * * *', function() {
      client.channels.cache.get('1003510516838309978').send("You better be staying hydrated~ :droplet:");
      console.log("stay hydrated hun~");
    });
    cron.schedule('0 10 * * *', function() {
      client.channels.cache.get('1003510516838309978').send("water is *yummii~* :sweat_drops:");
      console.log("stay hydrated hun~");
    });
    cron.schedule('0 12 * * *', function() {
      client.channels.cache.get('1003510516838309978').send("get some water in youu~ :bubbles:");
      console.log("stay hydrated hun~");
    });
    cron.schedule('0 14 * * *', function() {
      client.channels.cache.get('1003510516838309978').send("mmm cold water, very hydrating!~ :droplet:");
      console.log("stay hydrated hun~");
    });
    cron.schedule('0 16 * * *', function() {
      client.channels.cache.get('1003510516838309978').send("Water would damge my code, but you should still get sum!~ :sweat_drops:");
      console.log("stay hydrated hun~");
    });
    cron.schedule('0 18 * * *', function() {
      client.channels.cache.get('1003510516838309978').send("GET WATER, HYDRATIONNN :bubbles:");
      console.log("stay hydrated hun~");
    });
    cron.schedule('0 20 * * *', function() {
      client.channels.cache.get('1003510516838309978').send("Humanity is bound for destruction, but you should still stay hydrated~ :droplet:");
      console.log("stay hydrated hun~");
    });
    cron.schedule('0 22 * * *', function() {
      client.channels.cache.get('1003510516838309978').send("*Water reminder~* :sweat_drops:");
      console.log("stay hydrated hun~");
    });
    cron.schedule('0 1 * * *', function() {
      client.channels.cache.get('1003510516838309978').send("GO TO BED RIGHT NOW FFS");
      console.log("sleep, dear fucking god");
    });


    cron.schedule('30 8-23 * * *', function() {

      let Picked = quotes[Math.floor(Math.random() * quotes.length)];
      say_quote(Picked);

    });

    function say_quote(quote) {
      client.channels.cache.get('1003510516838309978').send(quote);
      console.log("Quote~");
    }
  },
};
