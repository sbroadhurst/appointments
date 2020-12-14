import React, { useEffect, useRef } from 'react'
import toothicon from '../assets/Icons/toothmapicon.png'

export default function Map({ options, onMount, className }) {
  const props = { ref: useRef(), className }
  const onLoad = () => {
    const map = new window.google.maps.Map(props.ref.current, options)

    const marker = new window.google.maps.Marker({
      position: { lat: 28.3852, lng: -81.5639 },
      map: map,
      title: "Stephen's Dental Clinic",
      animation: window.google.maps.Animation.DROP,
      icon: toothicon,
    })

    marker.setMap(map)

    onMount && onMount(map)
  }

  useEffect(() => {
    if (!window.google) {
      const script = document.createElement(`script`)
      script.type = `text/javascript`
      script.src = `https://maps.google.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API_KEY}`
      const headScript = document.getElementsByTagName(`script`)[0]
      headScript.parentNode.insertBefore(script, headScript)
      script.addEventListener(`load`, onLoad)
      return () => script.removeEventListener(`load`, onLoad)
    } else onLoad()
  })

  return <div {...props} style={{ height: `70vh`, margin: `1em 0`, borderRadius: `0.5em` }} />
}

Map.defaultProps = {
  options: {
    center: { lat: 48, lng: 8 },
    zoom: 5,
  },
}
