const { row, firstPageRow, lastPageRow } = require('./SelectMenu.js')
const { EmbedBuilder } = require('discord.js')

const HoujieGuide = [{
        embeds: [
            new EmbedBuilder()
            .setAuthor({ name: '【極限】豪傑'})
            .setColor(0xFF0000)
            .setThumbnail('https://github.com/yummysheepouo/OPMTW-BOT/blob/main/img/Houjie.png?raw=true')
            .setDescription("陣營︰` 格鬥 | 龍級 ` \n絕技範圍： `整列 `\n角色定位： `整列突破，承擔傷害` \n\n**《普攻》**\n釋放消耗：不消耗\n對單體目標造成120%攻擊力傷害。\n\n**《絕技》**\n釋放消耗：2點能量\n對整列目標3連擊造成150%攻擊力+42%生命上限傷害，可觸發[突破](立刻取消目標不屈類無視傷害狀態)，每次攻擊每個目標僅觸發1次。\n\n**《被動》**\n釋放消耗：不消耗\n開場時永久提高自身100%生命值上限(不受生命上限增幅效果影響)，並恢復自身50%生命值上限的生命值。每回合前恢復自身50%自身生命值上限的生命。任意角色行動前清除己方1名角色的[眩暈]狀態(每回合至多2次)。\n\n**《覺醒被動》**\n開場時召喚1只三羽烏鴉協助自身進行戰鬥，繼承豪傑400%原生命值的生命。三羽烏鴉為豪傑所在排隊友分擔85%受到的傷害，生命值耗盡後對隨機3名非不屈類效果的敵人造成烏鴉30%生命值上限的額外傷害，並使目標無視傷害狀態持續的行動數-2。")
            .setFooter({ text: '只供參考，以遊戲內為實'})

            ],
            components: [
                firstPageRow
            ]
    }, {
        embeds: [
            new EmbedBuilder()
            .setAuthor({ name: '【極限】豪傑'})
            .setColor(0xFF0000)
            .setThumbnail('https://github.com/yummysheepouo/OPMTW-BOT/blob/main/img/Houjie.png?raw=true')
            .setDescription('**《超．絕技》**\n(新)`提高30%暴擊率和暴擊傷害`，對整列目標3連擊造成 150%▶️180% 攻擊力+ 42%▶️54% 生命上限傷害，可觸發[突破]，每次攻擊每個目標僅觸發1次。\n\n**《極．被動》(5黃星)**\n開場時永久提高自身100%生命值上限，並恢復自身50%生命值上限的生命值。每回合前恢復自身 50%▶️70% 自身生命值上限的生命。任意角色行動前清除己方1名角色的[眩暈]狀態(每回合至多2次)。\n\n**《究．被動》(5紫星)**\n開場時永久提高自身100%生命值上限，並恢復自身50%生命值上限的生命值。每回合前恢復自身 50%▶️90% 自身生命值上限的生命。任意角色行動前清除己方1名角色的[眩暈]狀態(每回合至多 2▶️3 次)\n\n**《覺醒被動》等級2**\n開場時召喚 ▶️2 只三羽烏鴉協助自身進行戰鬥，繼承豪傑400%原生命值的生命。三羽烏鴉為豪傑所在排隊友和(新)`其餘隊友`分擔85%受到的傷害，生命值耗盡後對隨機3名非不屈類效果的敵人造成烏鴉30%生命值上限的額外傷害，並使目標無視傷害狀態持續的行動數-2。')
            .setFooter({ text: '只供參考，以遊戲內為實'})
],
            components: [
                lastPageRow
            ]
    }]






module.exports = {
    HoujieGuide
}