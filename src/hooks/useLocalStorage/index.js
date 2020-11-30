import { useEffect, useState } from "react"

function useLocalStorage() {
  const [storage, setStorage] = useState(JSON.parse(localStorage.getItem("meals")) || [])  

  useEffect(() => {
      localStorage.setItem("meals", JSON.stringify(storage))
    // return () => {
    //   cleanup
    // }
  }, [storage])
  return [storage, setStorage]
}

export default useLocalStorage