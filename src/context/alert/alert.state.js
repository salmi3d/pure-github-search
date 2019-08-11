import React, { useReducer } from 'react'
import { AlertContext } from './alert.context'
import { alertReducer } from './alert.reducer'
import { SHOW_ALERT, HIDE_ALERT } from '../types'

export const AlertState = ({ children }) => {
  const [state, dispatch] = useReducer(alertReducer, null)
  const show = (text, type = 'info') => dispatch({ type: SHOW_ALERT, payload: { type, text } })
  const hide = () => dispatch({ type: HIDE_ALERT })

  return (
    <AlertContext.Provider value={{
      show, hide, alert: state
    }}>
      {children}
    </AlertContext.Provider>
  )
}
