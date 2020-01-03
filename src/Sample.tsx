import * as React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { About, Contact, Home } from './Pages'
import Header from './Header'
import TransitionSwitch, {
  TransitionSwitchRouteProps
} from './TransitionSwitch'
import styled from 'styled-components'

const routes: TransitionSwitchRouteProps[] = [
  { path: '/', Component: Home, exact: true },
  {
    path: '/about',
    Component: About,
    exact: true
  },
  {
    path: '/contact',
    Component: Contact,
    exact: true
  }
]

const duration = 1000

export default function() {
  return (
    <BrowserRouter>
      <Header />
      <TransitionSwitch
        duration={duration}
        routes={routes}
        over={<Over />}
      />
    </BrowserRouter>
  )
}

const Over = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000000;
  width: 100%;
  height: 100vh;
  will-change: transform;
  transform: translateX(-100%);
  background: rgba(0, 0, 255, 1);

  .page-enter > & {
    transform: translateX(-100%);
  }

  .page-enter-active > & {
    transform: translateX(0%);
    transition: all ${duration}ms ease;
  }

  .page-enter-done > & {
    transform: translateX(100%);
    transition: all ${duration}ms ease 300ms;
  }
`
