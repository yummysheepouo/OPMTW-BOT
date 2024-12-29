const { row, firstPageRow, lastPageRow } = require('./SelectMenu.js')
const { EmbedBuilder } = require('discord.js')

const ZombieManGuide = [{
        embeds: [
            new EmbedBuilder()
            .setAuthor({ name: '【無雙】殭屍男'})
            .setColor(0xf8fc00)
            .setThumbnail('https://github.com/yummysheepouo/OPMTW-BOT/blob/main/img/ZombieMan.png?raw=true')
            .setDescription("陣營︰` 武裝 | S級 ` \n絕技範圍： `整排 `\n角色定位： `同排加速，隊友激勵` \n\n**《普攻》**\n釋放消耗：不消耗\n對單體目標3連擊造成120%攻撃力傷害。\n\n**《絕技》**\n釋放消耗：不消耗\n對整排每名敵人4連擊造成360%攻撃力傷害，使同排隊友[特化加速](速度提高至殭屍男的90%，若隊友自身速度高於增幅後的速度則速度不變)，持續1回合。\n\n**《被動》**\n釋放消耗：不消耗\n開場獲得[特化加速](提高自身20%速度，若主目標速度低於自身，行動後時對主目標造成500%攻擊力的額外傷害)。\n\n**《覺醒被動》**\n釋放消耗：不消耗\n戰鬥開始前殭屍男[激勵]我方(回合開始額外獲得2點能量持續3回合)。自身受到致命傷害時觸發[再生](隊友在場時，下次自己行動前可恢復60%的生命值繼續戰鬥，至多觸發3次)。")
            .setFooter({ text: '只供參考，以遊戲內為實'})

            ],
            components: [
                firstPageRow
            ]
    }, {
        embeds: [
            new EmbedBuilder()
            .setAuthor({ name: '【無雙】殭屍男'})
            .setColor(0xf8fc00)
            .setThumbnail('https://github.com/yummysheepouo/OPMTW-BOT/blob/main/img/ZombieMan.png?raw=true')
            .setDescription('**《超．絕技》**\n超．彈刃迴旋：對整排每名敵人4連擊造成 360%▶️500% 攻撃力傷害，使同排隊友[特化加速](速度提高至殭屍男的 90%▶️95%)，持續1回合。\n\n**《極．被動》(5黃星)**\n開場獲得[特化加速](提高自身 20%▶️25%速度，#)\n\n**《究．被動》(5紫星)**\n開場獲得[特化加速](提高自身 20%▶️30%速度，#)\n\n**《覺醒被動》等級2**\n戰鬥開始前殭屍男[激勵]我方(回合開始額外獲得 2▶️3 點能量持續 3▶️5 回合)。自身受到致命傷害時觸發[再生](隊友在場時，下次自己行動前可恢復60%的生命值繼續戰鬥，至多觸發 3▶️4 次)。')
            .setFooter({ text: '只供參考，以遊戲內為實'})
],
            components: [
                lastPageRow
            ]
    }]






module.exports = {
    ZombieManGuide
}