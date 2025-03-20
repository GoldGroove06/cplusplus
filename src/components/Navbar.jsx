import Link from 'next/link';

const Navbar = () => {
    return (
      <nav className="bg-blue-900 text-white p-4 flex justify-between items-center">
        <div className="text-xl font-bold"><Link href="/">CPlusPlus.com</Link></div>
        <div className="hidden md:flex space-x-4">
          
          <Link href="/reference" className="hover:underline">Reference</Link>
          <Link href="/articles" className="hover:underline">Articles</Link>
          <Link href="/forum" className="hover:underline">Forum</Link>
          <Link href="/codestructure" className="hover:underline">Structure of Code</Link>
        </div>
        <div className="md:hidden">☰</div>
        <div>
          <button className="bg-white text-blue-900 px-4 py-2 rounded hover:bg-gray-200">Sign Up</button>
          <button className="ml-2 border border-white px-4 py-2 rounded hover:bg-gray-700">Log In</button>
        </div>
      </nav>
    );
  };

export default Navbar;