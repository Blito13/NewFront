
const setObject = {
  userName : "",
  token : "",
  play : [],
  total : 0,
  discounts : 0,
  status : ""
}
export const playInitialState = JSON.parse(window.localStorage.getItem('play')) || setObject




export const PLAY_ACTION_TYPES = {
  SINGLE_PLAY :'SINGLE_PLAY',
  CLEAR_STORE :'CLEAR_STORE' ,
  LOGIN_SESSION :'LOGIN_SESSION',
  UPDATE_PASS :'UPDATE_PASS' ,
};

// Función para actualizar el localStorage con el estado del carrito
export const updateLocalStorage = state => {
  window.localStorage.setItem('play', JSON.stringify(state));
};

// Reducer
export const playReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case PLAY_ACTION_TYPES.LOGIN_SESSION:
      const tk = action.payload;
      let newPlayState = {}
      tk.data 
      ? 
      newPlayState = {...state, 
      token:tk.data.token,
      status:"on-line",
      message : "ok"
      } 
      :
      newPlayState= {...state , message : tk.response.data.message}
      
      updateLocalStorage(newPlayState); // Aquí también
      return newPlayState;

    case PLAY_ACTION_TYPES.CLEAR_STORE:
      
      updateLocalStorage(setObject);
      return setObject ;

    case PLAY_ACTION_TYPES.SINGLE_PLAY:
        console.log("abdulito")
      const cleared  = {
        ...state,
        play: payload
      }  
      updateLocalStorage(cleared);
      return cleared;

    case PLAY_ACTION_TYPES.UPDATE_PASS:
      const clear  = {
       ...state
      }
      return clear;

    default:
  
      return state.cart;
  }
};