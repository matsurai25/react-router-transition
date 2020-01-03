import * as React from 'react'
import styled from 'styled-components'

function Items({ text }: { text: string }) {
  return (
    <>
      {Array(3 * 12)
        .fill(null)
        .map((_, i) => (
          <Item key={`${text}-${i}`}>
            {text} {i}
          </Item>
        ))}
    </>
  )
}

export function Home() {
  return (
    <Wrapper>
      <Items text='Home' />
    </Wrapper>
  )
}

export function About() {
  return (
    <Wrapper>
      <Items text='About' />
    </Wrapper>
  )
}

export function Contact() {
  return (
    <Wrapper>
      <Items text='Contact' />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  font-size: 80px;
  color: #000;
  gap: 10px;
`

const Item = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  height: 300px;
  background: #efefef;
`
