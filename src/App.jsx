import { Suspense } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import PricingOptions from './components/pricingOptions/PricingOptions'

function App() {
  const pricingPromise = fetch('pricingData.json').then(res => res.json())

  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <Suspense fallback={<div className="flex w-52 flex-col gap-4">
        <div className="skeleton h-32 w-full"></div>
        <div className="skeleton h-4 w-28"></div>
        <div className="skeleton h-4 w-full"></div>
        <div className="skeleton h-4 w-full"></div>
      </div>}>
        <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
      </Suspense>

    </>
  )
}

export default App
