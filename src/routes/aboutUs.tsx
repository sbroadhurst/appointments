import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import styled from 'styled-components'

const VideoContainer = styled.div`
  position: relative;
  background: rgb(255, 255, 255);
  background: radial-gradient(circle, rgba(64, 64, 64, 1) 0%, rgba(0, 0, 0, 1) 100%);
  max-height: 900px;
  width: 100%;
  height: 55.55vw;
`

const Video = styled.iframe`
  height: 100%;
  width: 100%;
`

const Text = styled.div`
  padding: 20px;
  width: 60%;
  margin: auto;
  font-size: 1.2rem;
`

const AboutUs = () => {
  return (
    <Layout>
      <div className="container" style={{ width: '100vw' }}>
        <VideoContainer>
          <Video
            src="https://www.youtube.com/embed/WTfPAiedj-o"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            title="video"
            width="100%"
          />
        </VideoContainer>
      </div>
      <Text>
        Here at Stephen's Dental Clinic we believe in providing our customers with the best possible experience with the
        least amount of inconvenience. We have been around since 2020 and continue to server our customers with the best
        possible standards and practices.
      </Text>
    </Layout>
  )
}

export default AboutUs
