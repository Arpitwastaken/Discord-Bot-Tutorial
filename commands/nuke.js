const discord = require("discord.js")

exports.run = async (client, message, args) => {
  
  if(!message.member.hasPermission("ADMINISTRATOR")){
    return message.channel.send("Sorry You don't have permission for use this command")
  }
  let pos = message.channel.position
  
  message.channel.clone().then(c => {
    message.channel.delete()
    c.setPosition(pos)
    c.send("This channel has been nuked\nhttps://imgur.com/LIyGeCR")
  })
}
