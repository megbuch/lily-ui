import { Carousel } from 'lily-ui'

export default function CarouselComp() {
  const carouselData = [
    { description: 'Atlas', imageSource: 'https://images.unsplash.com/photo-1725629021424-ba7b8ce8848b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { description: 'Dynamo', imageSource: 'https://images.unsplash.com/photo-1603481588273-2f908a9a7a1b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
    { description: 'Ghost', imageSource: 'https://images.unsplash.com/photo-1636488363136-4dcffb388ac3?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' }
  ]
  
  return (
    <div>
      <Carousel 
        carouselData={carouselData} 
        headerText='Shop Prebuilt PCs'
        buttonText='View More'
        onClick={() => alert('Customize this as you wish!')} 
        height='40vh'
        overlayColor='black'
        overlayOpacity='30%'
        />
    </div>
  )
}