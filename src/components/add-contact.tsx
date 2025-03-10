'use client';

import { ContactContext } from "@/context/contact-context";
import Contact from "@/types/contact.model";
import { useRouter } from "next/navigation";
import { use } from "react";

type Props = {}

export default function AddContact({}: Props) {
    const router = useRouter();

    const {contacts, setContact} = use(ContactContext);

    const handleSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const nouveauContact: Contact = {
        id:Math.round(Math.random() * 100),
        nom: form.get('nom') as string,
        email: form.get('email') as string,
        numTel: form.get('numTel') as string,
        avatar: "https://avatar.iran.liara.run/public"
    };
    setContact([ nouveauContact, ...contacts]);
    router.push('/contacts');
}

  return <form className='mt-2 flex' onSubmit={handleSubmitForm}>
    <div className="form-group">
        <label htmlFor="nom">Nom du contact</label>
        <input type="text" name="nom" id='' placeholder="Arnold Mbanza" required minLength={4}/>
    </div>
    <div className="form-group">
        <label htmlFor="email">Adresse mail</label>
        <input type="email" name="email" id='' placeholder="arnombanza@gmail.com" required/>
    </div>
    <div className="form-group">
        <label htmlFor="numTel">Numéro de téléphone</label>
        <input type="tel" name="numTel" id='' placeholder="+243 896 441 225" required minLength={10}/>
    </div>

    <button type='submit' className='btn w-full'>Ajouter le contact</button>
  </form>
}