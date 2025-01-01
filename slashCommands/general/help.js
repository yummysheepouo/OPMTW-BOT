const {
    ApplicationCommandType,
} = require('discord.js')

module.exports = {
    name: 'help',
    description: '查詢所有指令',
    type: ApplicationCommandType.ChatInput,
    userPerms: [],
    botPerms: [],
    cooldown: 3000,

    async run({
        client,
        interaction
    }) {
        
        interaction.reply({
            embeds: [{
                color: 0x0099ff,
                title: '所有指令',
                description: '最後更新︰2024年12月',
                fields: [
                    {
                        name: '/ur英雄',
                        value: '獲取所有UR英雄/武道家資訊',
        
                    },
                    {
                        name: '/ur怪人',
                        value: '獲取所有UR怪人/懸賞犯資訊',
        
                    },
                    {
                        name: '/ssr_加_英雄',
                        value: '獲取所有SSR+英雄/武道家資訊',
        
                    },
                    {
                        name: '/ssr_加_怪人',
                        value: '獲取所有SSR+怪人/懸賞犯資訊'
                    }
                    
                    
                ]
            }]
        })
    }

}