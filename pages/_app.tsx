import React, { FC } from 'react'
import { AppProps } from 'next/app'
import { wrapper } from '../store'
import GlobalStyle from '../styles/global'

const WrappedApp: FC<AppProps> = ({Component, pageProps}) => {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle/>
    </>
  )
}

export default wrapper.withRedux(WrappedApp)
