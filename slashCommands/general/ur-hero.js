const {
    ApplicationCommandOptionType,
    ApplicationCommandType,
    EmbedBuilder
} = require('discord.js')
const {
    languages,
} = require('../../config/util/util.js')
const {
    ur_hero,
} = require('../../config/data/ur-hero.js')

module.exports = {
    name: 'ur英雄',
    description: '獲取UR英雄/武道家資訊',
    type: ApplicationCommandType.ChatInput,
    userPerms: [],
    botPerms: [],
    languageAutoComplete: true,
    cooldown: 3000,
    options: [{
        name: '角色',
        description: '選擇想要查詢的角色',
        required: true,
        autoComplete: true,
        type: ApplicationCommandOptionType.String,
        choices: [{
            name: '戰慄的龍卷',
            value: '0'
        }, {
            name: '水龍',
            value: '1'
        }, {
            name: '金屬球棒',
            value: '2'
        }, {
            name: '崩普',
            value: '3'
        }, {
            name: 'KING',
            value: '4'
        },
        {
            name: '原子武士',
            value: '5'
        },
        {
            name: '傑諾斯',
            value: '6'
        },
        {
            name: '閃光弗拉休',
            value: '7'
        },
        {
            name: '童帝',
            value: '8'
        },
        {
            name: '殭屍俠',
            value: '9'
        },


    ]
    }, {
        name: 'language',
        description: '選擇語言',
        required: false,
        autocomplete: true,
        type: ApplicationCommandOptionType.String,
    }],

    async run({
        client,
        interaction
    }) {

        const weapon = interaction.options.getString('角色')
        const language = interaction.options.getString('language') || '中文'

        if(!languages.includes(language)) return interaction.reply({
            content: `抱歉目前並不支援 \`${language}\`。`,
            ephemeral: true
        })

        function languageDecode(language, index) {
            index = Number(index)
            let returned;
            switch(language) {
                case '中文':
                    returned = ur_hero[index]
                    break;
                
            }
            return returned;
        }

        await interaction.reply({
            embeds: [
                languageDecode(language, weapon)
            ]
        })


    }

}