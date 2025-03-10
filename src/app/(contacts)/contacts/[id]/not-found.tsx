import Link from 'next/link'
export default function NotFound() {
  return (
    <div className='center flex mt-2'>
        <h2>Contact non trouvé</h2>
        <p>Désolé! Vous essayez d’accéder à un contact qui n’est pas enregistré dans la base de données.</p>
        <Link href="/contacts" className='btn-danger'>Retourner</Link>
    </div>
  )}