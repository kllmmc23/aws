import React from 'react'
import './App.scss'
import NameTag from './Components/NameTags'
import Input from './Components/Input'


const App = () => {
  return (
    <div className='App'>
      <header className="App-header">
        <Input placeholder='enter here' type='text'/>
      
      <h1 className='name title'>Names list</h1>
      <NameTag firstName='Peter' lastName='Wilson'/>
      <NameTag firstName='John' lastName='Smith'/>
        <NameTag firstName='Jill' lastName='Bell' />
        <NameTag></NameTag>
      </header>
      
    </div>
  )
}

export default App;
