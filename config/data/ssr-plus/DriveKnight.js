const { row, firstPageRow, lastPageRow } = require('./SelectMenu.js')
const { EmbedBuilder } = require('discord.js')

const DriveKnightGuide = [{
        embeds: [
            new EmbedBuilder()
            .setAuthor({ name: '【改造】驅動騎士'})
            .setColor(0x00bfff)
            .setThumbnail('https://github.com/yummysheepouo/OPMTW-BOT/blob/main/img/DriveKnight.png?raw=true')
            .setDescription("陣營︰` 科技 | S級 ` \n絕技範圍： `整列 `\n角色定位： `特化護體，科技核心` \n\n**《普攻》**\n對單體目標造成120%攻擊力傷害。\n\n**《絕技》**\n釋放消耗：不消耗\n對整列目標2連擊造成300%攻擊力傷害，並降低敵方全體30%傷害率1回合。\n\n**《被動》**\n釋放消耗：不消耗\n任意角色行動後[突破]2名進入不屈類無視傷害狀態的目標，並追加200%攻擊力的額外傷害。開場獲得60%瞬傷閃避(使直接傷害/額外傷害/蓄力傷害/暴走傷害造成僅1點傷害)，持續2回合。\n\n**《核心》**\n__【初級效果】__\n啟動條件：`上陣1名武裝系，1名格門系，1名科技系。`\n驅動之力(等級1)：毎回合可獲得3點能量\n\n__【高級效果】__\n啟動條件：`上陣1名武裝系，1名格門系，1名科技系，1名超能系。`\n驅動之力．初：登場時己方全體獲得600%原生命值上限的[特化護體](抵消受到的傷害，此效果覆蓋額外生命類效果，累計抵消量不超過15倍原生命值，同類效果可疊加)。")
            .setFooter({ text: '只供參考，以遊戲內為實'})

            ],
            components: [
                firstPageRow
            ]
    }, {
        embeds: [
            new EmbedBuilder()
            .setAuthor({ name: '【改造】驅動騎士'})
            .setColor(0x00bfff)
            .setThumbnail('https://github.com/yummysheepouo/OPMTW-BOT/blob/main/img/DriveKnight.png?raw=true')
            .setDescription('**《超．絕技》**\n對整列目標2連擊造成 300%▶️450% 攻擊力傷害，並降低敵方全體 30%▶️50% 傷害率1回合。\n\n**《極．被動》(5黃星)**\n任意角色行動後[突破] 2▶️3 名進入不屈類無視傷害狀態的目標，並追加200%攻擊力的額外傷害。開場獲得 60%▶️65% 瞬傷閃避，持續2回合。\n\n**《究．被動》(5紫星)**\n任意角色行動後[突破] 2▶️3 名進入不屈類無視傷害狀態的目標，並追加 200%▶️300% 攻擊力的額外傷害。開場獲得 60%▶️70% 瞬傷閃避，持續2回合。\n\n**《核心》**\n__【初級效果】__\n\n__驅動之力(等級2)__：毎回合可獲得3點能量。隊友行動後觸發爆擊可獲得1點能量，每回合觸發1次。\n__驅動之力(等級3)__：毎回合可獲得3點能量。隊友行動後觸發爆擊可獲得1點能量，每回合觸發2次。\n\n__【高級效果】__\n\n__驅動之力．極__：登場時己方全體獲得650%原生命值上限的[特化護體]。\n__驅動之力．特__：登場時己方全體獲得700%原生命值上限的[特化護體]\n__驅動之力．激變__：登場時己方全體獲得750%原生命值上限的[特化護體]')
            .setFooter({ text: '只供參考，以遊戲內為實'})
],
            components: [
                lastPageRow
            ]
    }]






module.exports = {
    DriveKnightGuide
}