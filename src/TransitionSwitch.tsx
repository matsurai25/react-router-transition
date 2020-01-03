import * as React from 'react'
import styled from 'styled-components'
import {
  Route,
  useHistory,
  matchPath
} from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'

const defaultDuration = 800

export interface TransitionSwitchRouteProps {
  exact: boolean
  path: string
  Component(): JSX.Element
}

interface Props {
  duration?: number
  over?: React.ReactNode
  routes: TransitionSwitchRouteProps[]
}

export default function TransitionSwitch({
  duration,
  over,
  routes
}: Props) {
  const history = useHistory()
  const [currentPath, setPath] = React.useState('')

  React.useEffect(() => {
    // 空配列なら初回実行
    if (currentPath === '') {
      // pathがなかったらトップにリダイレクト
      if (
        routes.every(
          route =>
            matchPath(history.location.pathname, {
              path: route.path,
              exact: route.exact
            }) === null
        )
      ) {
        history.push('/')
      } else {
        setPath(history.location.pathname)
      }
    } else if (history.location.pathname !== currentPath) {
      // 位置固定
      document.body.style.overflow = 'hidden'
      setTimeout(() => {
        // 位置固定解除
        document.body.style.overflow = 'auto'
        return window.scrollTo(0, 0)
      }, duration)
      setPath(history.location.pathname)
    }
  }, [history.location.pathname, currentPath, setPath])

  return (
    <>
      {routes.map(({ path, Component, exact }, i) => (
        <Route
          key={`${path}-${i}`}
          exact={exact}
          path={path}
        >
          {({ match }) => (
            <CSSTransition
              in={match != null}
              timeout={
                duration ? duration : defaultDuration
              }
              classNames='page'
              unmountOnExit
            >
              <div>
                {over ? (
                  over
                ) : (
                  <DefaultOver
                    duration={
                      duration ? duration : defaultDuration
                    }
                  />
                )}
                <Page
                  duration={
                    duration ? duration : defaultDuration
                  }
                >
                  <Component />
                </Page>
              </div>
            </CSSTransition>
          )}
        </Route>
      ))}
    </>
  )
}

const Page = styled.div<{ duration: number }>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
  width: 100%;
  height: 100vh;
  will-change: opacity;

  .page-enter > & {
    opacity: 0;
  }

  .page-enter-active > & {
    opacity: 1;
    transition: all ${({ duration }) => duration}ms ease
      ${({ duration }) => duration}ms;
  }
`

const DefaultOver = styled.div<{ duration: number }>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000000;
  width: 100%;
  height: 100vh;
  transform: translateX(-100%);
  background: rgba(0, 0, 0, 1);

  .page-enter > & {
    transform: translateX(-100%);
  }

  .page-enter-active > & {
    transform: translateX(0%);
    transition: all ${({ duration }) => duration}ms ease;
  }

  .page-enter-done > & {
    transform: translateX(100%);
    transition: all ${({ duration }) => duration}ms ease
      300ms;
  }
`
