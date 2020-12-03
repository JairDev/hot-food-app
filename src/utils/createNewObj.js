function createNewObj(meal, qty) {
  const nObj = Object.assign(
    {},
    {
      ...meal,
      qty,
    }
  );
  return nObj;
}

export default createNewObj
