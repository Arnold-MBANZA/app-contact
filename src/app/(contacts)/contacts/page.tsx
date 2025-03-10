import ContactList from '@/components/contact-list'
import Link from 'next/link'

export default function Page() {
  return (
    <div className='mt-2'>
      <header className='flex between'>
        <h1>Liste de contacts</h1>
        <Link href="/add-contact" className='btn'>
          Ajouter un contact
        </Link>
        <ContactList/>
      </header>
    </div>)}