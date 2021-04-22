export const getBreeds = () => {
  return fetch('https://dog.ceo/api/breeds/list/all')
}

export const getBreedImages = (breed) => {
  return fetch(`https://dog.ceo/api/breed/${breed}/images/random/3`)
}

export const getSubbreedImages = (breed, subbreed) => {
  return fetch(`https://dog.ceo/api/breed/${breed}/${subbreed}/images/random/3`)
}