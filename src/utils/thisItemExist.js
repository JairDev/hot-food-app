function thisItemExist(array, id) {
  const findIdx = array.findIndex(item => item.strMeal === id)
  return findIdx
}

export default thisItemExist