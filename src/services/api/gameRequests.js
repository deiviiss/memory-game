import apis from './endPoints'

const getGameRequest = async (gameId) => {
  let url = apis.find(game => game.gameId === parseInt(gameId))?.urlApi

  let allData = []

  for (let i = 0; i < 11; i++) {
    const response = await fetch(url)
    const data = await response.json()

    allData = allData.concat(data.results)

    if (data.info) {
      url = data.info.next
    } else {
      url = data.next
    }
  }

  return allData
}

export { getGameRequest }
