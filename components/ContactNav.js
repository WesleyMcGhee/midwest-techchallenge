import Image from "next/image";
import Link from "next/link";
export default function ContactNav() {
  return (
    <header className="contact-header">
      <div className="nav-left">
        <img
          src={`/midwesternlogo.png`}
          alt="Midwestern's Logo"
          className="logo-cont"
        ></img>
      </div>
      <div className="nav-right">
        <Link href="/">
          <a className="nav-link">Home</a>
        </Link>
      </div>
    </header>
  );
}
