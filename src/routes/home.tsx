import React, { useContext } from 'react'
import styled from 'styled-components'
import Card from '../components/Card'
import { HomeContext } from '../contexts/homeContext'

const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  margin: auto;
  margin-top: 10vh;
`

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: 15%;
  margin-left: 15%;
  justify-content: center;
`

const Home = () => {
  const assets: any = useContext(HomeContext)
  const { homeCards }: any = assets

  return (
    <div style={{ position: 'relative' }}>
      <Container>
        <Row>
          {homeCards.map((card: any, index: number) => {
            return (
              <div key={index}>
                <Card
                  height={200}
                  width={300}
                  text={card.text}
                  link={card.link}
                  image={card.image}
                  icon={card.icon}
                  color={card.color}
                />
              </div>
            )
          })}
        </Row>
      </Container>
    </div>
  )
}

export default Home
