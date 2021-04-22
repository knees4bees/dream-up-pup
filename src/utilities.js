const capFirstLetter = (word) => {
  const letters = word.split('');
  const capLetter = letters[0].toUpperCase();
  letters[0] = capLetter;
  const result = letters.join('');
  return result;
}

export const cleanBreeds = (rawData) => {
  const data = rawData.message;
  const allBreedsData = Object.keys(data);
  const allBreeds = [];

  allBreedsData.forEach(breed => {
    if (!data[breed].length) {
      allBreeds.push(capFirstLetter(breed));
    } else {
      data[breed].forEach(subbreed => {
        const fullName = `${capFirstLetter(subbreed)} ${capFirstLetter(breed)}`
        allBreeds.push(capFirstLetter(fullName));
      })
    }
  })

  return allBreeds;
}