import {
  ADD_SERVICE,
  CHANGE_SERVICE_FIELD,
  REMOVE_SERVICE,
  EDIT_SERVICE,
  FILTER_SERVICE,
} from './actions'

export function addService(name, price) {
  return { type: ADD_SERVICE, payload: { name, price } }
}

export function removeService(id) {
  return { type: REMOVE_SERVICE, payload: { id } }
}

export function editService(
  id,
  name,
  price
) {
  return { type: EDIT_SERVICE, payload: { id, name, price } }
}

export function changeServiceField(
  name,
  value
) {
  return { type: CHANGE_SERVICE_FIELD, payload: { name, value } }
}


export function filterService(name) {
  return { type: FILTER_SERVICE, payload: { name } }
}