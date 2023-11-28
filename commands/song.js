const { SlashCommandBuilder } = require('discord.js');

module.exports = {
  data: new SlashCommandBuilder()
    .setName('song')
    .setDescription('Give\'s a random song!~'),
  async execute(interaction) {
    console.log('EXECUTED: SONG REC');

    song_list =
      [
        "https://open.spotify.com/track/7wdwIaXUuzlu1grzWMFRJm?si=e9228c6ad1ad4165", //mary on a cross
        "https://open.spotify.com/track/1kF9vY7s9DlcPtJFCMyA3k?si=1878562edc014f4a", //her smile
        "https://open.spotify.com/track/5RBM0pP9EE2azF3okstJIt?si=bc0ece04ae3b4a5c", //heaven blink-182
        "https://open.spotify.com/track/04zxGiXcmNQ0m9oDXtwo18?si=626175240e2648af", //busted and blue
        "https://open.spotify.com/track/43aiOMs0ugTzI8a9vzujV6?si=e5e76b7e69b5423f", //my heart sometimes
        "https://open.spotify.com/track/56dvEv8PIWFuc5vJQLPM0L?si=fa3424c57e574ea9", //fly me to the moon
        "https://open.spotify.com/track/3ykvobAQxQ5VlcDOMKXI4M?si=7f0358a046d448e5", //i wont run
        "https://open.spotify.com/track/2aCortOZLFlHkcSS47BOgn?si=80bea9e581984692", //skies forever blue
        "https://open.spotify.com/track/5QTxFnGygVM4jFQiBovmRo?si=e2bda7050ec64085", //dont fear the reaper
        "https://open.spotify.com/track/0DI3WNmIyfi2GZLQwhYDQC?si=2b534bf7e6324dc0", //Komm Susser Todd
        "https://open.spotify.com/track/5oe4nXdLjrUa6ATlYYyGG3?si=f41de0508447477c", //vignette: visions
        "https://open.spotify.com/track/1rQSgfZQ99OBjXsWfb4zHd?si=199141f71df34c5f", //my famed disappearing act
        "https://open.spotify.com/track/5qxChyzKLEyoPJ5qGrdurN?si=0064544dedbf4082", //no sleep till brooklyn
        "https://open.spotify.com/track/1s83A4kZY8hU8oN8Okhtqc?si=f30fa2111ad34f55", //neoprene byzantine
        "https://open.spotify.com/track/6lpFkqtsdooLUdO5APyA8B?si=b25e780416d042ce", //12 foot home depot skeleton
        "https://open.spotify.com/track/2kS6td1yvmpNgZTt1q5pQq?si=4b998c6737ba4e85", //hayloft
        "https://open.spotify.com/track/2E7W1X4maFFcjHrVrFA7Vs?si=e0433e85731e4a42", //bark at the moon
        "https://open.spotify.com/track/13qjycCLStZb9sJje6v0MC?si=efb4cbae57ec42ad", //red like roses 2
        "https://open.spotify.com/track/485I9aeIR9K8PiN2QW6ksm?si=03caf2565aea424c", //spark
        "https://open.spotify.com/track/0RjG5JmdOWXAR68dGlKBA5?si=958acd62dee84d77", //hidden in the sand
        "https://open.spotify.com/track/6XvlonZUoCpKoBgGQCUF5a?si=5b0ec644cc1b43ca", //lets just live
        "https://open.spotify.com/track/1rMid3LwidD2vMW9DXYH2a?si=cb14ead1271743d4", //casting dreams
        "https://open.spotify.com/track/5FP9odC0iHedYckaTEqvYv?si=429fc169da214ee3", //shine
        "https://open.spotify.com/track/0HxgZoPhjbz0V7S4cio2JB?si=e7879568a40448cd", //hero
        "https://open.spotify.com/track/04SUDTPu6sjn1Qvqaf5vdW?si=498d89b9f3ed467b", //microwave cat
        "https://open.spotify.com/track/1Nn3kFFmkQVaBOzUJpD3RE?si=5e7f5f7eeec34f30", //electromagnetic girl
        "https://open.spotify.com/track/1tbNH5xKUTBJdan8G4K5ov?si=006cef2106304b48", //tornado siren
        "https://open.spotify.com/track/7yiOte1eSM0npbr8sEIuzs?si=1cc2134bc2e54fa1", //town inside
        "https://open.spotify.com/track/1ODqAHQVpYD9J8RxWt0ECU?si=76a48170aa73445f", //gigglebutton
        "https://open.spotify.com/track/2HVie6QZfnDS2HVQiGZwU6?si=dc812ff9fa504272", //starlight brigade
        "https://open.spotify.com/track/4VoSYq3aTp57jgrdNswzrd?si=fdeb772068554628", //necromancin
        "https://open.spotify.com/track/54BW4qpq5ms4bnzBgiWVOo?si=8e8ef4b747ce4943", //night running
        "https://open.spotify.com/track/32zqrDpYvNr8BuOClDpavD?si=aaa8be4b7a164fd1", //absolute territory
        "https://open.spotify.com/track/2e3g8go386Zn6EyIz60Ci9?si=d57780eea8394e1d", //snake
        "https://open.spotify.com/track/6v8fX5yXd15H3xSyvVvJ5e?si=88b7c89afd234a8e", //lagtrain
        "https://open.spotify.com/track/3o12aZuNJ2JdhkXGffu0lw?si=84eac4137e8443a1", //I've still got smth to tell you
      ];

    return interaction.reply(song_list[Math.floor(Math.random() * song_list.length)]);
  },
};