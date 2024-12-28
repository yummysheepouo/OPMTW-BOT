
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
      case 'English':
        switch (guide) {
          case 'weaponRarity':
            if (page === 0) {
              weapon.EnglishWeaponGuide[0].components[0].components[2].data.label = '0/4'
              return weapon.EnglishWeaponGuide[0]
            }
            weapon.EnglishWeaponGuide[1][page - 1].components[0].components[2].data.label = `${page}/4`
            return weapon.EnglishWeaponGuide[1][page - 1]
          case 'weaponElement':
            if (page === 0) {
              weapon.EnglishWeaponGuide[0].components[0].components[2].data.label = '0/5'
              return weapon.EnglishWeaponGuide[0]
            }
            weapon.EnglishWeaponGuide[2][page - 1].components[0].components[2].data.label = `5`
            return weapon.EnglishWeaponGuide[2][page - 1]
          case 'ninja':
            ninja.EnglishNinjaGuide[page].components[0].components[2].data.label = `${page}/7`
            return ninja.EnglishNinjaGuide[page]
          case 'relics':
            relics.EnglishRelicsGuide[page].components[0].components[2].data.label = `${page}/7`
            return relics.EnglishRelicsGuide[page]
          case '3v3':
            pvp.English3v3Guide[page].components[0].components[2].data.label = `${page}/1`
            return pvp.English3v3Guide[page]
          case 'bounties':
            bounties.EnglishBountiesGuide[page].components[0].components[2].data.label = `${page}/1`
            return bounties.EnglishBountiesGuide[page]
          case 'clans':
            clans.EnglishClanGuide[page].components[0].components[2].data.label = `${page}/1`
            return clans.EnglishClanGuide[page]
        }
    }
  },


}