const { row, firstPageRow, lastPageRow } = require('./SelectMenu.js')
const { EmbedBuilder } = require('discord.js')

const MetalKnightGuide = [{
        embeds: [
            new EmbedBuilder()
            .setAuthor({ name: '【改造】金屬騎士'})
            .setColor(0x00bfff)
            .setThumbnail('https://github.com/yummysheepouo/OPMTW-BOT/blob/main/img/MetalKnight.png?raw=true')
            .setDescription("陣營︰` 科技 | S級 ` \n絕技範圍： `全體 `\n角色定位： `範圍眩暈，酸蝕免疲` \n\n**《普攻》**\n釋放消耗：不消耗\n對單體目標4連擊造成120%攻擊力傷害。\n\n**《絕技》**\n釋放消耗：2點能量\n對全體敵人5連擊造成300%攻撃力傷害，當攻擊目標超過3名時，每多1名敵人增加額外100%攻擊力傷害。前5回合有100%機率使主目標及同列敵人[特化眩暈]1回合(無法行動並使攻擊力永久降低30%，一方最多4人同時處於眩暈狀態。\n\n**《被動》**\n釋放消耗：不消耗\n開場使自身及周圍隊友免疫[酸蝕/特化酸蝕]效果，持續5回合。\n\n**《覺醒被動》**\n釋放消耗：不消耗\n開場永久提升45%瞬傷閃避(使直接傷害/額外傷害/蓄力傷害/暴走傷害造成僅1點傷害)。並使敵方全體[連攜追擊]效果無效化，持續整場戰鬥。")
            .setFooter({ text: '只供參考，以遊戲內為實'})

            ],
            components: [
                firstPageRow
            ]
    }, {
        embeds: [
            new EmbedBuilder()
            .setAuthor({ name: '【改造】金屬騎士'})
            .setColor(0x00bfff)
            .setThumbnail('https://github.com/yummysheepouo/OPMTW-BOT/blob/main/img/MetalKnight.png?raw=true')
            .setDescription('**《超．絕技》**\n對全體敵人5連擊造成 300%▶️450% 攻撃力傷害，當攻擊目標超過3名時，每多1名敵人增加額外 100%▶️150% 攻擊力傷害。前5回合有100%機率使主目標及 同列敵人▶️周圍敵人 [特化眩暈]1回合\n\n**《極．被動》(5黃星)**\n開場使自身及周圍隊友 5回合▶️永久 免疫[酸蝕/特化酸蝕]效果。\n\n**《究．被動》(5紫星)**\n開場使 自身及周圍隊友▶️全體隊友 永久免疫[酸蝕/特化酸蝕]效果。\n\n**《覺醒被動》等級2**\n開場永久提升 45%▶️60% 瞬傷閃避。並使敵方全體[連攜追擊]效果無效化，持續整場戰鬥。(新)`任意角色行動後，每名處於[特化眩暈]狀態的敵人可使己方全體獲得金屬騎士100%攻擊力的[特化護體]，每回合3次。')
            .setFooter({ text: '只供參考，以遊戲內為實'})
],
            components: [
                lastPageRow
            ]
    }]






module.exports = {
    MetalKnightGuide
}