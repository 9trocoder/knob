import React from 'react'
import HomeCard from './HomeCard'
import { FavouriteIcon } from '../utils/tools'

function Homes() {
  return (
    <div className="homescnt">
        <HomeCard favorite={FavouriteIcon} name="The Space" location="Lekki, Lagos" beds={4} baths={5} price={50000} availability="Vacant" />
    </div>
  )
}

export default Homes