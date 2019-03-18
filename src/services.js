import PcBuildsData from './app/PcBuildsData'

export function getCardsFromStorage() {
  return getFromStorage('cards') || PcBuildsData
}

export function saveCardsToStorage(cards) {
  saveToStorage('cards', cards)
}

export function saveToStorage(name, data) {
  const dataString = JSON.stringify(data)
  localStorage.setItem(name, dataString)
}

export function getFromStorage(name) {
  const dataString = localStorage.getItem(name)
  try {
    return JSON.parse(dataString)
  } catch (error) {
    console.error(error.message)
  }
}
