const { row, firstPageRow, lastPageRow } = require('./SelectMenu.js')
const { EmbedBuilder } = require('discord.js')

const ChildEmperorGuide = [{
        embeds: [
            new EmbedBuilder()
            .setAuthor({ name: '【改造】童帝'})
            .setColor(0x00bfff)
            .setThumbnail('https://github.com/yummysheepouo/OPMTW-BOT/blob/main/img/Child_Emperor.png?raw=true')
            .setDescription("陣營︰` 科技 | S級 ` \n絕技範圍： `全體 `\n角色定位： `狗狗支援，追擊恢復` \n\n**《普攻》**\n釋放消耗：不消耗\n對單體目標2連擊造成120%攻撃力點傷害。\n\n**《絕技》**\n釋放消耗：2點能量\n對全體敵人5連擊造成250%攻擊力點傷害，並降低目標20%生命值上限持續2回合(生命值溢出部分立刻消減)。\n\n**《被動》**\n釋放消耗：不消耗\n開場為自身及同排隊友增加25%暴擊率持續2回合，並永久免疫[灼燒/力場/受傷/內傷]效果。\n\n**《覺醒被動》**\n釋放消耗：不消耗\n開場時召喚1只狗狗俠協助自身進行戰鬥持續3回合，狗狗俠繼承童帝100%基礎攻擊力。己方行動後狗狗俠對敵方生命百分比最低的目標攻擊造成200%攻擊力的直接傷害，並為己方生命百分比最低的隊友回復25%生命值。")
            .setFooter({ text: '只供參考，以遊戲內為實'})

            ],
            components: [
                firstPageRow
            ]
    }, {
        embeds: [
            new EmbedBuilder()
            .setAuthor({ name: '【改造】童帝'})
            .setColor(0x00bfff)
            .setThumbnail('https://github.com/yummysheepouo/OPMTW-BOT/blob/main/img/Child_Emperor.png?raw=true')
            .setDescription('**《超．絕技》**\n對全體敵人5連擊造成 250%▶️300% 攻擊力點傷害，並降低目標 20%▶️30% 生命值上限持續2回合。\n\n**《極．被動》(5黃星)**\n開場為自身及同排隊友增加 25%▶️30% 暴擊率持續 2▶️3 回合，並永久免疫[灼燒/力場/受傷/內傷]效果。\n\n**《究．被動》(5紫星)**\n開場為自身及同排隊友增加 25%▶️35% 暴擊率持續 2▶️3 回合，並永久免疫[灼燒/力場/受傷/內傷]效果。\n\n**《覺醒被動》等級2**\n開場時召喚 1▶️2 只狗狗俠協助自身進行戰鬥持續3回合，狗狗俠繼承童帝100%基礎攻擊力。己方行動後狗狗俠對敵方生命百分比最低的目標攻擊造成200%攻擊力的直接傷害，並為己方生命百分比最低的隊友回復25%生命值。')
            .setFooter({ text: '只供參考，以遊戲內為實'})
],
            components: [
                lastPageRow
            ]
    }]






module.exports = {
    ChildEmperorGuide
}