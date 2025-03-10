import Link from 'next/link'
export default function NotFound() {
  return (
    <div className='flex flex-col center page'>
        <h2>Cette page n’existe pas</h2>
        <Link href="/" className='btn-link'>Retourner</Link>
    </div>
  )
}
