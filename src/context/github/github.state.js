import React, { useReducer } from 'react'
import { GithubContext } from './github.context'
import { githubReducer } from './github.reducer'
import axios from 'axios'
import { SEARCH_USERS, GET_USER, GET_REPOS, CLEAR_USERS, SET_LOADING } from '../types'

const {
  REACT_APP_CLIENT_ID: CLIENT_ID,
  REACT_APP_CLIENT_SECRET: CLIENT_SECRET,
  REACT_APP_API_ENDPOINT: BASE_URL
} = process.env



export const GithubState = ({ children }) => {
  const initialState = {
    user: {},
    users: [],
    loading: false,
    repos: []
  }
  const [state, dispatch] = useReducer(githubReducer, initialState)
  const search = async value => {
    try {
      setLoading()
      const { data: { items: payload } } = await axios.get(`${BASE_URL}/search/users?q=${value}&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`)
      dispatch({ type: SEARCH_USERS, payload })
    } catch (e) {
      console.error(e)
    }
  }
  const getUser = async name => {
    try {
      setLoading()
      const { data: payload } = await axios.get(`${BASE_URL}/users/${name}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`)
      dispatch({ type: GET_USER, payload })
    } catch (e) {
      console.error(e)
    }
  }

  const getRepos = async name => {
    try {
      setLoading()
      const { data: payload } = await axios.get(`${BASE_URL}/users/${name}/repos?per_page=10&client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`)
      dispatch({ type: GET_REPOS, payload })
    } catch (e) {
      console.error(e)
    }
  }

  const clearUsers = () => dispatch({ type: CLEAR_USERS })

  const setLoading = () => dispatch({ type: SET_LOADING })

  const { user, users, repos, loading } = state

  return (
    <GithubContext.Provider value={{
      user, users, repos, loading,
      search, setLoading, getUser, getRepos, clearUsers
    }}>
      {children}
    </GithubContext.Provider>
  )
}
