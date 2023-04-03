import { useEffect, useLayoutEffect } from "react"
import { useLocation } from "react-router-dom"

const UseScrollToTop = () => {
  const {pathname} = useLocation()

  useLayoutEffect(()=> {
    window.scrollTo(0, 0);
  }, [pathname])
}

export default UseScrollToTop