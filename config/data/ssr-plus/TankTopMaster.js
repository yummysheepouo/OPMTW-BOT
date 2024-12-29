const { row, firstPageRow, lastPageRow } = require('./SelectMenu.js')
const { EmbedBuilder } = require('discord.js')

const TankTopMasterGuide = [{
        embeds: [
            new EmbedBuilder()
            .setAuthor({ name: '【極限】背心大師'})
            .setColor(0xFF0000)
            .setThumbnail('https://github.com/yummysheepouo/OPMTW-BOT/blob/main/img/TankTopMaster.png?raw=true')
            .setDescription("陣營︰` 格鬥 | S級 ` \n絕技範圍： `整列 `\n角色定位： `突破不屈，傷害反彈` \n\n**《普攻》**\n釋放消耗：不消耗\n對單體目標2連擊造成120%攻擊力傷害。\n\n**《絕技》**\n釋放消耗：2點能量\n對整列目標5連擊造成110%生命上限傷害，可觸發[突破](立刻取消目標不屈類無視傷害狀態)，每次攻擊每個目標僅觸發1次。\n\n**《被動》**\n釋放消耗：不消耗\n開場獲得180%生命值的[特化護體](抵消受到的傷害，此效果覆蓋額外生命類效果，累計抵消量不超過15倍原生命值)，回合開始清除敵方全體的傷害分擔效果。受到傷害或戰敗後反彈51%受到的傷害給隨機4名敵人(包括特化護體和自身生命的消耗，同類效果整場戰鬥僅生效一個)。\n\n**《覺醒被動》**\n釋放消耗：不消耗\n開場時召喚背心猛虎協助自身進行戰鬥，繼承背心大師30%原生命值的攻擊。己方行動後背心猛虎以100%攻擊力隨機追擊1名敵人，優先追擊進入無視傷害狀態的敵人且可觸發[突破](立即取消目標不屈類無視傷害狀態)，並恢復背心大師20%生命上限的[特化護體]。")
            .setFooter({ text: '只供參考，以遊戲內為實'})

            ],
            components: [
                firstPageRow
            ]
    }, {
        embeds: [
            new EmbedBuilder()
            .setAuthor({ name: '【極限】背心大師'})
            .setColor(0xFF0000)
            .setThumbnail('https://github.com/yummysheepouo/OPMTW-BOT/blob/main/img/TankTopMaster.png?raw=true')
            .setDescription('**《超．絕技》**\n對整列目標5連擊造成 110%▶️140% 生命上限傷害，可觸發[突破]，每次攻擊每個目標僅觸發1次。\n\n**《極．被動》(5黃星)**\n開場獲得 180%▶️200% 生命值的[特化護體]，回合開始清除敵方全體的傷害分擔效果。受到傷害或戰敗後反彈51%受到的傷害給 隨機4名敵人▶️全體敵人。\n\n**《究．被動》(5紫星)**\n開場獲得 180%▶️230% 生命值的[特化護體]，回合開始清除敵方全體的傷害分擔效果。受到傷害或戰敗後反彈 51%▶️61% 受到的傷害給 隨機4名敵人▶️全體敵人。\n\n**《覺醒被動》等級2**\n開場時召喚背心猛虎和 (新)`背心黑洞` 協助自身進行戰鬥，繼承背心大師30%原生命值的攻擊。己方行動後`背心猛虎和背心黑洞`以100%攻擊力隨機追擊1名敵人，優先追擊進入無視傷害狀態的敵人且可觸發[突破]，並恢復背心大師20%生命上限的[特化護體]。')
            .setFooter({ text: '只供參考，以遊戲內為實'})
],
            components: [
                lastPageRow
            ]
    }]






module.exports = {
    TankTopMasterGuide
}