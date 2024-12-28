const client = require('..')
const {
    EmbedBuilder,
    ChannelType,
    ActionRowBuilder,
    ButtonBuilder,
    ButtonStyle,
} = require('discord.js')


module.exports = {
    event: 'guildCreate',
    async run(guild) {

        const embed = {
            embeds: [
                new EmbedBuilder()
                .setAuthor({
                    name: " || " + guild.name,
                    iconURL: guild.iconURL() || client.user.displayAvatarURL()
                })
                .setThumbnail(client.user.displayAvatarURL())
                .setTitle('感謝！')
                .setColor('Orange')
                .setDescription('感謝您邀請此機器人到您的伺服器！使用 `/help`獲取機器人指令！')
                .setFooter({
                    text: `感謝 <3`,
                    iconURL: (await client.users.fetch(guild.ownerId)).displayAvatarURL()
                })
                .setTimestamp()
            ],
                 components: [
                new ActionRowBuilder()
                    .addComponents(
                        new ButtonBuilder()
                            .setLabel('點我邀請')
                            .setStyle(ButtonStyle.Link)
                            .setURL('https://discord.com/oauth2/authorize?client_id=1120553284038557709')
                    )
                    .addComponents(
                        new ButtonBuilder()
                            .setLabel('需要幫助/疑問解決')
                            .setStyle(ButtonStyle.Link)
                            .setURL('https://discord.gg/49BFzTCrfv')
                    )
            ]
        } 
        
        if (guild.systemChannel && guild.systemChannel.permissionsFor(guild.members.me).has('SendMessages')) {
            try {
                guild.systemChannel.send(embed)
            } catch {
                return;
            }
        } else {
            const channel = guild.channels.cache.filter((channel) => channel.type === ChannelType.GuildText)
            let msgSent = false
            if (!channel) return;
            for (const i of channel) {
                if (i[1].permissionsFor(guild.members.me).has('SendMessages')) {
                    try {
                        if (msgSent) return
                        i[1].send(embed)
                    } catch {
                        return;
                    }
                }
            }
            return;
        }
    }
}