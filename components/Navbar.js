import Link from "next/link"

const links = ["search", "me", "collections", "more"]

const Navbar = () => {
  return (
    <nav className="fixed bottom-0 left-0 w-full h-20 bg-white ">
      <ul className="flex items-center px-8 justify-between h-full">
        {links.map((link, index) => (
          <li>
            <Link href={link}>{link}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
export default Navbar
