function thisItemExist(array, id) {
  const findIdx = array.findIndex(item => item.idMeal === id)
  return findIdx
}

export default thisItemExist