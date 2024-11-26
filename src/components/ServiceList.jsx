import { useDispatch, useSelector } from 'react-redux'
import { changeServiceField, removeService } from '../store/actions/actionTypes'
import { MdClose, MdEdit } from 'react-icons/md'
import { FORM_TYPES } from '../store/actions/actions'
import PropTypes from 'prop-types'

export default function ServiceList({
  changeType,
  editItemHandler,
}) {
  const items = useSelector((state) => state.serviceList)
  const filterItems = items.filter((o) => o.show)

  const dispatch = useDispatch()
  const handleRemove = (id) => {
    dispatch(removeService(id))
    dispatch(changeServiceField('name', ''))
    dispatch(changeServiceField('price', ''))
    changeType(FORM_TYPES.ADD)
  }

  const handleUpdate = (item) => {
    changeType(FORM_TYPES.EDIT)
    editItemHandler(item)
    dispatch(changeServiceField('name', item.name))
    dispatch(changeServiceField('price', item.price))
  }

  return (
    filterItems.length ? (
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Наименование</th>
              <th>Цена</th>
              <th>Действие</th>
            </tr>
          </thead>
          <tbody>
            {filterItems.map((o) => (
              <tr key={o.id}>
                <td>{o.name}</td>
                <td>{Number(o.price)} Р</td>
                <td>
                  <div className="flex items-center gap-2">
                    <button className="btn btn-square btn-sm btn-ghost" onClick={() => handleUpdate(o)}>
                      <MdEdit />
                    </button>
                    <button className="btn btn-square btn-sm btn-ghost" onClick={() => handleRemove(o.id)}>
                      <MdClose />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ) : (<p>Ничего не найдено</p>)
  )
}

ServiceList.propTypes = {
  changeType: PropTypes.func.isRequired,
  editItemHandler: PropTypes.func.isRequired,
}