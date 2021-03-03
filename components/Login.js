import React from 'react'
import Style from './styles.scss'

export default function Login() {
  return (
    <div className='div'>
      Login component
      <div className="scope bg-red-500">THis is scoped styling</div>
      <style jsx>{Style}</style>
    </div>
  )
}
