const { row, firstPageRow, lastPageRow } = require('./SelectMenu.js')
const { EmbedBuilder } = require('discord.js')

const BangGuGuide = [{
        embeds: [
            new EmbedBuilder()
            .setAuthor({ name: '【極限】銀色獠牙'})
            .setColor(0xFF0000)
            .setThumbnail('https://github.com/yummysheepouo/OPMTW-BOT/blob/main/img/BangGu.png?raw=true')
            .setDescription("陣營︰` 格鬥 | S級 ` \n絕技範圍： `全體 `\n角色定位： `瞬傷閃避，合擊支援` \n\n**《普攻》**\n釋放消耗：不消耗\n對單體目標2連擊造成120%攻撃力傷害，並觸發合擊。\n\n**《絕技》**\n釋放消耗：2點能量\n對全體目標5連擊造成300%攻撃力傷害，有100%機率使隨機3名目標[內傷](被撃時追加銀色獠牙200%攻擊力的內傷傷害，觸發後效果消失)，並觸發合擊。\n\n**《被動》**\n釋放消耗：不消耗\n前2回合，自身行動後扣除敵方處於封鎖狀態的能量(每回合僅能扣除一次)。開場永久提升自身30%瞬傷閃避(使直接傷害/額外傷害/蓄力傷害/暴走傷害造成僅1點傷害)。\n\n**《覺醒被動》**\n釋放消耗：不消耗\n銀色獠牙攻擊時[崩普]會以相同技能類型對敵方目標進行[合擊]。普攻對隨機單體目標造成100%攻擊力的傷害，絕技對全體目標3連擊造成180%攻擊力的傷害(攻擊力與銀色獠牙相同)。")
            .setFooter({ text: '只供參考，以遊戲內為實'})

            ],
            components: [
                firstPageRow
            ]
    }, {
        embeds: [
            new EmbedBuilder()
            .setAuthor({ name: '【極限】銀色獠牙'})
            .setColor(0xFF0000)
            .setThumbnail('https://github.com/yummysheepouo/OPMTW-BOT/blob/main/img/BangGu.png?raw=true')
            .setDescription('**《超．絕技》**\n對全體目標5連擊造成 300%▶️350% 攻撃力傷害，有100%機率使 隨機3名▶️全體 目標[內傷](被撃時追加銀色獠牙 200▶️250% 攻擊力的內傷傷害，觸發後效果消失)，並觸發合擊。\n\n**《極．被動》(5黃星)**\n前 2▶️3 回合，自身行動後扣除敵方處於封鎖狀態的能量。開場永久提升自身 30%▶️40% 瞬傷閃避\n\n**《究．被動》(5紫星)**\n前 2▶️4 回合，自身行動後扣除敵方處於封鎖狀態的能量。開場永久提升自身 30%▶️50% 瞬傷閃避\n\n**《覺醒被動》等級2**\n銀色獠牙攻擊時[崩普]會以相同技能類型對敵方目標進行[合擊]。普攻對隨機單體目標造成100%攻擊力的傷害，絕技對全體目標3連擊造成 180%▶️210% 攻擊力的傷害。(新)`以絕技攻擊時每有1名目標處於[內傷]狀態，則扣除敵方250點戰意`。')
            .setFooter({ text: '只供參考，以遊戲內為實'})
],
            components: [
                lastPageRow
            ]
    }]






module.exports = {
    BangGuGuide
}