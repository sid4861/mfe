import React from 'react'
import {mount} from "marketing/MarketingApp";
import MarketingApp from './components/MarketingApp';

console.log("mount", mount);
function App() {
  return (
    <div>
      <h1>Hi from container</h1>
      <hr />
      <MarketingApp />
    </div>
  )
}

export default App