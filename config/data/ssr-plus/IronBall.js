const { row, firstPageRow, lastPageRow } = require('./SelectMenu.js')
const { EmbedBuilder } = require('discord.js')

const IronBallGuide = [{
        embeds: [
            new EmbedBuilder()
            .setAuthor({ name: '【無雙】金屬球棒'})
            .setColor(0xf8fc00)
            .setThumbnail('https://github.com/yummysheepouo/OPMTW-BOT/blob/main/img/IronBall.png?raw=true')
            .setDescription("陣營︰` 武裝 | S級 ` \n絕技範圍： `單體 `\n角色定位： `免疫眩暈，連續追擊，特化再生` \n\n**《普攻》**\n釋放消耗：不消耗\n對單體目標3連擊造成150%攻擊力傷害。\n\n**《絕技》**\n釋放消耗：2點能量\n對主目標和2名生命值最低的敵人進行[連續追擊](敵人不足2名時可連擊剩餘敵人)，每名目標受到3連擊造成120%攻擊力傷害，附加自身380%攻擊力的蓄力傷害。\n\n**《被動》**\n釋放消耗：不消耗\n同排隊友永久免疫[暈眩]。2回合後自身免疫[額外傷害]。\n\n**《覺醒被動》**\n釋放消耗：不消耗\n自身受到致命傷害後[再生](下次自己行動前或己方隊友全部戰敗時可恢復40%的生命值繼續戰鬥，至多觸發3次)。觸發[再生]後對生命值最低的1名敵人進行[連續追擊](絕技的傷害和效果)。")
            .setFooter({ text: '只供參考，以遊戲內為實'})

            ],
            components: [
                firstPageRow
            ]
    }, {
        embeds: [
            new EmbedBuilder()
            .setAuthor({ name: '【無雙】金屬球棒'})
            .setColor(0xf8fc00)
            .setThumbnail('https://github.com/yummysheepouo/OPMTW-BOT/blob/main/img/IronBall.png?raw=true')
            .setDescription('**《超．絕技》**\n對主目標和 2▶️3 名生命值最低的敵人進行[連續追擊](敵人不足 2▶️3 名時可連擊剩餘敵人)，每名目標受到3連擊造成 120%▶️150%攻擊力傷害，附加自身 380%▶️420% 攻擊力的蓄力傷害，(新)`每次連擊可恢復自身12%生命上限的生命值`。\n\n**《極．被動》(5黃星)**\n自身及同排隊友永久免疫[暈眩]。2▶️1回合後自身免疫[額外傷害]。\n\n**《究．被動》(5紫星)**\n自身及同排隊友永久免疫[暈眩]。1回合後▶️永久自身免疫[額外傷害]。\n\n**《覺醒被動》等級2**\n自身受到致命傷害後[再生](下次自己行動前或己方隊友全部戰敗時可恢復 40%▶️70% 的生命值繼續戰鬥，至多觸發 3▶️4 次)。觸發[再生]後對生命值最低的 1▶️3 名敵人進行[連續追擊]。')
            .setFooter({ text: '只供參考，以遊戲內為實'})
],
            components: [
                lastPageRow
            ]
    }]






module.exports = {
    IronBallGuide
}