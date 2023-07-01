import React from 'react'

const JSON = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>What is Your Name?</label>
          <input type="text" name="name" id="name" placeholder='John Doe' />
        </div>
        <div>
          <label>What is Your Email?</label>
          <input type="email" name="email" id="email" placeholder='example@gmail.com' />
        </div>
        <div>
          <label>What is Your Phone No?</label>
          <input type="tel" name="phone" id="phone" placeholder='+8801707453911' />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default JSON;