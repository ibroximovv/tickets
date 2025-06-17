import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { PageRoutesList } from '../hooks/useRoutes'

const PageRoute = () => {
  return (
    <Routes>{PageRoutesList.map(item => <Route key={item.id} path={item.path} element={item.element} />)}</Routes>
  )
}

export default PageRoute