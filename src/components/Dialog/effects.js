// color, font-size, font-style, box-shadow

const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min)

const getRandomItem = (array) => array[getRandomInt(0, array.length - 1)]

const fontFamilies = ['Indie Flower', 'Bubblegum Sans', 'Monoton', 'Lilita One']
const fontStyles = ['normal', 'normal', 'normal', 'italic']
const fontWeights = [100, 200, 300, 400, 500, 600, 700, 800]
const textShadows = [
  '0 -1px 4px #FFF, 0 -2px 10px #ff0, 0 -10px 20px #ff8000, 0 -18px 40px #F00',
  '0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #49ff18, 0 0 30px #49FF18, 0 0 40px #49FF18, 0 0 55px #49FF18, 0 0 75px #49ff18',
  '-5px 5px 0px #00e6e6',
  '-4px 3px 0 #3a50d9'
]

export const getRandomFontSize = () => {
  const coeff = getRandomInt(3, 20)
  const vhSize = (4 * coeff) / 10

  return `${vhSize}vh`
}

export const getRandomFontFamily = () => getRandomItem(fontFamilies)
export const getRandomFontStyle = () => getRandomItem(fontStyles)
export const getRandomFontWeight = () => getRandomItem(fontWeights)
export const getRandomTextShadow = () => getRandomItem(textShadows)
