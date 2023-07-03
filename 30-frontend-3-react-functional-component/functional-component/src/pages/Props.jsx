import React from 'react'
import ListItem from '../components/ListItem';
import { inputs } from '../mockData/inputs';

const Props = () => {

  return (
    <div>
      <ul>
        {
          inputs.map((item) => <ListItem title={item.text} checked={item.checked} key={item.id} />)
        }
      </ul>
    </div>
  )
}

export default Props;