import React from 'react'
import ProductDesign from './Components/ProductDesign'
import './Components/ProductDesign.css'

const App = () => {

  const products = [
  {
    productLogo: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?auto=format&fit=crop&w=300&h=300&q=80",
    name: "SoundMax",
    type: "Earbuds Y345",
    price: "$45"
  },
  {
    productLogo: "https://images.unsplash.com/photo-1518444065439-e933c06ce9cd?auto=format&fit=crop&w=300&h=300&q=80",
    name: "BassBoost",
    type: "Headphone S88",
    price: "$75"
  },
  {
    productLogo: "https://images.unsplash.com/photo-1583863788434-e58a36330cf0?auto=format&fit=crop&w=300&h=300&q=80",
    name: "PowerFast",
    type: "Charger C20",
    price: "$20"
  },
  {
    productLogo: "https://images.unsplash.com/photo-1606220838315-056192d5e927?auto=format&fit=crop&w=300&h=300&q=80",
    name: "AirTune",
    type: "Earbuds A12",
    price: "$55"
  },
  {
    productLogo: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=300&h=300&q=80",
    name: "NoiseBlock",
    type: "Headphone N90",
    price: "$120"
  },
  {
    productLogo: "https://images.unsplash.com/photo-1580894894513-541e068a3e2b?auto=format&fit=crop&w=300&h=300&q=80",
    name: "QuickVolt",
    type: "Charger Q30",
    price: "$25"
  },
  {
    productLogo: "https://images.unsplash.com/photo-1589003077984-894e133dabab?auto=format&fit=crop&w=300&h=300&q=80",
    name: "BoomBox",
    type: "Bluetooth Speaker B10",
    price: "$60"
  },
  {
    productLogo: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?auto=format&fit=crop&w=300&h=300&q=80",
    name: "ChargePro",
    type: "Power Bank P200",
    price: "$40"
  },
  {
    productLogo: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=300&h=300&q=80",
    name: "ClickMaster",
    type: "Wireless Mouse M15",
    price: "$18"
  },
  {
    productLogo: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=300&h=300&q=80",
    name: "KeyPro",
    type: "Mechanical Keyboard K77",
    price: "$85"
  }
];

  return (
    <div className="container">
      {products.map((product, index) =>{
        return <div key={index}>
          <ProductDesign productLogo = {product.productLogo} productName = {product.name} productType = {product.type} productPrice = {product.price} />
        </div>
      })}      
    </div>
  )
}

export default App
