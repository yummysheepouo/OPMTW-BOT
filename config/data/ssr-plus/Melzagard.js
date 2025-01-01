const { row, firstPageRow, lastPageRow } = require('./SelectMenu.js')
const { EmbedBuilder } = require('discord.js')

const MelzagardGuide = [{
        embeds: [
            new EmbedBuilder()
            .setAuthor({ name: '【覺醒】梅爾薩加德'})
            .setColor(0xd703fc)
            .setThumbnail('https://github.com/yummysheepouo/OPMTW-BOT/blob/main/img/Melzargard.png?raw=true')
            .setDescription("陣營︰` 超能 | 龍級 ` \n絕技範圍： `全體 `\n角色定位： `護體加成，隊友支援` \n\n**《普攻》**\n釋放消耗：不消耗\n對單體目標2連擊造成120%攻擊力傷害。\n\n**《絕技》**\n釋放消耗：2點能量\n對全體目標4連擊造成48%生命上限傷害，釋放絕技後使1名己方戰敗角色以100%生命值回到戰鬥(整場戰鬥最多觸發4次)。\n\n**《被動》**\n釋放消耗：不消耗\n所在整排行動後可對目標觸發[突破](立即取消目標不屈類無視傷害狀態)，整排永久免疫[沉默]效果。\n\n**《覺醒被動》**\n釋放消耗：不消耗\n開場為我方全體提供50%的護盾率，持續2回合。自身受到致命傷害時觸發[再生](隊友在場時，下次自己行動前可恢復50%的生命值繼續戰鬥，至多觸發2次)。")
            .setFooter({ text: '只供參考，以遊戲內為實'})

            ],
            components: [
                firstPageRow
            ]
    }, {
        embeds: [
            new EmbedBuilder()
            .setAuthor({ name: '【覺醒】梅爾薩加德'})
            .setColor(0xd703fc)
            .setThumbnail('https://github.com/yummysheepouo/OPMTW-BOT/blob/main/img/Melzargard.png?raw=true')
            .setDescription('**《超．絕技》**\n對全體目標4連擊造成 48%▶️64% 生命上限傷害，釋放絕技後使 1▶️2 名己方戰敗角色以100%生命值回到戰鬥(整場戰鬥最多觸發 4▶️6 次)。\n\n**《極．被動》(5黃星)**\n所在整排行動後可對目標觸發[突破]，整排永久免疫(新)`[眩暈/沉默]`效果(免疫不可穿透)。\n\n**《究．被動》(5紫星)**\n(新)`自身及周圍隊友`行動後可對目標觸發[突破]，整排永久免疫[眩暈/沉默]效果(免疫不可穿透)。\n\n**《覺醒被動》等級2**\n開場為我方全體提供 50%▶️70% 的護盾率，持續2回合。自身受到致命傷害時觸發[再生](隊友在場時，下次自己行動前可恢復50%的生命值繼續戰鬥，至多觸發 2▶️3 次)。')
            .setFooter({ text: '只供參考，以遊戲內為實'})
],
            components: [
                lastPageRow
            ]
    }]






module.exports = {
    MelzagardGuide
}