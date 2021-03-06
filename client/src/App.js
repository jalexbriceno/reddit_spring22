import { useState, useEffect } from 'react';
import axios from 'axios';
import SubForm from './components/subs/SubForm';
import SubList from './components/subs/SubList';

const App = () => {
  const [subs, setSubs] = useState([])

  useEffect( () => {
    // make a call to our rails to grab all items
    axios.get('/api/subs')
      .then( res => {
        // update the state with the items from the database
        setSubs(res.data)
      })
      .catch( err => console.log(err) )
  }, [])

          // { title: 'Food' }
  const addSub = (sub) => {
    // TODO make a call to our rails to create the item using the params
                    // { sub: { title: 'Food' }}
    axios.post('/api/subs', { sub })
      .then( res => {
        // add the new sub in our state
        setSubs([...subs, res.data ])
      })
      .catch( err => console.log(err) )
  }

  const updateSub = (id, sub) => {
    // TODO make a call to our rails to updating the item using the params
    // TODO update the state
  }

  const deleteSub = (id) => {
    // TODO make a call to our rails to delete the item
    // TODO delete item in the state, display message 
  }

  return(
    <>
      <h1>Subs</h1>
      <SubForm addSub={addSub} />
      <SubList 
        subs={subs}
      />
    </>
  )
}

export default App;