import { useState } from 'react';

const SubForm = ({ addSub }) => {
  const [sub, setSub] = useState({ title: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    addSub(sub)
    // clearing out the form 
    setSub({ title: '' })
  }

  return(
    <>
      <form onSubmit={handleSubmit}>
        <input 
          name='title' 
          value={sub.title} 
          onChange={ (e) => setSub({ ...sub, title: e.target.value })} 

          placeholder='Title'
          required
        />
        <button type="submit">Submit</button>
      </form>
    </>
  )
}

export default SubForm;