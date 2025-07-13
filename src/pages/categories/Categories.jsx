import React from 'react'

import CategoriesSection from './CategoriesSection'
import CategoriesFilterProduct from './CategoriesFilterProduct'

import Featured from '../home/Featured'
import Info from '../home/Info'

const Categories = () => {
  return (
    <>

    <CategoriesSection/>
    <CategoriesFilterProduct/>
    <Info/>
    <Featured/>
    </>
  )
}

export default Categories