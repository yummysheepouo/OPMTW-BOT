
const ChildEmperor = require('../data/ssr-plus/ChildEmperor.js')
const IronBall = require('../data/ssr-plus/IronBall.js')
const King = require('../data/ssr-plus/King.js')
const BangGu = require('../data/ssr-plus/BangGu.js')
const AtomicSamurai = require('../data/ssr-plus/AtomicSamurai.js')
const Fury = require('../data/ssr-plus/Fury.js')
const Flash = require('../data/ssr-plus/Flash.js')
const TankTopMaster = require('../data/ssr-plus/TankTopMaster.js')
const DriveKnight = require('../data/ssr-plus/DriveKnight.js')
const WatchDogMan = require('../data/ssr-plus/WatchDogMan.js')
const ZombieMan = require('../data/ssr-plus/ZombieMan.js')
const Prisoner = require('../data/ssr-plus/Prisoner.js')
const MetalKnight = require('../data/ssr-plus/MetalKnight.js')
const Darkshine = require('../data/ssr-plus/Darkshine.js')
const Moshan = require('../data/ssr-plus/Moshan.js')
const Boros = require('../data/ssr-plus/Boros.js')
const Ashura = require('../data/ssr-plus/Ashura.js')
const Geryuganshoop = require('../data/ssr-plus/Geryuganshoop.js')
const Houjie = require('../data/ssr-plus/Houjie.js')
const Bigeye = require('../data/ssr-plus/Bigeye.js')
const DeepSeaKing = require('../data/ssr-plus/DeepSeaKing.js')
const Melzagard = require('../data/ssr-plus/Melzagard.js')
const Goribas = require('../data/ssr-plus/Goribas.js')

const languages = [
  '中文'
]

module.exports = {
  languages,
  disableButtons(components) {
    for (let x = 0; x < components.length; x++) {
      for (let y = 0; y < components[x].components.length; y++) {
        components[x].components[y] = ButtonBuilder.from(components[x].components[y]);
        components[x].components[y].setDisabled(true);
      }
    }
    return components;
  },
  pageToEmbed(page, guide, language) {
    switch (language) {
      case '中文':
        switch (guide) { 
                
            case 'ChildEmperor':
            ChildEmperor.ChildEmperorGuide[page].components[0].components[2].data.label = `${page}/1`
            return ChildEmperor.ChildEmperorGuide[page]
            case 'IronBall':
            IronBall.IronBallGuide[page].components[0].components[2].data.label = `${page}/1`
            return IronBall.IronBallGuide[page]
            case 'King':
            King.KingGuide[page].components[0].components[2].data.label = `${page}/1`
            return King.KingGuide[page]
            case 'BangGu':
            BangGu.BangGuGuide[page].components[0].components[2].data.label = `${page}/1`
            return BangGu.BangGuGuide[page]
            case 'AtomicSamurai':
            AtomicSamurai.AtomicSamuraiGuide[page].components[0].components[2].data.label = `${page}/1`
            return AtomicSamurai.AtomicSamuraiGuide[page]
            case 'Fury':
            Fury.FuryGuide[page].components[0].components[2].data.label = `${page}/1`
            return Fury.FuryGuide[page]
            case 'Flash':
            Flash.FlashGuide[page].components[0].components[2].data.label = `${page}/1`
            return Flash.FlashGuide[page]
            case 'TankTopMaster':
            TankTopMaster.TankTopMasterGuide[page].components[0].components[2].data.label = `${page}/1`
            return TankTopMaster.TankTopMasterGuide[page]
            case 'DriveKnight':
            DriveKnight.DriveKnightGuide[page].components[0].components[2].data.label = `${page}/1`
            return DriveKnight.DriveKnightGuide[page]
            case 'WatchDogMan':
            WatchDogMan.WatchDogManGuide[page].components[0].components[2].data.label = `${page}/1`
            return WatchDogMan.WatchDogManGuide[page]
            case 'ZombieMan':
            ZombieMan.ZombieManGuide[page].components[0].components[2].data.label = `${page}/1`
            return ZombieMan.ZombieManGuide[page]
            case 'Prisoner':
            Prisoner.PrisonerGuide[page].components[0].components[2].data.label = `${page}/1`
            return Prisoner.PrisonerGuide[page]
            case 'MetalKnight':
            MetalKnight.MetalKnightGuide[page].components[0].components[2].data.label = `${page}/1`
            return MetalKnight.MetalKnightGuide[page]
            case 'Darkshine':
            Darkshine.DarkshineGuide[page].components[0].components[2].data.label = `${page}/1`
            return Darkshine.DarkshineGuide[page]
            case 'Moshan':
            Moshan.MoshanGuide[page].components[0].components[2].data.label = `${page}/1`
            return Moshan.MoshanGuide[page]
            case 'Boros':
            Boros.BorosGuide[page].components[0].components[2].data.label = `${page}/1`
            return Boros.BorosGuide[page]
            case 'Ashura':
            Ashura.AshuraGuide[page].components[0].components[2].data.label = `${page}/1`
            return Ashura.AshuraGuide[page]
            case 'Geryuganshoop':
            Geryuganshoop.GeryuganshoopGuide[page].components[0].components[2].data.label = `${page}/1`
            return Geryuganshoop.GeryuganshoopGuide[page]
            case 'Houjie':
            Houjie.HoujieGuide[page].components[0].components[2].data.label = `${page}/1`
            return Houjie.HoujieGuide[page]
            case 'Bigeye':
            Bigeye.BigeyeGuide[page].components[0].components[2].data.label = `${page}/1`
            return Bigeye.BigeyeGuide[page]
            case 'DeepSeaKing':
            DeepSeaKing.DeepSeaKingGuide[page].components[0].components[2].data.label = `${page}/1`
            return DeepSeaKing.DeepSeaKingGuide[page]
            case 'Melzagard':
            Melzagard.MelzagardGuide[page].components[0].components[2].data.label = `${page}/1`
            return Melzagard.MelzagardGuide[page]
            case 'Goribas':
            Goribas.GoribasGuide[page].components[0].components[2].data.label = `${page}/1`
            return Goribas.GoribasGuide[page]
            
            


            




        }
            
    }
  },


}