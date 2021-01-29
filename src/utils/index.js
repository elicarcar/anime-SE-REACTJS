const now = new Date()
export const currentYear = now.getFullYear()
export let season = ''

function getCurrentSeason() {
  if (now < new Date(currentYear, 2, 1)) {
    season = 'winter'
  }

  if (now < new Date(currentYear, 5, 1)) {
    season = 'spring'
  }
  if (now < new Date(currentYear, 8, 1)) {
    season = 'summer'
  }
  if (now < new Date(currentYear, 11, 1)) {
    season = 'fall'
  }

  return (season = 'winter')
}

getCurrentSeason()
