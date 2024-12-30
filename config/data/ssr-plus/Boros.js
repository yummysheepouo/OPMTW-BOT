const { row, firstPageRow, lastPageRow } = require('./SelectMenu.js')
const { EmbedBuilder } = require('discord.js')

const BorosGuide = [{
        embeds: [
            new EmbedBuilder()
            .setAuthor({ name: '【覺醒】波羅斯'})
            .setColor(0xd703fc)
            .setThumbnail('https://github.com/yummysheepouo/OPMTW-BOT/blob/main/img/Boros.png?raw=true')
            .setDescription("陣營︰` 超能 | 龍級 ` \n絕技範圍： `整列 `\n角色定位： `無視不屈，治療吸收，承擔傷害` \n\n**《普攻》**\n釋放消耗：不消耗\n對單體目標2連擊造成140%攻擊力傷害。\n\n**《絕技》**\n釋放消耗：2點能量\n對整列每名敵人5連擊造成目標數均攤的1300%攻擊力傷害，若目標觸發[不屈]，則無視該目標1次[不屈]效果。\n\n**《被動》**\n釋放消耗：不消耗\n隊友恢復生命時，波羅斯就會恢復對應60%的生命值，每回合最多觸發6次。\n\n**《覺醒被動》**\n釋放消耗：不消耗\n開場時召喚1名暗黑盜賊團員協助自身進行戰鬥，團員繼承波羅斯1800%基礎攻擊力的生命值。暗黑盜賊團員為波羅斯所在排隊友分擔80%受到的全類型傷害(不包括紋章技攻擊及反傷效果)，生命值耗盡後對隨機3名敵人造成團員30%生命值上限的額外傷害。")
            .setFooter({ text: '只供參考，以遊戲內為實'})

            ],
            components: [
                firstPageRow
            ]
    }, {
        embeds: [
            new EmbedBuilder()
            .setAuthor({ name: '【覺醒】波羅斯'})
            .setColor(0xd703fc)
            .setThumbnail('https://github.com/yummysheepouo/OPMTW-BOT/blob/main/img/Boros.png?raw=true')
            .setDescription('**《超．絕技》**\n對整列每名敵人5連擊造成目標數均攤的 1300%▶️1500% 攻擊力傷害，若目標觸發[不屈]，則無視該目標1次[不屈]效果，(新)`本次攻擊提高40%爆擊傷害`。\n\n**《極．被動》(5黃星)**\n隊友恢復生命時，波羅斯就會恢復對應 60%▶️80% 的生命值，每回合最多觸發 6▶️7 次。\n\n**《究．被動》(5紫星)**\n隊友恢復生命時，波羅斯就會恢復對應 60%▶️85% 的生命值，每回合最多觸發 6▶️8 次。\n\n**《覺醒被動》等級2**\n開場時召喚 1▶️2 名暗黑盜賊團員協助自身進行戰鬥，團員繼承波羅斯1800%基礎攻擊力的生命值。2名暗黑盜賊團員分別為波羅斯所在排隊友、(新)`其餘全部隊友`分擔80%受到的全類型傷害(#)，生命值耗盡後對隨機3名敵人造成團員30%生命值上限的額外傷害。')
            .setFooter({ text: '只供參考，以遊戲內為實'})
],
            components: [
                lastPageRow
            ]
    }]






module.exports = {
    BorosGuide
}