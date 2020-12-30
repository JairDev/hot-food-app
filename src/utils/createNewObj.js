function createNewObj(item, qty) {
  const obj = Object.assign(
    {},
    {
      ...item,
      qty,
    }
  );
  return obj;
}

export default createNewObj
