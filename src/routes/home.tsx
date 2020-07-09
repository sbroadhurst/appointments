import React, { useContext } from 'react'
import styled from 'styled-components'
import Card from '../components/Card'
import { HomeContext } from '../contexts/homeContext'
import Layout from '../components/Layout'

const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 5vw;
`

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: 15%;
  margin-left: 15%;
  justify-content: center;
`

const ImageContainer = styled.div`
  position: relative;
  background: rgb(255, 255, 255);
  background: radial-gradient(circle, rgba(64, 64, 64, 1) 0%, rgba(0, 0, 0, 1) 100%);
  width: 90%;
  height: 30vw;
  margin: auto;
`

const Home = () => {
  const assets: any = useContext(HomeContext)
  const { homeCards, homeImage }: any = assets

  return (
    <Layout>
      <ImageContainer
        style={{
          background: `url(${homeImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          backgroundSize: '100%',
        }}></ImageContainer>
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
    </Layout>
  )
}

export default Home
