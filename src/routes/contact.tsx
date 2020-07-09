import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/Button'
import styled from 'styled-components'

import Layout from '../components/Layout'

import './contact.css'

const Label = styled.label`
  color: ${({ theme }) => theme.primaryDark};
`

const InfoText = styled.div`
  color: ${({ theme }) => theme.primaryDark};
  column-width: 160px;
  font-size: 16px;
`

const Contact = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [badName, setBadName] = useState(true)
  const [badEmail, setBadEmail] = useState(true)
  const [badMessage, setBadMessage] = useState(true)
  const [badPhone, setBadPhone] = useState(true)
  const [submitAttempt, setSubmitAttept] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  function updateName(e: any) {
    setName(e.target.value)
  }

  function updateEmail(e: any) {
    setEmail(e.target.value)
  }

  function updateMessage(e: any) {
    setMessage(e.target.value)
  }

  function updatePhone(e: any) {
    setPhone(e.target.value)
  }

  function validateEmail(email: string) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(email).toLowerCase())
  }

  function validatePhone(phoneNumber: string) {
    const regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s]?[0-9]{3}[-\s]?[0-9]{4,6}$/
    return regex.test(String(phoneNumber))
  }

  useEffect(() => {
    name === '' ? setBadName(true) : setBadName(false)
    validateEmail(email) === false ? setBadEmail(true) : setBadEmail(false)
    validatePhone(phone) === false ? setBadPhone(true) : setBadPhone(false)
    message === '' ? setBadMessage(true) : setBadMessage(false)
  }, [name, message, email, phone])

  function submit() {
    setSubmitAttept(true)

    if (badName === false && badEmail === false && badMessage === false && badPhone === false) {
      setSubmitted(true)
    }
  }

  return (
    <Layout>
      <div>
        <div className="container" style={{ width: '90vw' }}>
          <div className="banner">
            <div className="banner-text">Information</div>
          </div>
          <InfoText>Stephen's Dental Clinic</InfoText>
          <InfoText> 123 Tooth Fairy Way</InfoText>
          <InfoText> Lake Mary, FL 32746</InfoText>
          <InfoText>(407) 416-1989</InfoText>
        </div>
        <div className="container" style={{ width: '90vw' }}>
          <div className="banner">
            <div className="banner-text">Contact</div>
          </div>
          <div>
            {submitted === false ? (
              <form className="form">
                <Label>Name</Label>
                <input required onChange={(e) => updateName(e)} type="text" id="name" name="name" className="info" />
                {submitAttempt && badName ? <div className="error-text">Required</div> : null}

                <Label>Email</Label>
                <input
                  required
                  onChange={(e) => updateEmail(e)}
                  type="email"
                  id="email"
                  name="email"
                  className="info"
                />
                {submitAttempt && badEmail ? <div className="error-text">Required or Bad Email Address</div> : null}

                <Label>Phone #</Label>
                <input required onChange={(e) => updatePhone(e)} type="text" id="phone" name="Phone" className="info" />
                {submitAttempt && badPhone ? <div className="error-text">Required or Bad Phone Number</div> : null}

                <Label style={{ justifyContent: 'left' }}>Message</Label>
                <textarea onChange={(e) => updateMessage(e)} id="message" name="message" className="info textarea" />
                {submitAttempt && badMessage ? <div className="error-text">Required</div> : null}

                <div className="buttonarea">
                  <Button type="contact" text="Send" width={'70vw'} height={'2rem'} f={() => submit()} />
                  <Link to="/">
                    <Button
                      type="cancel"
                      text="Cancel"
                      width={'70vw'}
                      height={'2rem'}
                      f={() => console.log('cancelled')}
                    />
                  </Link>
                </div>
              </form>
            ) : (
              <div className="successful-submit">
                {' '}
                Thank you {name}, your email has been successfully submitted!
                <br /> We will respond back to you as soon as possible to the email {email}.
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
