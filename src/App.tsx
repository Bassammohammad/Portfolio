import HeaderSection from './components/header-section.tsx'
import Description from './components/description.tsx'
import { useState } from 'react'
import Theme from '@/components/theme.tsx'

function App() {
  const [isGreenMode, setIsGreenMode] = useState(false)
  console.log(isGreenMode)

  return (
    <div
      className={`my-20 lg:w-[60%] m-auto space-y-20 overflow-x-hidden ${isGreenMode ? 'theme-green' : 'theme-default'}`}
    >
      <Theme setIsGreenMode={setIsGreenMode} isGreenMode={isGreenMode} />
      <HeaderSection />
      <Description />
    </div>
  )
}

export default App
