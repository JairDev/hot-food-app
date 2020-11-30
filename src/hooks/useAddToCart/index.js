const { useState } = require("react");

function useAddToCart({props}) {
  const [cart, setCart] = useState([])
  // console.log(meal)
    // const nObj = Object.assign({}, {
    //   ...meal,
    //   qty,
    // })
    // console.log(nObj)
    // const item = thisItemExist(cart, nObj, id)
    // const nArr = [...cart].concat([nObj])
    // if(item === -1) {
    //   setCart(nArr)
    // }else {
    //   console.log("already exist")
    // }
  return [cart, setCart]
}

export default useAddToCart