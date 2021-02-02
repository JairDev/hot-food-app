function createNewObj(item, qty) {
  const obj = Object.assign(
    {},
    {
      ...item,
      
    }
  );
  return obj;
}

export default createNewObj
