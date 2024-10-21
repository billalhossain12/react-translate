import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <Link to="/"><h3 className="font-bold text-[1.5rem] italic">Motivation</h3></Link>
      <ul className="flex items-center gap-10">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/service">Services</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/chart">Chart</Link>
        </li>
        <li>
          <Link to="/animation">Animation</Link>
        </li>
      </ul>
    </header>
  );
}
