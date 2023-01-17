import { configureStore } from '@reduxjs/toolkit'
import reducers  from '../reducers/reducer'


export default configureStore({
    reducer: {
        mwcReducer:reducers
    },
})