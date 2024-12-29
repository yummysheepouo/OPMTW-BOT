const { row, firstPageRow, lastPageRow } = require('./SelectMenu.js')
const { EmbedBuilder } = require('discord.js')

const AtomicSamuraiGuide = [{
        embeds: [
            new EmbedBuilder()
            .setAuthor({ name: '【無雙】原子武士'})
            .setColor(0xf8fc00)
            .setThumbnail('https://github.com/yummysheepouo/OPMTW-BOT/blob/main/img/AtomicSamurai.png?raw=true')
            .setDescription("陣營︰` 武裝 | S級 ` \n絕技範圍： `整列 `\n角色定位： `斬斷生命，究極免傷` \n\n**《普攻》**\n釋放消耗：不消耗\n對單體目標造成120%攻撃力傷害。\n\n**《絕技》**\n釋放消耗：2點能量\n對整列目標5連擊造成650%攻撃力傷害，使目標已生效的或下次生效的[特化不屈]無視傷害狀態持續的行動數-2。\n\n**《被動》**\n釋放消耗：不消耗\n自身獲得60%非爆擊傷害免傷(減傷包括所有類型的傷害，該效果與[靈巧]僅生效一個)。任意角色行動後恢復自身10%自身生命值上限的生命。\n\n**《覺醒被動》**\n釋放消耗：不消耗\n主動攻擊時優先對目標生命上限進行自身600%攻擊力的削減(生命上限至多可削減至50%)，並使目標無法受到生命值上限增幅效果影響。行動後擊敗敵人或使敵人不屈/特化不屈時對隨機目標再進行一次強度為80%絕技追擊。")
            .setFooter({ text: '只供參考，以遊戲內為實'})

            ],
            components: [
                firstPageRow
            ]
    }, {
        embeds: [
            new EmbedBuilder()
            .setAuthor({ name: '【無雙】原子武士'})
            .setColor(0xf8fc00)
            .setThumbnail('https://github.com/yummysheepouo/OPMTW-BOT/blob/main/img/AtomicSamurai.png?raw=true')
            .setDescription('**《超．絕技》**\n對整列目標5連擊造成 600%▶️750% 攻撃力傷害，使目標已生效的或下次生效的[特化不屈]無視傷害狀態持續的行動數-2，(新)`並使我方[特化不屈]持續的行動數+1`。\n\n**《極．被動》(5黃星)**\n自身獲得 60%▶️70% 非爆擊傷害免傷。任意角色行動後恢復自身 10%▶️15% 自身生命值上限的生命。\n\n**《究．被動》(5紫星)**\n自身獲得 60%▶️80% 非爆擊傷害免傷。任意角色行動後恢復自身 10%▶️20% 自身生命值上限的生命。\n\n**《覺醒被動》等級2**\n主動攻擊時優先對目標生命上限進行自身600%攻擊力的削減，並使目標無法受到生命值上限增幅效果影響，(新)`永久降低40%攻擊力。行動後對隨機目標再進行一次強度為120%絕技追擊。`')
            .setFooter({ text: '只供參考，以遊戲內為實'})
],
            components: [
                lastPageRow
            ]
    }]






module.exports = {
    AtomicSamuraiGuide
}