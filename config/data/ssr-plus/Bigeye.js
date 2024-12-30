const { row, firstPageRow, lastPageRow } = require('./SelectMenu.js')
const { EmbedBuilder } = require('discord.js')

const BigeyeGuide = [{
        embeds: [
            new EmbedBuilder()
            .setAuthor({ name: '【覺醒】大炯眼'})
            .setColor(0xd703fc)
            .setThumbnail('https://github.com/yummysheepouo/OPMTW-BOT/blob/main/img/Bigeye.png?raw=true')
            .setDescription("陣營︰` 超能 | 龍級 ` \n絕技範圍： `全體 `\n角色定位： `怪人支援，沉默附加` \n\n**《普攻》**\n釋放消耗：不消耗\n對已方單體目標恢復150%攻擊力的生命值。\n\n**《絕技》**\n釋放消耗：2點能量\n對全體目標5連擊造成160%攻擊力傷害，有100%機率使主目標和1名隨機目標[沉默]1回合(無法使用絕技，絕技追擊不受影響)。\n\n**《被動》**\n釋放消耗：不消耗\n任意角色行動後若我方支援角色死亡，立即進行1次強度為80%的絕技追擊。自身永久獲得60%非暴擊傷免傷(減傷包括所有類型的傷害，該效果與[靈巧]僅生效一個。\n\n**《覺醒被動》**\n釋放消耗：不消耗\n開場分別為自身和同列隊友召喚1只蠟燭怪人協助戰鬥，繼承大炯眼100%基礎攻擊力(隨從位置衝突時無法召喚)。任意角色行動後，每名蠟燭怪人將有50%的機率追擊非不屈敵人，造成蠟燭怪人150%攻擊力的傷害。蠟燭怪人自身行動滿4次或大炯眼戰敗則自爆，對隨機3名敵人造成蠟燭怪人200%攻擊力的傷害。")
            .setFooter({ text: '只供參考，以遊戲內為實'})

            ],
            components: [
                firstPageRow
            ]
    }, {
        embeds: [
            new EmbedBuilder()
            .setAuthor({ name: '【覺醒】大炯眼'})
            .setColor(0xd703fc)
            .setThumbnail('https://github.com/yummysheepouo/OPMTW-BOT/blob/main/img/Bigeye.png?raw=true')
            .setDescription('**《超．絕技》**\n對全體目標5連擊造成 160%▶️250% 攻擊力傷害，有100%機率使主目標和 1▶️2 名隨機目標[沉默]1回合。\n\n**《極．被動》(5黃星)**\n任意角色行動後若我方支援角色死亡，立即進行1次強度為 80%▶️100% 的絕技追擊。自身永久獲得 60%▶️65% 非暴擊傷免傷。\n\n**《究．被動》(5紫星)**\n任意角色行動後若我方支援角色死亡，立即進行1次強度為 80%▶️120% 的絕技追擊。自身永久獲得 60%▶️70% 非暴擊傷免傷。\n\n**《覺醒被動》等級2**\n開場分別為自身和同列隊友召喚 1▶️2 只蠟燭怪人協助戰鬥，繼承大炯眼100%基礎攻擊力。任意角色行動後，每名蠟燭怪人將有50%的機率追擊非不屈敵人，造成蠟燭怪人150%攻擊力的傷害。蠟燭怪人自身行動滿4次或大炯眼戰敗則自爆，對隨機3名敵人造成蠟燭怪人200%攻擊力的傷害。')
            .setFooter({ text: '只供參考，以遊戲內為實'})
],
            components: [
                lastPageRow
            ]
    }]






module.exports = {
    BigeyeGuide
}