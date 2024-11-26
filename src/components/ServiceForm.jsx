import { useDispatch, useSelector } from 'react-redux'
import {
  addService,
  changeServiceField,
  editService,
} from '../store/actions/actionTypes'
import { FORM_TYPES } from '../store/actions/actions'
import PropTypes from 'prop-types'

export default function ServiceForm({
  formType,
  changeType,
  editItem,
}) {
  const item = useSelector(
    (state) => state.serviceForm
  )

  const dispatch = useDispatch()

  const resetForm = (evt) => {
    evt.preventDefault()
    dispatch(changeServiceField('name', ''))
    dispatch(changeServiceField('price', ''))
    changeType(FORM_TYPES.ADD)
  }

  const handleChange = (evt) => {
    const { name, value } = evt.target
    dispatch(changeServiceField(name, value))
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()

    if (!item.name || !item.price) {
      alert('Пожалуйста, заполните все поля')
      return
    }

    if (formType === FORM_TYPES.EDIT) {
      dispatch(editService(editItem?.id, item.name, item.price))
    } else {
      dispatch(addService(item.name, item.price))
    }

    dispatch(changeServiceField('name', ''))
    dispatch(changeServiceField('price', ''))
    changeType(FORM_TYPES.ADD)
  }
  return (
    <>
      <form className="flex items-center gap-2" onSubmit={handleSubmit}>
        <input
          className="input input-bordered w-full max-w-xs"
          name="name"
          onChange={handleChange}
          value={item.name}
          placeholder="Наименование"
        />
        <input
          className="input input-bordered w-full max-w-xs"
          name="price"
          onChange={handleChange}
          value={item.price}
          type="number"
          placeholder="Цена"
        />
        <button className="btn" type="submit">
          Сохранить
        </button>
        {formType === FORM_TYPES.EDIT && (
          <button onClick={resetForm} className="btn" type="button">
            Отменить
          </button>
        )}
      </form>
    </>
  )
}

ServiceForm.propTypes = {
  formType: PropTypes.string.isRequired,
  changeType: PropTypes.func.isRequired,
  editItem: PropTypes.object,
}