import React from 'react'
import NavbarPlan from './NavbarPlan'
import { Provider } from 'react-redux'
import store from './stor/Store'

const RootLayout = () => {
  return (
    <>
    <Provider store={store}>
      <NavbarPlan/>

      </Provider>
    </>
  )
}

export default RootLayout