import Link from "next/link";
import style from "./page.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className={style.page}>
      <Image src={"/hero.png"} alt="logo" width={200} height={200}/>
      <h1>Bienvenue de contact</h1>
      <Link href="/contacts" className="btn-link">Visiter notre application</Link>
    </div>
  );
}

