import React, { useEffect, useRef } from 'react'
import {mount} from "marketing/MarketingApp";

function MarketingApp() {
    const marketingRef = useRef();
    useEffect(() => {
        mount(marketingRef.current);
    })
  return (
    <div ref={marketingRef} ></div>
  )
}

export default MarketingApp