const { EmbedBuilder, ApplicationCommandType, ComponentType, ActionRowBuilder, StringSelectMenuBuilder, ApplicationCommandOptionType } = require('discord.js');
const embed = require('../../config/data/ssr-plus/SelectMenu.js')
const { pageToEmbed } = require('../../config/util/util.js')

module.exports = {
    name: 'ssr-plus-hero',
    description: '獲取SSR+英雄/武道家資訊',
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
                    .setTitle('SSR+英雄/武道家清單')
                    .setDescription('請在下方選擇你想查詢的SSR+英雄/武道家')
                
            ],
  
            components: [
                new ActionRowBuilder()
                    .addComponents(
                        new StringSelectMenuBuilder()
                            .setCustomId('guide')
                            .setPlaceholder('沒有已選擇的英雄(點我選擇)')
                        .addOptions(
                            {
                                label: '【改造】童帝',
                                description: "點擊查看【改造】童帝的詳細資料",
                                value: "ChildEmperor",
                                emoji: "<:ssr_plus:1322556525105123379>",
                            },
                            {
                                label: '【無雙】金屬球棒',
                                description: "點擊查看【無雙】金屬球棒的詳細資料",
                                value: "IronBall",
                                emoji: "<:ssr_plus:1322556525105123379>",
                            },
                            {
                                label: '【覺醒】KING',
                                description: "點擊查看【覺醒】KING的詳細資料",
                                value: "King",
                                emoji: "<:ssr_plus:1322556525105123379>",
                            },
                            {
                                label: '【極限】銀色獠牙',
                                description: "點擊查看【極限】銀色獠牙的詳細資料",
                                value: "BangGu",
                                emoji: "<:ssr_plus:1322556525105123379>",
                            },
                            {
                                label: '【無雙】原子武士',
                                description: "點擊查看【無雙】原子武士的詳細資料",
                                value: "AtomicSamurai",
                                emoji: "<:ssr_plus:1322556525105123379>",
                            },
                            {
                                label: '【極限】餓狼',
                                description: "點擊查看【極限】餓狼的詳細資料",
                                value: "Fury",
                                emoji: "<:ssr_plus:1322556525105123379>",
                            },
                            {
                                label: '【無雙】閃光弗拉休',
                                description: "點擊查看【無雙】閃光弗拉休的詳細資料",
                                value: "Flash",
                                emoji: "<:ssr_plus:1322556525105123379>",
                            },
                            {
                                label: '【極限】背心大師',
                                description: "點擊查看【極限】背心大師的詳細資料",
                                value: "TankTopMaster",
                                emoji: "<:ssr_plus:1322556525105123379>",
                            },
                            {
                                label: '【改造】驅動騎士',
                                description: "點擊查看【改造】驅動騎士的詳細資料",
                                value: "DriveKnight",
                                emoji: "<:ssr_plus:1322556525105123379>",
                            },
                            {
                                label: '【極限】守門犬俠',
                                description: "點擊查看【極限】守門犬俠的詳細資料",
                                value: "WatchDogMan",
                                emoji: "<:ssr_plus:1322556525105123379>",
                            },
                            {
                                label: '【無雙】殭屍男',
                                description: "點擊查看【無雙】殭屍男的詳細資料",
                                value: "ZombieMan",
                                emoji: "<:ssr_plus:1322556525105123379>",
                            },
                            {
                                label: '【極限】水嫩嫩囚犯',
                                description: "點擊查看【極限】水嫩嫩囚犯的詳細資料",
                                value: "Prisoner",
                                emoji: "<:ssr_plus:1322556525105123379>",
                            },
                            {
                                label: '【改造】金屬騎士',
                                description: "點擊查看【改造】金屬騎士的詳細資料",
                                value: "MetalKnight",
                                emoji: "<:ssr_plus:1322556525105123379>",
                            },
                            {
                                label: '【極限】超合金黑光',
                                description: "點擊查看【極限】超合金黑光的詳細資料",
                                value: "Darkshine",
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
                        case 'ChildEmperor':
                        guide = 'ChildEmperor'
                        page = 0;
                        interaction.editReply(pageToEmbed(page, guide, language))
                        break;
                        case 'IronBall':
                        guide = 'IronBall'
                        page = 0;
                        interaction.editReply(pageToEmbed(page, guide, language))
                        break;
                        case 'King':
                        guide = 'King'
                        page = 0;
                        interaction.editReply(pageToEmbed(page, guide, language))
                        break;
                        case 'BangGu':
                        guide = 'BangGu'
                        page = 0;
                        interaction.editReply(pageToEmbed(page, guide, language))
                        break;
                        case 'AtomicSamurai':
                        guide = 'AtomicSamurai'
                        page = 0;
                        interaction.editReply(pageToEmbed(page, guide, language))
                        break;
                        case 'Fury':
                        guide = 'Fury'
                        page = 0;
                        interaction.editReply(pageToEmbed(page, guide, language))
                        break;
                        case 'Flash':
                        guide = 'Flash'
                        page = 0;
                        interaction.editReply(pageToEmbed(page, guide, language))
                        break;
                        case 'TankTopMaster':
                        guide = 'TankTopMaster'
                        page = 0;
                        interaction.editReply(pageToEmbed(page, guide, language))
                        break;
                        case 'DriveKnight':
                        guide = 'DriveKnight'
                        page = 0;
                        interaction.editReply(pageToEmbed(page, guide, language))
                        break;
                        case 'WatchDogMan':
                        guide = 'WatchDogMan'
                        page = 0;
                        interaction.editReply(pageToEmbed(page, guide, language))
                        break;
                        case 'ZombieMan':
                        guide = 'ZombieMan'
                        page = 0;
                        interaction.editReply(pageToEmbed(page, guide, language))
                        break;
                        case 'Prisoner':
                        guide = 'Prisoner'
                        page = 0;
                        interaction.editReply(pageToEmbed(page, guide, language))
                        break;
                        case 'MetalKnight':
                        guide = 'MetalKnight'
                        page = 0;
                        interaction.editReply(pageToEmbed(page, guide, language))
                        break;
                        case 'Darkshine':
                        guide = 'Darkshine'
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

