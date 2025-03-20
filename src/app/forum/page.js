"use client"

const forums = [
  { name: "Beginners", description: "Discussions about C++ programming for beginners", lastTopic: "Getter for enum member returns a copy of enum?", date: "Mar 19, 2025", author: "TheIdeasMan" },
  { name: "Windows Programming", description: "Win32, MFC, ATL, C++/CLI, .NET ...", lastTopic: "Formatted Console Log with Datetime", date: "Mar 12, 2025", author: "seeplus" },
  { name: "UNIX/Linux Programming", description: "Programming C++ for UNIX and Linux", lastTopic: "tzdb: cannot locate zone", date: "Mar 3, 2025", author: "spistol" },
  { name: "General C++ Programming", description: "Anything about programming in C++", lastTopic: "Use C++ 20 with Embarcadero", date: "Mar 18, 2025", author: "salem c" },
  { name: "Lounge", description: "Discussions about this website, or other topics not related to C++ programming", lastTopic: "I wrote a cron job!", date: "Mar 15, 2025", author: "jonnin" },
  { name: "Jobs", description: "Job offers for C++ programmers.", lastTopic: "Jobs", date: "Apr 18, 2024", author: "deleted account xyzzy" },
  { name: "Articles", description: "How-to's and other technical articles", lastTopic: "How to Make a Game?", date: "Jul 29, 2011", author: "anonymous23323124" }
];

export default function ForumPage() {


  return (
    <div className={ "bg-gray-100 text-gray-900 min-h-screen"}>
      <div className="container mx-auto py-6 px-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-white">Forum</h1>
        </div>

        <div className="grid grid-cols-4 gap-6">
          <div className="col-span-1 bg-gray-200 dark:bg-gray-800 p-4 rounded-md">
            <h2 className="text-xl font-semibold mb-4 text-white">Forum Categories</h2>
            <ul>
              {forums.map((forum, index) => (
                <li key={index} className="mb-2 text-blue-500 font-semibold cursor-pointer hover:underline">
                  {forum.name}
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-3">
            <div className="bg-gray-300 dark:bg-gray-700 p-4 rounded-md text-lg font-semibold text-white">Last Active Topics</div>
            {forums.map((forum, index) => (
              <div key={index} className="p-4 border-b dark:border-gray-600">
                <h3 className="text-xl font-semibold text-blue-500 cursor-pointer hover:underline">{forum.name}</h3>
                <p className="text-gray-600 dark:text-gray-400">{forum.description}</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                  <span className="font-semibold">Latest:</span> {forum.lastTopic} - <span className="italic">{forum.date}</span> by {forum.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}