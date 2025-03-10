import Link from 'next/link'
import React from 'react'

type Props = {}

export default function navbar({}: Props) {
  return (
    <header className="navbar">
        <Link href="/">
            <h4>App contact</h4>
        </Link>
    </header>
  )
}