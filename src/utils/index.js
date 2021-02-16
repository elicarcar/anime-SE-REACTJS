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

export const fetchAnimeInfo = async (url, id, path = '') => {
  try {
    const data = await fetch(`${url}/${id}/${path}`)
    return data
  } catch (error) {
    return error
  }
}

export const fetchAll = (urls) => {
  // Promise.all(urls.map((u) => fetch(u))).then((res) => {
  //   console.log(res)
  // })
  Promise.all(urls)
    .then((responses) => {
      Promise.all(responses.map((r) => fetch(r)))
    })
    .then((data) => console.log(data))
}
