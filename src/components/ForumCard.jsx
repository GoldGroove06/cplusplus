import Link from 'next/link';
import { motion } from 'framer-motion';

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

  export default ForumCard;