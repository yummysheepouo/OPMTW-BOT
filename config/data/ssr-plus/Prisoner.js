const { row, firstPageRow, lastPageRow } = require('./SelectMenu.js')
const { EmbedBuilder } = require('discord.js')

const PrisonerGuide = [{
    embeds: [
        new EmbedBuilder()
        .setAuthor({ name: '【極限】水嫩嫩囚犯'})
        .setColor(0xFF0000)
        .setThumbnail('https://github.com/yummysheepouo/OPMTW-BOT/blob/main/img/Prisoner.png?raw=true')
        .setDescription("陣營︰` 格鬥 | S級 ` \n絕技範圍： `單體`\n角色定位： `後排魅惑，持續抵抗` \n\n**《普攻》**\n釋放消耗：不消耗\n對己方單體目標恢復120%攻擊力生命。\n\n**《絕技》**\n釋放消耗：2點能量\n對後排單體2連擊造成750%攻擊力傷害。使主目標[魅惑](目標立刻脫戰，並用部份絕技和被動效果對隨機敵方進行攻擊，自身行動回合結束後歸位)。\n\n**《被動》**\n釋放消耗：不消耗\n開場後敵方全體降低40%持續傷害，持續整場戰鬥。自身免疫魅惑。\n\n**《覺醒被動》**\n釋放消耗：不消耗\n提高自身及同排隊友30%非暴擊免傷持續3回合。行動後使目標整列永久[傷殘](無法追擊，連續追擊和連攜追擊)。")
        .setFooter({ text: '只供參考，以遊戲內為實'})

        ],
            components: [
                firstPageRow
            ]
    }, {
        embeds: [
            new EmbedBuilder()
            .setAuthor({ name: '【極限】水嫩嫩囚犯'})
            .setColor(0xFF0000)
            .setThumbnail('https://github.com/yummysheepouo/OPMTW-BOT/blob/main/img/Prisoner.png?raw=true')
            .setDescription('**《超．絕技》**\n對後排單體2連擊造成 750%▶️900% 攻擊力傷害。使主目標[魅惑]。(新)`並有100%機率使目標整列[暈眩]持續1回合`。\n\n**《極．被動》(5黃星)**\n開場後敵方全體降低 40%▶️50% 持續傷害，持續整場戰鬥。自身免疫魅惑。\n\n**《究．被動》(5紫星)**\n開場後敵方全體降低 40%▶️60% 持續傷害，持續整場戰鬥。自身免疫魅惑。\n\n**《覺醒被動》等級2**\n提高自身及同排隊友 30%▶️40% 非暴擊免傷持續3回合。行動後使目標整列永久[傷殘]。')
            .setFooter({ text: '只供參考，以遊戲內為實'})
],
            components: [
                lastPageRow
            ]
    }]






module.exports = {
    PrisonerGuide
}