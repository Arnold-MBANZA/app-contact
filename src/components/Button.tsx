'use client';

import React from 'react'

type Props = {}

export default function Button({}: Props) {
    const handleClick = () => {
        console.log("Je suis cliqué");
    }

  return (
    <button onClick={handleClick}>
        Visiter l'application
    </button>
  )
}