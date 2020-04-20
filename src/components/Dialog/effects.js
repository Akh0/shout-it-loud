// color, font-size, font-style, box-shadow

const getRandomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min)

const getRandomItem = (array) => array[getRandomInt(0, array.length - 1)]

const fontStyles = ['normal', 'normal', 'normal', 'italic']
const fontWeights = [100, 200, 300, 400, 500, 600, 700, 800]
const textShadows = [
  '0 -1px 4px #FFF, 0 -2px 10px #ff0, 0 -10px 20px #ff8000, 0 -18px 40px #F00',
  '1px -1px 0 #767676, -1px 2px 1px #737272, -2px 4px 1px #767474, -3px 6px 1px #787777, -4px 8px 1px #7b7a7a, -5px 10px 1px #7f7d7d, -6px 12px 1px #828181, -7px 14px 1px #868585, -8px 16px 1px #8b8a89, -9px 18px 1px #8f8e8d, -10px 20px 1px #949392, -11px 22px 1px #999897, -12px 24px 1px #9e9c9c, -13px 26px 1px #a3a1a1, -14px 28px 1px #a8a6a6, -15px 30px 1px #adabab, -16px 32px 1px #b2b1b0, -17px 34px 1px #b7b6b5, -18px 36px 1px #bcbbba, -19px 38px 1px #c1bfbf, -20px 40px 1px #c6c4c4, -21px 42px 1px #cbc9c8, -22px 44px 1px #cfcdcd, -23px 46px 1px #d4d2d1, -24px 48px 1px #d8d6d5, -25px 50px 1px #dbdad9, -26px 52px 1px #dfdddc, -27px 54px 1px #e2e0df, -28px 56px 1px #e4e3e2',
  '0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #49ff18, 0 0 30px #49FF18, 0 0 40px #49FF18, 0 0 55px #49FF18, 0 0 75px #49ff18',
  '-5px 5px 0px #00e6e6, -10px 10px 0px #01cccc, -15px 15px 0px #00bdbd',
  '-4px 3px 0 #3a50d9, -14px 7px 0 #0a0e27'
]

export const getRandomFontSize = () => {
  const coeff = getRandomInt(3, 20)
  const vhSize = (4 * coeff) / 10

  return `${vhSize}vh`
}

export const getRandomFontStyle = () => getRandomItem(fontStyles)
export const getRandomFontWeight = () => getRandomItem(fontWeights)
export const getRandomTextShadow = () => getRandomItem(textShadows)
