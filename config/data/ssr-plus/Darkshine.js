const { row, firstPageRow, lastPageRow } = require('./SelectMenu.js')
const { EmbedBuilder } = require('discord.js')

const DarkshineGuide = [{
        embeds: [
            new EmbedBuilder()
            .setAuthor({ name: '【極限】超合金黑光'})
            .setColor(0xFF0000)
            .setThumbnail('https://github.com/yummysheepouo/OPMTW-BOT/blob/main/img/Darkshine.png?raw=true')
            .setDescription("陣營︰` 格鬥 | S級 ` \n絕技範圍： `整排 `\n角色定位： `護盾強化，群體反傷` \n\n**《普攻》**\n釋放消耗：不消耗\n對單體目標造成120%攻擊力傷害。\n\n**《絕技》**\n釋放消耗：2點能量\n對整排目標4連擊造成120%生命值上限傷害，並獲得150%生命值上限的[特化護體]。\n\n**《被動》**\n釋放消耗：不消耗\n開場為我方全體提供55%的護盾率，持續3回合。受到致命傷害後，會以自身最大生命的20%復活(至多2次)。\n\n**《覺醒被動》**\n釋放消耗：不消耗\n開場使己方全體[特化反傷](受到直接傷害和額外傷害時減免40%，並將原傷害量的40%以額外傷害返回給攻擊者)持續整場戰鬥。")
            .setFooter({ text: '只供參考，以遊戲內為實'})

            ],
            components: [
                firstPageRow
            ]
    }, {
        embeds: [
            new EmbedBuilder()
            .setAuthor({ name: '【極限】超合金黑光'})
            .setColor(0xFF0000)
            .setThumbnail('https://github.com/yummysheepouo/OPMTW-BOT/blob/main/img/Darkshine.png?raw=true')
            .setDescription('**《超．絕技》**\n對整排目標4連擊造成 120%▶️160% 生命值上限傷害，並使自身及同排獲得 150%▶️200% 生命值上限的[特化護體]。\n\n**《極．被動》(5黃星)**\n開場為我方全體提供 55%▶️65% 的護盾率，持續 3▶️4 回合。受到致命傷害後，會以自身最大生命的20%復活(至多 2▶️3 次)。\n\n**《究．被動》(5紫星)**\n開場為我方全體提供 55%▶️75% 的護盾率，持續 3▶️5 回合。受到致命傷害後，會以自身最大生命的20%復活(至多 2▶️3 次)。\n\n**《覺醒被動》等級2**\n開場使己方全體[特化反傷](受到直接傷害和額外傷害時減免 40%▶️60% ，並將原傷害量的 40%▶️60% 以額外傷害返回給攻擊者)持續整場戰鬥。(新)`並使己方全體[特化暴走](行動時首段攻擊附帶超合金黑光50%生命值上限的可暴擊暴走傷害，暴走傷害每命中1名敵人消耗己方150點戰意值)，持續整場戰鬥`。')
            .setFooter({ text: '只供參考，以遊戲內為實'})
],
            components: [
                lastPageRow
            ]
    }]






module.exports = {
    DarkshineGuide
}