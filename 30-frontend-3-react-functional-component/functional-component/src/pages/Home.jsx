import React, { useState } from 'react'

const Home = () => {
  const [count, setCount] = useState(0);

  const result = count || 50;
  // console.log(result);

  // count && console.log(count)


  return (
    <div className='home'>
      <nav>
        <div>
          <h3>Brand Name</h3>
        </div>
        <div>
          <ul>
            <li>Link One</li>
            <li>Link Two</li>
            <li>Link Three</li>
          </ul>
        </div>
      </nav>
      <main>
        <h1>This is body title</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque nostrum voluptatem iste itaque. Harum maiores a voluptates, ad nisi aspernatur accusamus, porro consequuntur, ea quibusdam iste ratione. Quae, enim architecto.</p>
      </main>
      <footer>
        <h3>Footer</h3>
        <ul>
          <li>Footer Link One</li>
          <li>Footer Link Two</li>
          <li>Footer Link Three</li>
        </ul>
      </footer>
    </div>
  )
}

export default Home;