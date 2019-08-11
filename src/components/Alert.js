import React, { useContext } from 'react'
import { AlertContext } from '../context/alert/alert.context'

const Alert = () => {
  const { alert, hide } = useContext(AlertContext)

  if (!alert) return null

  let color
  switch (alert.type) {
    case 'danger':
      color = 'red lighten-2'
      break
    case 'success':
      color = 'green lighten-2'
      break
    case 'info':
      color = 'blue lighten-2'
      break
    case 'warning':
      color = 'yellow lighten-2'
      break
    default:
      color = 'white lighten-2'
      break
  }
  return (

    <div className="row" style={{ marginBottom: 0 }}>
      <div className="col s12 m12">
        <div className={`card z-depth-0 ${color}`}>
          <div className="card-content black-text">
            {alert.text}
            <i
              style={{ cursor: 'pointer' }}
              className="right material-icons icon_style"
              aria-hidden="true"
              onClick={hide}
            >close</i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Alert
