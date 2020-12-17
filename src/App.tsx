import React from 'react'

import Navbar from './components/navbar'
import Button from './components/button'

class App extends React.Component<{}> {
  render() {
    return (
      <div className="mt-5 mx-10">
        <div className="text-center">
          <Navbar brand="hello" link={['yes', 'no']} />
        </div>
        <Button label="test1" onClick={() => null} mode="secondary"/>
      </div>
    )
  }
}

export default App
