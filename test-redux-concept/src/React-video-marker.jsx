import React, { Component } from 'react'
import ReactPlayer from 'react-player'

export default class VideoMarker extends Component {
  render () {
    return <ReactPlayer url='https://www.youtube.com/watch?v=J7QUypACTHU' playing />
  }
}