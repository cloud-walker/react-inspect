export const und = undefined
export const nil = null
export const num = 666
export const str = 'cawabongaaa!'
export const fun = a => {
  const b = 2

  console.log('foooooo')
  return a + b
}
const obj = {und, nil, num, str, fun}
export const arr = Object.values(obj)

obj.arr = arr
obj.obj = Object.assign({}, obj)

export default obj
