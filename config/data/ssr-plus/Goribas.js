const { row, firstPageRow, lastPageRow } = require('./SelectMenu.js')
const { EmbedBuilder } = require('discord.js')

const GoribasGuide = [{
        embeds: [
            new EmbedBuilder()
            .setAuthor({ name: '【覺醒】葛羅里巴斯'})
            .setColor(0xd703fc)
            .setThumbnail('https://github.com/yummysheepouo/OPMTW-BOT/blob/main/img/Groribas.png?raw=true')
            .setDescription("陣營︰` 超能 | 龍級 ` \n絕技範圍： `全體 `\n角色定位： `特化反傷，酸蝕附著` \n\n**《普攻》**\n釋放消耗：不消耗\n對單體目標2連擊造成120%攻擊力傷害。\n\n**《絕技》**\n釋放消耗：2點能量\n對全體敵人5連擊造成250%攻擊力傷害。有100%機率使主目標及周圍[特化酸蝕](120%攻擊力的持續傷害，生效5次後消失，任意角色行動後轉移至可受到傷害的目標)。並使敵方全體的反彈額外傷害無效化，持續整場戰鬥。\n\n**《被動》**\n釋放消耗：不消耗\n當敵人受到持續傷害時，立刻吸收持續傷害的60%對敵方全體造成額外傷害(同類效果整場戰鬥內僅生效一個)。使處於[特化酸蝕]的敵人[黏著](無法追擊和連續追擊)，持續2回合。\n\n**《覺醒被動》**\n釋放消耗：不消耗\n開場使自身[特化反傷](受到直接傷害和額外傷害時減免50%，並將原傷害量的50%以額外傷害返回給攻擊者)持續整場戰鬥。任意角色行動後吸收敵方受到持續傷害的100%回復自身[特化護體]。")
            .setFooter({ text: '只供參考，以遊戲內為實'})

            ],
            components: [
                firstPageRow
            ]
    }, {
        embeds: [
            new EmbedBuilder()
            .setAuthor({ name: '【覺醒】葛羅里巴斯'})
            .setColor(0xd703fc)
            .setThumbnail('https://github.com/yummysheepouo/OPMTW-BOT/blob/main/img/Groribas.png?raw=true')
            .setDescription('**《超．絕技》**\n對全體敵人5連擊造成 250%▶️400% 攻擊力傷害。有100%機率使 主目標及周圍▶️全體敵人 [特化酸蝕](120%▶️180% 攻擊力的持續傷害，#)。並使敵方全體的反彈額外傷害無效化，持續整場戰鬥。\n\n**《極．被動》(5黃星)**\n當敵人受到持續傷害時，立刻吸收持續傷害的 60%▶️70% 對敵方全體造成額外傷害。使處於[特化酸蝕]的敵人[黏著](無法追擊和連續追擊)，持續2回合。\n\n**《究．被動》(5紫星)**\n當敵人受到持續傷害時，立刻吸收持續傷害的 60%▶️80% 對敵方全體造成額外傷害。使處於[特化酸蝕]的敵人[黏著](無法追擊和連續追擊)，持續2回合。\n\n**《覺醒被動》等級2**\n開場使自身[特化反傷](受到直接傷害和額外傷害時減免50%，並將原傷害量的50%以額外傷害返回給攻擊者)持續整場戰鬥。任意角色行動後吸收敵方受到持續傷害的100%回復(新)`自身及同列隊友`[特化護體]。')
            .setFooter({ text: '只供參考，以遊戲內為實'})
],
            components: [
                lastPageRow
            ]
    }]






module.exports = {
    GoribasGuide
}