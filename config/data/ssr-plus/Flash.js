const { row, firstPageRow, lastPageRow } = require('./SelectMenu.js')
const { EmbedBuilder } = require('discord.js')

const FlashGuide = [{
        embeds: [
            new EmbedBuilder()
            .setAuthor({ name: '【無雙】閃光弗拉休'})
            .setColor(0xf8fc00)
            .setThumbnail('https://github.com/yummysheepouo/OPMTW-BOT/blob/main/img/Flash.png?raw=true')
            .setDescription("陣營︰` 武裝 | S級 ` \n絕技範圍： `全體 `\n角色定位： `特化加速，閃避反擊` \n\n**《普攻》**\n釋放消耗：不消耗\n對單體目標3連擊造成120%攻撃力傷害。\n\n**《絕技》**\n釋放消耗：不消耗\n對全體敵人5連擊造成120%攻撃力傷害，使同列隊友[特化加速](速度提高至閃光弗拉休的90%，若隊友自身速度高於增幅後的速度則速度不變)，持續1回合。扣除敵人1點能量(每回合僅能扣除一次，扣除成功後同回合不能在使敵人[恐慌])。\n\n**《被動》**\n釋放消耗：不消耗\n開場獲得[特化加速](提高自身5%速度，若主目標速度低於自身，行動後時對主目標造成300%攻擊力的額外傷害)。任一角色行動後，清除敵方的普通加速效果。\n\n**《覺醒被動》**\n釋放消耗：不消耗\n開場永久提升自身70%瞬傷閃避(使直接傷害/額外傷害/蓄力傷害/暴走傷害造成僅1點傷害)。任一角色行動後，若閃光弗拉休觸發了閃避，對隨機1名非不屈類效果的敵人追加400%攻擊力的額外傷害(每回合生效3次)。")
            .setFooter({ text: '只供參考，以遊戲內為實'})

            ],
            components: [
                firstPageRow
            ]
    }, {
        embeds: [
            new EmbedBuilder()
            .setAuthor({ name: '【無雙】閃光弗拉休'})
            .setColor(0xf8fc00)
            .setThumbnail('https://github.com/yummysheepouo/OPMTW-BOT/blob/main/img/Flash.png?raw=true')
            .setDescription('**《超．絕技》**\n對全體敵人5連擊造成 120%▶️150% 攻撃力傷害，使同列隊友[特化加速](速度提高至閃光弗拉休的 90%▶️95%)，持續1回合。扣除敵人 1▶️3 點能量。\n\n**《極．被動》(5黃星)**\n開場獲得[特化加速](提高自身 5%▶️20% 速度， # )。任一角色行動後，清除敵方的普通加速效果。\n\n**《究．被動》(5紫星)**\n開場獲得[特化加速](提高自身 5%▶️25% 速度， # )。任一角色行動後，清除敵方的普通加速效果\n\n**《覺醒被動》等級2**\n開場永久提升自身70%瞬傷閃避，(新)`使同列隊友獲得50%瞬傷閃避`。任一角色行動後，若閃光弗拉休觸發了閃避，對隨機1名非不屈類效果的敵人追加400%攻擊力的額外傷害，(新)`並回復150%攻擊力的生命值`(每回合生效 3▶️4 次)。')
            .setFooter({ text: '只供參考，以遊戲內為實'})
],
            components: [
                lastPageRow
            ]
    }]






module.exports = {
    FlashGuide
}