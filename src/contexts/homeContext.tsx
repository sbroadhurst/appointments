import React, { createContext, FunctionComponent } from 'react'

import dentalRadiology from '../assets/Home/dentalRadiology.jpg'
import hospitalDental from '../assets/Home/hospitalDental.jpg'
import oncology from '../assets/Home/oncology.jpg'
import oralHealth from '../assets/Home/oralHealth.jpg'
import pediatric from '../assets/Home/pediatric.jpg'
import sedation from '../assets/Home/sedation.jpg'
import miami from '../assets/Home/miami.png'

import cameraIcon from '../assets/Icons/cameraIcon.svg'
import clipboardIcon from '../assets/Icons/clipboardIcon.svg'
import hospitalIcon from '../assets/Icons/hospitalIcon.svg'
import oralHealthIcon from '../assets/Icons/oralHealthIcon.svg'
import pediatricIcon from '../assets/Icons/pediatricIcon.svg'
import sedationIcon from '../assets/Icons/sedationIcon.svg'

export const HomeContext = createContext({})

interface IProps {}

const AssetProvider: FunctionComponent<IProps> = ({ children }) => {
  const state = {
    homeCards: [
      {
        text: 'Oral Health',
        link: '/oralHealth',
        image: oralHealth,
        icon: oralHealthIcon,
        color: '#ffc21a',
      },
      {
        text: 'Pediatric Dentistry',
        link: '/pediatric',
        image: pediatric,
        icon: pediatricIcon,
        color: '#004b91',
      },
      {
        text: 'Sedation',
        link: '/sedation',
        image: sedation,
        icon: sedationIcon,
        color: '#2cbec3',
      },
      {
        text: 'Hospital-Based Dentistry',
        link: '/hospitalBased',
        image: hospitalDental,
        icon: hospitalIcon,
        color: '#915aa3',
      },
      {
        text: 'Oral Oncology Clinic',
        link: '/oralOncology',
        image: oncology,
        icon: clipboardIcon,
        color: '#00beff',
      },
      {
        text: 'Radiology & Pathology',
        link: '/radiology',
        image: dentalRadiology,
        icon: cameraIcon,
        color: '#ff5966',
      },
    ],
    homeImage: miami,
  }
  return <HomeContext.Provider value={state}>{children}</HomeContext.Provider>
}

export default AssetProvider
