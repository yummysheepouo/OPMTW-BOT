const { EmbedBuilder, ButtonBuilder, ActionRowBuilder, StringSelectMenuBuilder, ButtonStyle } = require('discord.js')

const homeBtn = new ButtonBuilder().setStyle(ButtonStyle.Primary).setCustomId('home').setLabel('首頁')
const backBtn = new ButtonBuilder().setStyle(ButtonStyle.Success).setCustomId('back').setLabel('上一頁')
const pageBtn = new ButtonBuilder().setStyle(ButtonStyle.Secondary).setCustomId('page').setLabel('1/5').setDisabled(true)
const forwardBtn = new ButtonBuilder().setStyle(ButtonStyle.Success).setCustomId('forward').setLabel('下一頁')
const trashBtn = new ButtonBuilder().setStyle(ButtonStyle.Danger).setCustomId('trash').setLabel('刪除')
const firstPageRow = new ActionRowBuilder().addComponents(homeBtn, new ButtonBuilder().setStyle(ButtonStyle.Success).setCustomId('back').setLabel('上一頁').setDisabled(true), pageBtn, forwardBtn, trashBtn)
const lastPageRow = new ActionRowBuilder().addComponents(homeBtn, backBtn, pageBtn, new ButtonBuilder().setStyle(ButtonStyle.Success).setCustomId('forward').setLabel('下一頁').setDisabled(true), trashBtn)
const row = new ActionRowBuilder().addComponents(homeBtn, backBtn, pageBtn, forwardBtn, trashBtn)

const deleteEmbed = {
    embeds: [
        new EmbedBuilder()
            .setColor('Red')
            .setTitle('一拳超人︰最強之男')
            .setDescription('......正在刪除訊息......')
    ],
    components: []
}




module.exports = {
    deleteEmbed, row, firstPageRow, lastPageRow
}