'use client'; // Directive pour indiquer que ce composant est un composant client
import { ContactContext } from '@/context/contact-context';
import { contact } from '@/data/contact';
import { ReactNode, useState } from 'react';

type Props = {
    children: ReactNode;
};

export default function Provider({ children }: Props) {
    const [contactsList, setContactsList] = useState(contact);
    return (
        <ContactContext.Provider value={{ contacts: contactsList, setContact: setContactsList }}>
            {children}
        </ContactContext.Provider>
    );
}