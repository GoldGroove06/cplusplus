"use client"
import Link from 'next/link';
import Footer from '@/components/Footer';
import ForumCard from '@/components/ForumCard';
import { motion } from 'framer-motion';

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
  },
  {
    title: "Call of Templated Function w/ Explicit Template Argument Fails to Compile",
    author: "mbozzi",
    desc: "Greetings, may I please enquire why compiler reports error for code below as indicated. Thank you kindly...",
    link: "/forum/thread3",
    date: "Mar 16, 2025",
    time: "3:50 AM",
    replies: 1
  },
  {
    title: "I wrote a cron job!",
    author: "jonnin",
    desc: "This is a continuation of Finally switched to Linux Mint. Mint, by default, is constantly popping up...",
    link: "/forum/thread4",
    date: "Mar 15, 2025",
    time: "11:32 PM",
    replies: 12
  },
  {
    title: "Random Story Time",
    author: "jonnin",
    desc: "I once went to McDonalds, waaay back when $5 was expensive, and bought food that totaled something like $6.85...",
    link: "/forum/thread5",
    date: "Mar 14, 2025",
    time: "1:59 PM",
    replies: 19
  }
];




export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-300 text-gray-900 font-sans">
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
    </div>
  );
}
