import AddContact from '@/components/add-contact'
import React from 'react'

type Props = {}

export default function page({}: Props) {
  return (
    <div className='mt-2'>
      <h1>Ajouter un contact</h1>
      <AddContact/>
    </div>
  )
}