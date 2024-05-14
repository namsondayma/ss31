import React from 'react'
import Function from './components/Function'
import Bai1 from './components/Bai1'
import Bai2 from './components/Bai2'
import Bai3 from './components/Bai3'
import Parent from './components/Parent'
import Parents from './components/Parents'
import ParentComponent from './components/ParentComponent';

export default function App() {
  return (
    <div>
      App
      <Function></Function>
      <Bai1></Bai1>
      <Bai2></Bai2>
      <Bai3></Bai3>
      <Parent></Parent>
      <Parents></Parents>
      <ParentComponent></ParentComponent>
    </div>
  )
}
