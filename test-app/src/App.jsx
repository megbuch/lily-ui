import { useState } from 'react'
import ComponentCard from './components/ComponentCard.jsx'
import CarouselComp from './components/Carousel.jsx'
import './styles.scss'

function App() {
  const [selectedComponent, setSelectedComponent] = useState()
  const Components = {
    button: 'Button',
    carousel: 'Carousel',
    select: 'Select'
  }

  const renderSelectedComponent = () => {
    switch(selectedComponent) {
      case Components.button: 
        return <ComponentCard 
          // component={<ButtonComp />} 
          title='Button' 
          description='Coming soon' 
          readmeURL='https://github.com/megbuch/lily-ui#button'
        />
      case Components.carousel:
        return <ComponentCard 
          component={<CarouselComp />} 
          title='Carousel' 
          description='A responsive image carousel with many customizable options.' 
          readmeURL='https://github.com/megbuch/lily-ui#carousel'
        />
      case Components.select:
        return <ComponentCard 
        // component={<SelectComp />} 
        title='Select' 
        description='Coming soon' 
        readmeURL='https://github.com/megbuch/lily-ui#select'
      />
      default: return <p>Select a component</p>
    } 
  }

  return (
    <div>
      <select value={selectedComponent} onChange={e=>setSelectedComponent(e.target.value)}>
        <option key='' value=''> -- Select One --</option>
        {Object.keys(Components).map(c => (
          <option key={c} value={Components[c]}>{Components[c]}</option>
        ))}
      </select>
      {renderSelectedComponent()}
    </div>
  )
}

export default App
