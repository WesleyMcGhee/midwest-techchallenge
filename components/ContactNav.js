import Image from "next/image";
import Link from "next/link";
export default function ContactNav() {
  return (
    <header>
      <img
        src={`/midwesternlogo.png`}
        alt="Midwestern's Logo"
        className="logo"
      ></img>
      <Link href="/contact">
        <a className="nav-link">Home</a>
      </Link>
    </header>
  );
}
