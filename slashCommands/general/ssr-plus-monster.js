const { EmbedBuilder, ApplicationCommandType, ComponentType, ActionRowBuilder, StringSelectMenuBuilder, ApplicationCommandOptionType } = require('discord.js');
const embed = require('../../config/data/ssr-plus/SelectMenu.js')
const { pageToEmbed } = require('../../config/util/util.js')

module.exports = {
    name: 'ssr-plus-monster',
    description: '獲取SSR+怪人/懸賞犯資訊',
    type: ApplicationCommandType.ChatInput,
    userPerms: [],
    botPerms: [],
    languageAutoComplete: true,
    options: [{
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


        const language = interaction.options.getString('language') || '中文'
        const guideMainPages = [{
            embeds: [
                new EmbedBuilder()
                    .setColor('Aqua')
                    .setTitle('SSR+英怪人/懸賞犯清單')
                    .setDescription('請在下方選擇你想查詢的SSR+怪人/懸賞犯')
                
            ],
  
            components: [
                new ActionRowBuilder()
                    .addComponents(
                        new StringSelectMenuBuilder()
                            .setCustomId('guide')
                            .setPlaceholder('沒有已選擇的怪人(點我選擇)')
                        .addOptions(
                            {
                                label: '怪人化莫山',
                                description: "點擊查看怪人化莫山的詳細資料",
                                value: "Moshan",
                                emoji: "<:ssr_plus:1322556525105123379>",
                            },
                            {
                                label: '【覺醒】波羅斯',
                                description: "點擊查看【覺醒】波羅斯的詳細資料",
                                value: "Boros",
                                emoji: "<:ssr_plus:1322556525105123379>",
                            },
                            {
                                label: '【極限】阿修羅獨角仙',
                                description: "點擊查看【極限】阿修羅獨角仙的詳細資料",
                                value: "Ashura",
                                emoji: "<:ssr_plus:1322556525105123379>",
                            },
                            {
                                label: '【覺醒】格流剛許普',
                                description: "點擊查看【覺醒】格流剛許普的詳細資料",
                                value: "Geryuganshoop",
                                emoji: "<:ssr_plus:1322556525105123379>",
                            },
                            {
                                label: '【極限】豪傑',
                                description: "點擊查看【極限】豪傑的詳細資料",
                                value: "Houjie",
                                emoji: "<:ssr_plus:1322556525105123379>",
                            },
                            {
                                label: '【覺醒】大炯眼',
                                description: "點擊查看【覺醒】大炯眼的詳細資料",
                                value: "Bigeye",
                                emoji: "<:ssr_plus:1322556525105123379>",
                            },
                            {
                                label: '【極限】深海王',
                                description: "點擊查看【極限】深海王的詳細資料",
                                value: "DeepSeaKing",
                                emoji: "<:ssr_plus:1322556525105123379>",
                            },
                            

                            
                        
                            
                    ),)
            ]
        }]

        function guideMainPage(language) {
            switch (language) {
                case '中文':
                    return guideMainPages[0]
            }
        }

        const msg = await interaction.reply(guideMainPage(language))

        const collector = msg.createMessageComponentCollector({
            idle:
                240000
        });

        let page = -1
        let guide;
        let trashed = false;

        collector.on('collect', async (value) => {
            await value.deferUpdate()

            if (value.user.id !== interaction.user.id) {
                return value.followUp({
                    content: '只有此指令使用者可以操作',
                    ephemeral: true
                })
            }

            if (value.componentType === ComponentType.Button) {

                if (value.customId === 'home') {
                    if (page === 0) {
                        interaction.editReply(guideMainPage(language))
                        page = -1
                    } else {
                        page = 0
                        interaction.editReply(guideMainPage(language))
                    }
                }

                if (value.customId === 'trash') {
                    page = 0
                    trashed = true;
                    collector.stop()
                    await interaction.editReply(embed.deleteEmbed)
                    return await interaction.deleteReply()
                }
                if (value.customId === 'forward') {
                    page++
                    interaction.editReply(pageToEmbed(page, guide, language))
                }

                if (value.customId === 'back') {
                    page--
                    interaction.editReply(pageToEmbed(page, guide, language))
                }
 
            }

            if (value.componentType === ComponentType.StringSelect) {

                switch (value.values[0]) {
                        case 'Moshan':
                        guide = 'Moshan'
                        page = 0;
                        interaction.editReply(pageToEmbed(page, guide, language))
                        break;
                        case 'Boros':
                        guide = 'Boros'
                        page = 0;
                        interaction.editReply(pageToEmbed(page, guide, language))
                        break;
                        case 'Ashura':
                        guide = 'Ashura'
                        page = 0;
                        interaction.editReply(pageToEmbed(page, guide, language))
                        break;
                        case 'Geryuganshoop':
                        guide = 'Geryuganshoop'
                        page = 0;
                        interaction.editReply(pageToEmbed(page, guide, language))
                        break;
                        case 'Houjie':
                        guide = 'Houjie'
                        page = 0;
                        interaction.editReply(pageToEmbed(page, guide, language))
                        break;
                        case 'Bigeye':
                        guide = 'Bigeye'
                        page = 0;
                        interaction.editReply(pageToEmbed(page, guide, language))
                        break;
                        case 'DeepSeaKing':
                        guide = 'DeepSeaKing'
                        page = 0;
                        interaction.editReply(pageToEmbed(page, guide, language))
                        break;
                        
                        
                        
                }
            }
        })

        collector.on('end', async () => {
            if (trashed === true) return;
            return interaction.editReply({
                components: []
            })
        })

    }
}

