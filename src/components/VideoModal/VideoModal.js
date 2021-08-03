import React,  {useState, useEffect } from 'react';
import { Modal } from 'antd';
import ReactPlayer from 'react-player';

import './VideoModal.css'

const VideoModal = (props) => {
  const { videoKey, videoPlatform, isOpen, close } = props
  const [urlVideo, setUrlVideo] = useState(null)

  useEffect(() => {
    switch (videoPlatform) {
      case "YouTube":
        setUrlVideo(`https://youtu.be/${videoKey}`)
      break
      case "Vimeo":
        setUrlVideo(`https://vimeo.com/${videoKey}`)
      break
      default:
        break
    } 
  }, [videoKey, videoPlatform]);


  return (
    <Modal
      className="modal-video"
      visible={isOpen}
      centered
      onCancel={close}
    >
      <ReactPlayer 
        url={urlVideo}
        controls
      />
    </Modal>
  )
}

export default VideoModal;