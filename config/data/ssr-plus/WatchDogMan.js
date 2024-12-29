const { row, firstPageRow, lastPageRow } = require('./SelectMenu.js')
const { EmbedBuilder } = require('discord.js')

const WatchDogManGuide = [{
    embeds: [
        new EmbedBuilder()
        .setAuthor({ name: '【極限】守門犬俠'})
        .setColor(0xFF0000)
        .setThumbnail('https://github.com/yummysheepouo/OPMTW-BOT/blob/main/img/DogMan.png?raw=true')
        .setDescription("陣營︰` 格鬥 | S級 ` \n絕技範圍： `單體`\n角色定位： `戰術連擊，同列傷殘` \n\n**《普攻》**\n釋放消耗：對單體目標5連擊造成120%攻擊力傷害。\n\n**《絕技》**\n釋放消耗：2點能量\n對單體目標進行戰術連擊，每次造成150%攻擊力傷害。基礎4次，戰鬥開始自身每擁有1層特化護體增加1次，最多增加到13次，造成1950%攻擊力傷害。\n\n**《被動》**\n釋放消耗：不消耗\n行動最後一擊使目標所在整列永久[傷殘](無法追擊，連續追擊和連攜追擊)。開場提高自身20%暴擊率，持續3回合。\n\n**《覺醒被動》**\n釋放消耗：不消耗\n開場永久提升自身70%瞬傷閃避(使直接傷害/額外傷害/蓄力傷害/暴走傷害造成僅1點傷害)。任意角色行動後，若守護犬俠觸發了閃避，則戰術連擊次數+1。")
        .setFooter({ text: '只供參考，以遊戲內為實'})

        ],
            components: [
                firstPageRow
            ]
    }, {
        embeds: [
            new EmbedBuilder()
            .setAuthor({ name: '【極限】守門犬俠'})
            .setColor(0xFF0000)
            .setThumbnail('https://github.com/yummysheepouo/OPMTW-BOT/blob/main/img/DogMan.png?raw=true')
            .setDescription('**《超．絕技》**\n對單體目標進行戰術連擊，每次造成 150%▶️180% 攻擊力傷害。基礎4次，戰鬥開始自身每擁有1層特化護體增加1次，最多增加到13次，造成 1950%▶️2340% 攻擊力傷害。\n\n**《極．被動》(5黃星)**\n行動最後一擊使 目標所在整列▶️目標及周圍 永久[傷殘]。開場提高自身20%暴擊率，持續3回合。\n\n**《究．被動》(5紫星)**\n行動最後一擊使 目標所在整列▶️目標及周圍 永久[傷殘]。開場提高自身20%暴擊率，持續 3▶️5 回合。\n\n**《覺醒被動》等級2**\n開場永久提升自身70%瞬傷閃避。任意角色行動後，若守護犬俠觸發了閃避，則戰術連擊次數+1，(新)`並提高自身30%攻擊力1回合。`')
            .setFooter({ text: '只供參考，以遊戲內為實'})
],
            components: [
                lastPageRow
            ]
    }]






module.exports = {
    WatchDogManGuide
}