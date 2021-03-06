/* eslint-disable camelcase, no-process-env*/

var config = {};

config.discord = {};
config.github = {};
config.web = {};

config.discord.token = "DISCORD BOT TOKEN"; // This is for discord bot token
config.discord.channel_id = 'DISCORD GITHUB CHANNEL ID'; // This is for specific id number for github channel you want to use
config.github.token = "GITHUB SECRET (WEBHOOK)"; // This is the secret word/token that you create when making a webhook.
config.web.cname = 'localhost'; // Should be fine as localhost
config.web.url = 'http://' + config.web.cname + '/ping'; // This is the web url to ping your web
config.web.port = 8080; // This is the port the web runs on
config.web.workers = 1; // Creates x web worker(s)
config.web.path = '/webhook'; // Webhook path for the events in JSON.

module.exports = config;
