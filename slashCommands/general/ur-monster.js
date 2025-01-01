const {
    ApplicationCommandOptionType,
    ApplicationCommandType,
    EmbedBuilder
} = require('discord.js')
const {
    languages,
} = require('../../config/util/util.js')
const {
    ur_monster,
} = require('../../config/data/ur-monster.js')

module.exports = {
    name: 'ur怪人',
    description: '獲取UR怪人/懸賞犯資訊',
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
            name: '音速索尼克',
            value: '0'
        }, {
            name: 'G4',
            value: '1'
        }, {
            name: '波羅斯',
            value: '2'
        }, {
            name: '疾風溫德',
            value: '3'
        }, {
            name: '梅爾薩加德',
            value: '4'
        },
        {
            name: '業火弗雷姆',
            value: '5'
        },
        {
            name: '豪傑',
            value: '6'
        },
        {
            name: '蚊女',
            value: '7'
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
                    returned = ur_monster[index]
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