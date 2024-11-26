import { ADD_SERVICE, EDIT_SERVICE, FILTER_SERVICE, REMOVE_SERVICE } from '../actions/actions'

const initialState = [
  {
    id: 1,
    name: 'Замена стекла',
    price: 21000,
    show: true
  },
  {
    id: 2,
    name: 'Замена дисплея',
    price: 25000,
    show: true
  },
]

export default function serviceListReducer(
  state = initialState,
  action
) {
  switch (action.type) {
    case ADD_SERVICE: {
      const { name, price } = action.payload
      return [...state, { id: state.length + 1, name, price: Number(price), show: true }]
    }
    case REMOVE_SERVICE: {
      const { id } = action.payload
      return state.filter((service) => service.id !== id)
    }
    case EDIT_SERVICE:
      return state.map((service) =>
        service.id === action.payload.id
          ? {
            ...service,
            name: action.payload.name,
            price: action.payload.price,
          }
          : service
      )
    case FILTER_SERVICE:
      if (!action.payload.name || action.payload.name.length < 3) return state.map((service) => ({ ...service, show: true }))
      return state.map((service) => {
        if (service.name.toLowerCase().includes(action.payload.name.toLowerCase())) {
          return { ...service, show: true }
        } else {
          return { ...service, show: false }
        }
      })
    default:
      return state
  }
}
