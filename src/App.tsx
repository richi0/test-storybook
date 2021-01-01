import React from 'react'
import logo from './static/images/logo.svg'
import Navbar from './components/navbar'
import Button from './components/button'
import Browser from './components/cardBrowser'
import Card from './components/imageCard'

import img1 from './static/images/p1.jpg'
import img2 from './static/images/p2.jpg'
import img3 from './static/images/p3.jpg'
import img4 from './static/images/p4.jpg'
import img5 from './static/images/p5.jpg'
import img6 from './static/images/p6.jpg'
import img7 from './static/images/p7.jpg'
import img8 from './static/images/p8.jpg'

const images = [img1, img2, img3, img4, img5, img6, img7, img8]
const cards = images.map((img) => (
  <Card title="Title1" text="This is a card text" href="/" img={img} />
))

class App extends React.Component<{}> {
  render() {
    return (
      <div>
        <div className="text-center">
          <Navbar
            brand="hello"
            links={[{ href: 'asda', text: 'sadasd' }]}
            logo={logo}
          />
        </div>
        <Button
          label="test1"
          onClick={() => console.log('asdas')}
          mode="secondary"
        />
        <div>
          <Button
            label="test1"
            onClick={() => console.log('asdas')}
            mode="secondary"
          />
        </div>
        <div>
          <Button
            label="test1"
            onClick={() => console.log('asdas')}
            mode="secondary"
          />
        </div>
        <div>
          <Button
            label="test1"
            onClick={() => console.log('asdas')}
            mode="secondary"
          />
        </div>
        <Browser cards={cards}/>
      <div>aaa</div>
      <div>aaa</div>
      <div>aaa</div>
      <div>aaa</div>
      <div>aaa</div>
      <div>aaa</div>
      <div>aaa</div>
      <div>aaa</div>
      <div>aaa</div>
      <div>aaa</div>
      <div>aaa</div>
      <div>aaa</div>
      <div>aaa</div>
      <div>aaa</div>
      <div>aaa</div>
      <div>aaa</div>
      <div>aaa</div>
      <div>aaa</div>
      <div>aaa</div>
      <div>aaa</div>
      <div>aaa</div>
      <div>aaa</div>
      <div>aaa</div>
      <div>aaa</div>
      <div>aaa</div>
      <div>aaa</div>
      <div>aaa</div>
      <div>aaa</div>
      <div>aaa</div>
      <div>aaa</div>
      <div>aaa</div>
      </div>
    )
  }
}

export default App
