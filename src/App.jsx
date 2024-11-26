import { useState } from 'react'
import { FORM_TYPES } from './store/actions/actions'
import ServiceList from './components/ServiceList'
import ServiceFilter from './components/ServiceFilter'
import ServiceForm from './components/ServiceForm'

function App() {
  const [formType, setFormType] = useState(FORM_TYPES.ADD)
  const [editItem, setEditItem] = useState(null)

  const onChangeType = (type) => setFormType(type)

  const editItemHandler = (item) => {
    setEditItem(item)
    setFormType(FORM_TYPES.EDIT)
  }

  return (
    <>
      <ServiceFilter />
      <ServiceForm
        formType={formType}
        changeType={onChangeType}
        editItem={editItem}
      />
      <ServiceList
        changeType={onChangeType}
        editItemHandler={editItemHandler}
      />
    </>
  )
}

export default App
