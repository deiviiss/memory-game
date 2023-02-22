import apis from './endPoints'

const getGameRequest = async (gameId) => {
  let url = apis.find(game => game.gameId === parseInt(gameId))?.urlApi

  let allData = []

  for (let i = 0; i < 11; i++) {
    const response = await fetch(url)
    const data = await response.json()

    allData = allData.concat(data.results)
    url = data.info.next
  }

  return allData
}

export { getGameRequest }
