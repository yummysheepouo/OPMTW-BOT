const { row, firstPageRow, lastPageRow } = require('./SelectMenu.js')
const { EmbedBuilder } = require('discord.js')

const KingGuide = [{
        embeds: [
            new EmbedBuilder()
            .setAuthor({ name: '【覺醒】KING'})
            .setColor(0xd703fc)
            .setThumbnail('https://github.com/yummysheepouo/OPMTW-BOT/blob/main/img/King.png?raw=true')
            .setDescription("陣營︰` 超能 | S級 ` \n絕技範圍： `全體 `\n角色定位： `能量封鎖，強韌消除` \n\n**《普攻》**\n釋放消耗：不消耗\n使己方單體目標恢復150%攻撃力的生命值。\n\n**《絕技》**\n釋放消耗：不消耗\n使敵人陷入[恐慌](封鎖2點能量1回合，同效果存在時按最高值生效)。將生命上限最高3名敵人的[強韌/堅韌]效果降級為60%的[堅韌]效果，並恢復己方生命比例最低的2名隊友300%攻擊力的生命值。\n\n**《被動》**\n釋放消耗：不消耗\n開場將同排隊友的速度提高至KING90%(若隊友自身速度高於增幅後的速度則速度不變)。\n\n**《覺醒被動》**\n釋放消耗：不消耗\n登場時無人機協助進行戰鬥(攻擊力和生命值分別為KING100%及800%的基礎攻擊力)。無人機為KING承擔90%受到的全類型傷害(不包括紋章技攻擊及反傷效果)直至生命值低於1%。任意角色行動後無人機對敵方隨機1名目標攻擊造成350%攻擊力的傷害，每回合最多2次。")
            .setFooter({ text: '只供參考，以遊戲內為實'})

            ],
            components: [
                firstPageRow
            ]
    }, {
        embeds: [
            new EmbedBuilder()
            .setAuthor({ name: '【覺醒】KING'})
            .setColor(0xd703fc)
            .setThumbnail('https://github.com/yummysheepouo/OPMTW-BOT/blob/main/img/King.png?raw=true')
            .setDescription('**《超．絕技》**\n使敵人陷入[恐慌](封鎖 2▶️3 點能量1回合)。將全體敵方的[強韌/堅韌]效果降級為 60%▶️50% 的[堅韌]效果，並恢復己方生命比例最低的 2▶️4 名隊友 150%▶️300% 攻擊力的生命值。\n\n**《極．被動》(5黃星)**\n(新)`開場提高自身16%速度`，並將同排隊友的速度提高至KING90%\n\n**《究．被動》(5紫星)**\n開場提高自身20%速度，並將同排隊友的速度提高至KING 90%▶️95%。\n\n**《覺醒被動》等級2**\n登場時 1▶️2 架無人機協助進行戰鬥。無人機為KING承擔90%受到的全類型傷害直至生命值低於1%。任意角色行動後無人機對敵方隨機1名目標攻擊造成350%攻擊力的傷害，每回合最多2次。')
            .setFooter({ text: '只供參考，以遊戲內為實'})
],
            components: [
                lastPageRow
            ]
    }]






module.exports = {
    KingGuide
}