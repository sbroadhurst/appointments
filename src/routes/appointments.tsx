import React, { useState } from 'react'
import moment from 'moment'

const Appointments = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [slotDate, setSlotDate] = useState('')
  const [slotTime, setSlotTime] = useState('')
  const [validEmail, setValidEmail] = useState(false)
  const [validPhone, setValidPhone] = useState(false)
  const [appointmentDateSelected, setAppointmentDateSelected] = useState(false)
  const [appointmentDate, setAppointmentDate] = useState('')
  const [submitAttempted, setSubmitAttempted] = useState(false)
  const [schedule, setSchedule] = useState([])

  function validateEmail(email: string) {
    const regex = /^(([^<>()\],;:\s@]+(\.[^<>()\],;:s@"]+)*)|(.+))@(([^<>()[\],;:\s@]+)+[^<>()[\],;:\s@"]{2,})$/i
    return regex.test(email) ? (setEmail(email), setValidEmail(true)) : setValidEmail(false)
  }

  function validatePhone(phoneNumber: string) {
    const regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s]?[0-9]{3}[-\s]?[0-9]{4,6}$/
    return regex.test(phoneNumber) ? (setPhone(phoneNumber), setValidPhone(true)) : setValidPhone(false)
  }

  function checkDisableDate(day: any) {
    const dateString = moment(day).format('YYYY-DD-MM')
    // @ts-ignore
    return schedule[dateString] === true || moment(day).startOf('day').diff(moment().startOf('day')) < 0
  }

  // function handleDBReponse(response: any) {
  //   const appointments = response
  //   const today = moment().startOf('day') //start of today 12 am
  //   const initialSchedule = {}
  //   initialSchedule[today.format('YYYY-DD-MM')] = true
  //   const schedule = !appointments.length
  //     ? initialSchedule
  //     : appointments.reduce((currentSchedule: any, appointment: any) => {
  //         const { slot_date, slot_time } = appointment
  //         const dateString = moment(slot_date, 'YYYY-DD-MM').format('YYYY-DD-MM')
  //         !currentSchedule[slot_date] ? (currentSchedule[dateString] = Array(8).fill(false)) : null
  //         Array.isArray(currentSchedule[dateString]) ? (currentSchedule[dateString][slot_time] = true) : null
  //         return currentSchedule
  //       }, initialSchedule)

  //   for (let day in schedule) {
  //     let slots = schedule[day]
  //     slots.length ? (slots.every((slot: any) => slot === true) ? (schedule[day] = true) : null) : null
  //   }

  //   setSchedule(schedule)
  // }

  return <div>apts</div>
}

export default Appointments
