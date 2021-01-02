function findIndex(array, key, id) {
  const findIdx = array.findIndex(item => item[key] === id)
  return findIdx
}

export default findIndex
