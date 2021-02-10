function createNewObj(item) {
  const obj = Object.assign(
    {},
    {
      ...item,
    }
  );
  return obj;
}

export default createNewObj;
