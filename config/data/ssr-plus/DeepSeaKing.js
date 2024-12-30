const { row, firstPageRow, lastPageRow } = require('./SelectMenu.js')
const { EmbedBuilder } = require('discord.js')

const DeepSeaKingGuide = [{
        embeds: [
            new EmbedBuilder()
            .setAuthor({ name: '【極限】深海王'})
            .setColor(0xFF0000)
            .setThumbnail('https://github.com/yummysheepouo/OPMTW-BOT/blob/main/img/DeepSeaKing.png?raw=true')
            .setDescription("陣營︰` 格鬥 | 鬼級 ` \n絕技範圍： `單體 `\n角色定位： `特化酸蝕，同列追擊` \n\n**《普攻》**\n釋放消耗：不消耗\n對單體目標造成100%攻擊力傷害。50%機率使目標[特化酸蝕](100%攻擊力的持續傷害，生效1次後消失，任意角色行動後轉移至可受到傷害的目標)。\n\n**《絕技》**\n釋放消耗：2點能量\n對單體目標5連擊造成1050%攻擊力傷害，可觸發[突破](立刻取消目標不屈類無視傷害狀態)，每次攻擊每個目標僅觸發1次。75%機率使主目標及周圍[特化酸蝕](100%攻擊力的持續傷害，生效3次後消失，任意角色行動後轉移至可受到傷害的目標)，並使自身獲得450%攻擊力的[特化護體](抵消受到的傷害，此效果覆蓋額外生命類效果，累計抵消量不超過15倍原生命值)。\n\n**《被動》**\n釋放消耗：不消耗\n當敵人受到持續傷害時，立刻吸收持續傷害的60%對敵方全體造成額外傷害(同類效果整場戰鬥內僅生效一個)。\n\n**《覺醒被動》**\n使處於[特化酸蝕]的敵人[黏著](無法追擊和連續追擊)，持續2回合。隊友行動後，深海王有60%機率對敵方隨機目標[連攜追擊](自身與同列隊友用傷害類絕技合擊)，每回合至多1次。")
            .setFooter({ text: '只供參考，以遊戲內為實'})

            ],
            components: [
                firstPageRow
            ]
    }, {
        embeds: [
            new EmbedBuilder()
            .setAuthor({ name: '【極限】深海王'})
            .setColor(0xFF0000)
            .setThumbnail('https://github.com/yummysheepouo/OPMTW-BOT/blob/main/img/DeepSeaKing.png?raw=true')
            .setDescription('**《超．絕技》**\n對單體目標5連擊造成 1050%▶️1300% 攻擊力傷害，可觸發[突破]，每次攻擊每個目標僅觸發1次。75%▶️90% 機率使主目標及周圍[特化酸蝕]，並使自身獲得 450%▶️600% 攻擊力的[特化護體]。\n\n**《極．被動》(5黃星)**\n當敵人受到持續傷害時，立刻吸收持續傷害的 60%▶️80% 對敵方全體造成額外傷害。\n\n**《究．被動》(5紫星)**\n當敵人受到持續傷害時，立刻吸收持續傷害的 60%▶️86% 對敵方全體造成額外傷害。\n\n**《覺醒被動》等級2**\n使處於[特化酸蝕]的敵人[黏著](無法追擊和連續追擊)，持續2回合。隊友行動後，深海王有 60%▶️70% 機率對敵方隨機目標[連攜追擊](自身與同列隊友用傷害類絕技合擊)，每回合至多 1▶️2 次。')
            .setFooter({ text: '只供參考，以遊戲內為實'})
],
            components: [
                lastPageRow
            ]
    }]






module.exports = {
    DeepSeaKingGuide
}