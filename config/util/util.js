
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
            




        }
            
    }
  },


}