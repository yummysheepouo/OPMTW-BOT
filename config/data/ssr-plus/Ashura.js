const { row, firstPageRow, lastPageRow } = require('./SelectMenu.js')
const { EmbedBuilder } = require('discord.js')

const AshuraGuide = [{
        embeds: [
            new EmbedBuilder()
            .setAuthor({ name: '【極限】阿修羅獨角仙'})
            .setColor(0xFF0000)
            .setThumbnail('https://github.com/yummysheepouo/OPMTW-BOT/blob/main/img/Ashura.png?raw=true')
            .setDescription("陣營︰` 格鬥 | 龍級 ` \n絕技範圍： `單體 `\n角色定位： `失控追擊，傷害反彈` \n\n**《普攻》**\n釋放消耗：不消耗\n對單體目標5連擊造成25%生命值上限傷害。\n\n**《絕技》**\n釋放消耗：2點能量\n對單體目標3連擊造成100%攻擊力傷害，並附加35%生命值上限的蓄力傷害，釋放後本回合內失控，對行動後的敵人進行[絕技追擊](絕技的100%傷害及效果無消耗追擊，每回合最多2次)。\n\n**《被動》**\n釋放消耗：不消耗\n受到傷害或戰敗後反彈50%受到的傷害給隨機4名敵人(包括所有堅韌類效果和自身生命的消耗)。\n\n**《覺醒被動》**\n釋放消耗：不消耗\n開場時永久提高自身25%生命值上限，使自身生命值上限增幅效果提高至4倍，並恢復自身50%生命值上限的生命值。")
            .setFooter({ text: '只供參考，以遊戲內為實'})

            ],
            components: [
                firstPageRow
            ]
    }, {
        embeds: [
            new EmbedBuilder()
            .setAuthor({ name: '【極限】阿修羅獨角仙'})
            .setColor(0xFF0000)
            .setThumbnail('https://github.com/yummysheepouo/OPMTW-BOT/blob/main/img/Ashura.png?raw=true')
            .setDescription('**《超．絕技》**\n對單體目標3連擊造成100%攻擊力傷害，並附加 35%▶️45% 生命值上限的蓄力傷害，釋放後本回合內失控，對行動後的敵人進行[絕技追擊](#)，(新)`並進行持續1回的自我治療(上限為35%自身生命上限)`。\n\n**《極．被動》(5黃星)**\n受到傷害或戰敗後反彈50%受到的傷害給 隨機4名敵人▶️全體敵人\n\n**《究．被動》(5紫星)**\n受到傷害或戰敗後反彈 50%▶️60% 受到的傷害給 隨機4名敵人▶️全體敵人\n\n**《覺醒被動》等級2**\n開場時永久提高自身 25%▶️30% 生命值上限，使自身生命值上限增幅效果提高至4倍，並恢復自身50%生命值上限的生命值。(新)`自身戰敗後，下回合開始以70%生命值回到戰鬥，該效果整場戰鬥僅觸發一次`。')
            .setFooter({ text: '只供參考，以遊戲內為實'})
],
            components: [
                lastPageRow
            ]
    }]






module.exports = {
    AshuraGuide
}