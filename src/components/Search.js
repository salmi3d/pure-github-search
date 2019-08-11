import React, { useContext, useState } from 'react'
import { AlertContext } from '../context/alert/alert.context'
import { GithubContext } from '../context/github/github.context'

export const Search = () => {
  const [value, setValue] = useState('')
  const alert = useContext(AlertContext)
  const github = useContext(GithubContext)
  const onSubmit = event => {
    if (event.key !== 'Enter') return
    github.clearUsers()
    if (value.trim()) {
      alert.hide()
      github.search(value.trim())
    } else {
      alert.show('Please enter a search string')
    }
  }

  return (
    <div className="row">
      <div className="input-field col s12">
        <input
          id="search"
          type="text"
          className="validate"
          onKeyPress={onSubmit}
          value={value}
          onChange={event => setValue(event.target.value)}
        />
        <label htmlFor="search">Search string</label>
      </div>
    </div>
  )
}
