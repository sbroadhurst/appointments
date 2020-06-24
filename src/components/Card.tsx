// @flow strict

import * as React from 'react'

import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 12px;
`

const CardArea = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
`

const Image = styled.img`
  width: 100%;
  vertical-align: middle;
  border-style: none;
  height: 150px;
`

const TextArea = styled.div`
  padding: 8px;
  color: white;
  display: flex;
  flex-direction: row;
  margin: auto;
`

const Icon = styled.img`
  height: 30px;
  margin-right: 10px;
`

const Text = styled.div`
  font-size: 20px;
  margin: auto;
`

interface Props {
  text: string
  width: number | string
  height: number | string
  image: string
  link: string
  color: string
  icon: string
}

const Content = ({ text, image, color, icon }: Props) => {
  return (
    <>
      <CardArea style={{ backgroundColor: color }}>
        <Image src={image} alt={text} />
        <TextArea>
          <Icon src={icon} />
          <Text>{text}</Text>
        </TextArea>
      </CardArea>
    </>
  )
}

function Card(props: Props) {
  const { width, height, link } = props

  return (
    <Frame
      style={{
        width,
        height,
      }}>
      <Link to={link} style={{ textDecoration: 'none' }}>
        <Content {...props} />
      </Link>
    </Frame>
  )
}

export default Card
