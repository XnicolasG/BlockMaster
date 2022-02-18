import { applyMiddleware, combineReducers, compose, createStore } from "redux"
import thunk from "redux-thunk";
import { MyListReducer } from "../reducer/ListReducer"
import { SesionReducer } from "../reducer/UsuariosReducer"

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE__ ) || compose;

const reducers = combineReducers({
    datosUsuarios: SesionReducer,
    peliculasNuevas: MyListReducer,
})

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk))
    )
