import { RootState, reducer } from './reducers/index'
import { AnyAction, applyMiddleware, createStore } from 'redux'
import { MakeStore, createWrapper, Context } from 'next-redux-wrapper'
import thunk, { ThunkDispatch } from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

// create a makeStore function
const makeStore: MakeStore<RootState> = (context: Context) => createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

// export an assembled wrapper
export const wrapper = createWrapper<RootState>(makeStore, { debug: true })

export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>
