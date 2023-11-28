module.exports = {
  name: 'messageCreate',
  async execute(message, client) {

    console.log(message.content);
    if (message.author.bot) return;

    if (message.content.toLowerCase().includes("im back") || message.content.toLowerCase().includes("i'm back")) {
      message.reply("Hi back, I'm Robo-Lucy!~");
      console.log('EXECUTED: DADJOKE');
      return;
    }

    if (message.content.toLowerCase().includes("im a fool") || message.content.toLowerCase().includes("i'm a fool")) {
      message.reply("I know nothing~");
      console.log('no knowledge?');
      return;
    }

    if (message.content.toLowerCase().includes("i know nothing")) {
      message.reply("I may sound like a silly clowwwn~");
      console.log('silly clown');
      return;
    }

    //repies to "I'm", but is really annoying
    //	const args = message.content.trim().split(/ +/g);
    //	if((args[0].toLowerCase() == 'i\'m' || args[0].toLowerCase() == 'im')) {
    //		message.reply(`Hi ${args.slice(1).join(' ')}, I'm Robo-Lucy!~`);
    //		console.log('EXECUTED: DADJOKE');
    //		return;
    //	}

    if (message.content.includes("the end is never")) {
      message.reply("The end is never the end is nev- yes, we get it lol");
      console.log('EXECUTED: THE END');
      return;
    }

    if (message.content.toLowerCase().includes("lucy jr,")) {
      main(message);
      return;
    }

    if (message.content.toLowerCase().includes("spinny")) {
      message.reply("https://tenor.com/view/inabakumori-plush-gif-26660942");
    }

    // LYRIC BOT LYRIC BOT
    //
  },
};


const OpenAI = require('openai');
const instructions = require('../instructions.js');

const openai = new OpenAI({
  apiKey: process.env["OPENAI_API_KEY"] // defaults to process.env["OPENAI_API_KEY"]
});
async function main(message) {
  const stream = await openai.beta.chat.completions.stream({
    model: 'gpt-3.5-turbo',
    messages: [{ role: 'system', content: instructions[0] },
    { role: 'user', content: message.content }],
    stream: true,
  });

  const chatCompletion = await stream.finalChatCompletion();
  console.log(chatCompletion.choices[0].message.content); // {id: "…", choices: […], …}
  message.reply(chatCompletion.choices[0].message.content);
}
