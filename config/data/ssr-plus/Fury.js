const { row, firstPageRow, lastPageRow } = require('./SelectMenu.js')
const { EmbedBuilder } = require('discord.js')

const FuryGuide = [{
        embeds: [
            new EmbedBuilder()
            .setAuthor({ name: '【極限】餓狼'})
            .setColor(0xFF0000)
            .setThumbnail('https://github.com/yummysheepouo/OPMTW-BOT/blob/main/img/fury.png?raw=true')
            .setDescription("陣營︰` 格鬥 | 武術家 ` \n絕技範圍： `單體`\n角色定位： `突破不屈，特化護體` \n\n**《普攻》**\n釋放消耗：不消耗\n對單體目標4連擊造成120%攻撃力傷害。\n\n**《絕技》**\n釋放消耗：2點能量\n對單體目標5連擊造成950%攻撃力傷害，若暴擊可觸發[突破](立即取消目標不屈類無視傷害狀態)，每次攻擊僅觸發1次。\n\n**《被動》**\n釋放消耗：不消耗\n任意角色行動後，清除自身[暈眩]狀態。隊友行動後並對隨機1名進入無視傷害狀態的敵人進行強度50%絕技追擊，每回合至多2次。\n\n**《覺醒被動》**\n釋放消耗：不消耗\n開場獲得強度為50%自身生命上限的2次不屈效果，自身不屈類技能次數減少後，獲得800%攻擊力的[特化護體](抵消受到的傷害，此效果覆蓋額外生命類效果，累計抵消量不超過15倍原生命值)。")
            .setFooter({ text: '只供參考，以遊戲內為實'})

            ],
            components: [
                firstPageRow
            ]
    }, {
        embeds: [
            new EmbedBuilder()
            .setAuthor({ name: '【極限】餓狼'})
            .setColor(0xFF0000)
            .setThumbnail('https://github.com/yummysheepouo/OPMTW-BOT/blob/main/img/fury.png?raw=true')
            .setDescription('**《超．絕技》**\n對單體目標5連擊造成 900%▶️1200% 攻撃力傷害，可觸發[突破]，每次攻擊僅觸發1次。(新)`觸發[突破]後，立即恢復自身生命值上限50%生命值`。\n\n**《極．被動》(5黃星)**\n任意角色行動後，清除自身[暈眩]狀態。隊友行動後並對隨機1名進入無視傷害狀態的敵人進行強度 50%▶️60% 絕技追擊，每回合至多2次。\n\n**《究．被動》(5紫星)**\n任意角色行動後，清除自身[暈眩]狀態。隊友行動後並對隨機1名進入無視傷害狀態的敵人進行強度 50%▶️70% 絕技追擊，每回合至多2次。\n\n**《覺醒被動》等級2**\n開場獲得強度為50%自身生命上限的2次不屈效果，自身不屈類技能次數減少後，獲得800%攻擊力的[特化護體]。(新)`任意己方角色[不屈]/[特化不屈]次數耗盡後，獲得600%餓狼攻擊力的[特化護體]，全體至多生效3次。`')
            .setFooter({ text: '只供參考，以遊戲內為實'})
],
            components: [
                lastPageRow
            ]
    }]






module.exports = {
    FuryGuide
}