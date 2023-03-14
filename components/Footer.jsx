import React from 'react'
import { AiFillInstagram,AiOutlineTwitter } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2022 All Right Reserved</p>
      <p className='icon'>
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  )
}

export default Footer