import Link from 'next/link'
import React from 'react'

type Props = {}

export default function NotFound({}: Props) {
  return (
    <div className='center flex mt-2'>
        <h2>Contact non trouvé</h2>
        <p>Désolé! Vous essayez d'accéder à un contact qui n'est pas enregistré dans la base de donnée</p>
        <Link href={"/contacts"} className='btn-danger'>Retourner</Link>
  </div>
  )
  
}