"use client";
import { ContactContext } from '@/context/contact-context';
import { use } from 'react';
import ContactCard from './contact-card';

export default function ContactList() {
  const { contacts } = use(ContactContext);

  return (
    <div className='w-full'>
      {contacts.length === 0 && <h5>Il n&apos;y a plus de contact</h5>}
      {contacts.map((contact) => (
        <ContactCard contact={contact} key={contact.id} />
      ))}
    </div>
  );
}
