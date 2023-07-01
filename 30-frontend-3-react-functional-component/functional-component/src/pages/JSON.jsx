import React, { useState } from 'react'

const JSON = () => {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>What is Your Name?</label>
          <input onChange={handleChange} value={formState.name} type="text" name="name" id="name" placeholder='John Doe' />
        </div>
        <div>
          <label>What is Your Email?</label>
          <input onChange={handleChange} value={formState.email} type="email" name="email" id="email" placeholder='example@gmail.com' />
        </div>
        <div>
          <label>What is Your Phone No?</label>
          <input onChange={handleChange} value={formState.phone} type="tel" name="phone" id="phone" placeholder='+8801707453911' />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default JSON;