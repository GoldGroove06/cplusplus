"use client"
import Link from 'next/link';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-800 to-blue-900 text-white p-4 flex justify-between items-center shadow-md sticky top-0 z-50">
      <div className="text-2xl font-extrabold tracking-wide">CPlusPlus.com</div>
      <div className="hidden md:flex space-x-6 text-lg font-medium">
        <Link href="/tutorials" className="hover:text-gray-300 transition">Tutorials</Link>
        <Link href="/reference" className="hover:text-gray-300 transition">Reference</Link>
        <Link href="/articles" className="hover:text-gray-300 transition">Articles</Link>
        <Link href="/forum" className="hover:text-gray-300 transition">Forum</Link>
      </div>
      <div className="md:hidden cursor-pointer text-xl">☰</div>
      <div className="hidden md:flex space-x-4">
        <button className="bg-white text-blue-900 px-4 py-2 rounded-lg shadow-md hover:bg-gray-200 transition">Sign Up</button>
        <button className="border border-white px-4 py-2 rounded-lg hover:bg-gray-700 transition">Log In</button>
      </div>
    </nav>
  );
};

const forumData = [
  {
    title: "Getter for enum member returns a copy of enum?",
    author: "ElusiveTau",
    desc: "I came across something non-intuitive, found a solution, but don't fully understand why the solution works...",
    link: "/forum/thread1",
    date: "Mar 18, 2025",
    time: "5:42 PM",
    replies: 7
  },
  {
    title: "Use C++ 20 with Embarcadero",
    author: "bistelA0005",
    desc: "I have been using C++ builder for some C projects. It works really well. However, I have been trying to run some code...",
    link: "/forum/thread2",
    date: "Mar 18, 2025",
    time: "9:06 AM",
    replies: 4
  }
];

const ForumCard = ({ title, author, desc, link, date, time, replies }) => {
  return (
    <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-lg shadow-lg mb-4 transition">
      <Link href={link} className="text-blue-600 hover:underline text-lg font-bold block mb-2">
        {title}
      </Link>
      <p className="text-gray-500 text-sm">Posted by {author} on {date} at {time} | {replies} replies</p>
      <p className="text-gray-700 mt-2">{desc.length > 120 ? `${desc.substring(0, 120)}...` : desc}</p>
    </motion.div>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white text-center p-6 mt-10 text-sm">
      &copy; {new Date().getFullYear()} CPlusPlus.com - All Rights Reserved
    </footer>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 text-gray-900 font-sans">
      <Navbar />
      <main className="max-w-6xl mx-auto py-12 px-6">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          <h1 className="text-3xl font-extrabold text-center mb-8">Explore the C++ Reference</h1>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold">Tutorials</h2>
            <p className="text-gray-700">Learn C++ with detailed explanations and examples.</p>
            <Link href="/tutorials" className="text-blue-500 hover:underline">Browse Tutorials</Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold">Reference</h2>
            <p className="text-gray-700">Find detailed information about C++ classes and functions.</p>
            <Link href="/reference" className="text-blue-500 hover:underline">Browse Reference</Link>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold">Articles</h2>
            <p className="text-gray-700">Read and contribute C++ articles.</p>
            <Link href="/articles" className="text-blue-500 hover:underline">Browse Articles</Link>
          </motion.div>
        </div>
        
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Latest Forum Activity</h2>
          {forumData.map((thread, index) => (
            <ForumCard key={index} {...thread} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
