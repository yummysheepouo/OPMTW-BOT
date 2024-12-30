const { row, firstPageRow, lastPageRow } = require('./SelectMenu.js')
const { EmbedBuilder } = require('discord.js')

const MoshanGuide = [{
        embeds: [
            new EmbedBuilder()
            .setAuthor({ name: '怪人化莫山'})
            .setColor(0xFF0000)
            .setThumbnail('https://github.com/yummysheepouo/OPMTW-BOT/blob/main/img/Moshan.png?raw=true')
            .setDescription("陣營︰` 格鬥 | 龍級 ` \n絕技範圍： `整列 `\n角色定位： `蓄力傷害，攻擊壓制，堅韌復活` \n\n**《普攻》**\n釋放消耗：不消耗\n對單體目標2連擊造成120%攻擊力傷害。\n\n**《絕技》**\n釋放消耗：2點能量\n對整列每名敵人造成每層200%攻擊力的蓄力傷害，基礎疊加2層，有40%機率蓄力疊加三層。\n\n**《被動》**\n釋放消耗：不消耗\n任意角色行動前，對隨機3名敵人清除攻擊力增幅效果，怪人化莫山行動後被擊中的目標降低40%攻擊力，持續兩回合。\n\n**《覺醒被動》**\n釋放消耗：不消耗\n自身戰敗後，下回合開始以70%生命值回到戰鬥，效果整場戰鬥僅觸發1次，首次回到戰鬥後使自身堅韌(吸收50%自身生命值的傷害)。")
            .setFooter({ text: '只供參考，以遊戲內為實'})

            ],
            components: [
                firstPageRow
            ]
    }, {
        embeds: [
            new EmbedBuilder()
            .setAuthor({ name: '怪人化莫山'})
            .setColor(0xFF0000)
            .setThumbnail('https://github.com/yummysheepouo/OPMTW-BOT/blob/main/img/Moshan.png?raw=true')
            .setDescription('**《超．絕技》**\n對整列每名敵人造成每層 200%▶️300% 攻擊力的蓄力傷害，(新)`共疊加三層`。\n\n**《極．被動》(5黃星)**\n任意角色行動前，對隨機 3▶️4 名敵人清除攻擊力增幅效果，怪人化莫山行動後被擊中的目標降低 40%▶️45% 攻擊力，持續兩回合。\n\n**《究．被動》(5紫星)**\n任意角色行動前，對隨機 3▶️4 名敵人清除攻擊力增幅效果，怪人化莫山行動後被擊中的目標降低 40%▶️48% 攻擊力，持續兩回合。\n\n**《覺醒被動》等級2**\n自身戰敗後，下回合開始以70%生命值回到戰鬥，效果整場戰鬥僅觸發 1▶️2 次，首次回到戰鬥後使自身堅韌(吸收 50%▶️70% 自身生命值的傷害)。')
            .setFooter({ text: '只供參考，以遊戲內為實'})
],
            components: [
                lastPageRow
            ]
    }]






module.exports = {
    MoshanGuide
}