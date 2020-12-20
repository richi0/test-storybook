import React from 'react'

import Navbar from './components/navbar'
import Button from './components/button'

class App extends React.Component<{}> {
  render() {
    return (
      <div className="mt-5 mx-10">
        <div className="text-center">
          <Navbar brand="hello" links={[{ href: 'asda', text: 'sadasd' }]} />
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
      </div>
    )
  }
}

export default App
