import React from 'react'
import ListItem from '../components/ListItem';
import { inputs } from '../mockData/inputs';

const Props = () => {
  const listArr = inputs.map((item) => <ListItem title={item.text} key={item.id} />);

  return (
    <div>
      <ul>
        {listArr}
      </ul>
    </div>
  )
}

export default Props;