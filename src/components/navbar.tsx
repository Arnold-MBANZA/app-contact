import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="navbar">
      <Link href="/">
        <h4>App contact</h4>
      </Link>
    </header>
  );
}
