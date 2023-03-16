import {Action} from './actions'

export interface TokenState {
  token: string,
  id: string
}

const initialState = {
  token: '',
  id: ''
}

export const tokenReducer = (state: TokenState = initialState, action: Action) => {
  switch(action.type){
    case "ADD_TOKEN": {
      return{token: action.payload, id: state.id}
    }
    case "ADD_ID": {
      return{token: state.token, id: action.payload}
    }

    default: return state
  }
}