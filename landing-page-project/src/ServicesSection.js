import ServiceBlock from "./ServiceBlock"

export default function ServicesSection() {

  const SERVICE_BOX_DATA = [
    {
      imgURL: 'https://assets.codepen.io/6060109/agency-service-1.png',
      text: 'WEB DESIGN'
    },
    {
      imgURL: 'https://assets.codepen.io/6060109/agency-service-2.png',
      text: 'ECOMMERCE'
    },
    {
      imgURL: 'https://assets.codepen.io/6060109/agency-service-3.png',
      text: 'AUTOMATION'
    }
  ]

  return (
    <div className="services-container">
      <h1>OUR SERVICES</h1>
      <div className="services">

        {
          SERVICE_BOX_DATA.map(box => {
            return (
              <ServiceBlock box={box} />
            )
          })
        }

      </div>
    </div>
  )
}