import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { PageRoutesList } from '../hooks/useRoutes'

const PageRoute = () => {
  return (
    // <Suspense fallback={<h1 className='w-[30px] animate-ping text-[100px] text-red-900 duration-300'>Agents</h1>}>
      <Routes>{PageRoutesList.map(item => <Route key={item.id} path={item.path} element={item.element} />)}</Routes>
    // </Suspense>
  )
}

export default PageRoute