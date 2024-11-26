import { useDispatch, useSelector } from 'react-redux'
import {
  changeServiceField,
  filterService,
} from '../store/actions/actionTypes'

export default function ServiceFilter() {
  const item = useSelector(
    (state) => state.serviceForm
  )

  const dispatch = useDispatch()

  const handleChange = (evt) => {
    const { name, value } = evt.target
    dispatch(changeServiceField(name, value))
    dispatch(filterService(value))
  }

  return (
    <>
      <input
        className="input input-bordered w-full max-w-xl"
        name="filter"
        onChange={handleChange}
        value={item.filter}
        placeholder="Поиск..."
      />
    </>
  )
}
