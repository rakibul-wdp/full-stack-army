import React from 'react'
import ProductListItem from '../components/ProductListItem';

const State = () => {

  return (
    <div>
      <ProductListItem product="Keyboard" stock={10} />
      <ProductListItem product="Mouse" stock={5} />
      <ProductListItem product="Headphone" stock={0} />
    </div>
  )
}

export default State;