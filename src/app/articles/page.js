"use client"
import { useState } from "react";


import { motion } from "framer-motion";

function Card({ children }) {
    return <div className="bg-white dark:bg-gray-800 shadow-md p-4 rounded-lg">{children}</div>;
  }
  
function CardContent({ children }) {
    return <div className="mt-2">{children}</div>;
  }

const articles = [
    { title: "How to avoid bugs using modern C++", author: "PVSCoder", date: "Sep 16, 2016", score: 4.3, votes: 919, categories: ["Tips and Tricks", "Standard Library", "C++ 11"] },
    { title: "Learning Computer Programming Terminology", author: "Sean Alvarez", date: "Aug 25, 2016", score: 3.7, votes: 456, categories: ["How-To"] },
    { title: "C++ class for generate Fibonacci series", author: "mhcrnl", date: "Aug 9, 2016", score: 3.6, votes: 723, categories: ["Source Code", "C++ 11"] },
    { title: "C++ casting", author: "Uk Marine", date: "May 15, 2016", score: 4.0, votes: 472, categories: ["Visual C++", "Tips and Tricks", "Source Code", "How-To"] },
    { title: "Safe Clearing of Private Data", author: "AndreyKarpov", date: "Apr 6, 2016", score: 4.6, votes: 143, categories: ["Tips and Tricks", "Language Features", "How-To"] },
    { title: "How I Learned A Vital Borland C++ Coding Technique I Couldn't Learn Alone", author: "analyzoh", date: "Mar 23, 2016", score: 3.6, votes: 202, categories: ["How-To", "Source Code", "Tips and Tricks"] },
    { title: "Sierpinski Triangle Fractal - The easiest way to produce randomness", author: "bilalCh213", date: "Oct 13, 2015", score: 4.3, votes: 924, categories: ["Tools and Libraries", "Source Code", "How-To", "Graphics and multimedia", "Algorithms"] },
    { title: "Koch Fractal - One of the easiest algorithms with graphics", author: "bilalCh213", date: "Oct 1, 2015", score: 4.2, votes: 348, categories: ["Tools and Libraries", "Source Code", "Graphics and multimedia", "Algorithms"] },
];

const categories = [
    { name: "Algorithms", description: "Algorithms and formulas for specific purposes" },
    { name: "C++ 11", description: "The new C++ standard" },
    { name: "Graphics and multimedia", description: "Including DirectX, OpenGL, ..." },
    { name: "How-To", description: "Guided sets of instructions on a particular topic" },
    { name: "Language Features", description: "Specific C++ language features" },
    { name: "Unix/Linux programming", description: "For all UN*X platforms" },
    { name: "Source Code", description: "" },
    { name: "Standard Library", description: "C++ standard library" },
    { name: "Tips and Tricks", description: "Programming tips" },
    { name: "Tools and Libraries", description: "Compilers, IDEs, debuggers, proprietary libraries..." },
    { name: "Visual C++", description: "Including MFC, ATL, C++/CLI, ..." },
    { name: "Windows API", description: "Programming Windows using its API" }
  ];

export default function ArticlesPage() {


  return (
    <div className= "bg-gray-100 text-gray-900 min-h-screen">
      <div className="container mx-auto py-6 px-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Articles</h1>
          
        </div>

        <div className="flex flex-row gap-6">
          <div className="flex flex-col gap-6 w-3/4">
            {articles.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className={ "bg-white shadow-md transition-transform hover:scale-105 hover:shadow-lg"}>
                  <CardContent className="p-6">
                    <h2 className="text-2xl font-semibold mb-2 text-white">{article.title}</h2>
                    <p className="text-sm text-gray-500">by {article.author} | {article.date}</p>
                    <p className="mt-2 text-sm text-gray-400">Categories: {article.categories.join(", ")}</p>
                    <p className="mt-2 text-yellow-500 font-semibold">⭐ {article.score} ({article.votes} votes)</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="w-1/4">
            <h2 className="text-xl font-semibold mb-4">Categories</h2>
            <ul>
              {categories.map((category, index) => (
                <li key={index} className="mb-2">
                  <p className="text-blue-500 font-semibold">{category.name}</p>
                  <p className="text-sm text-gray-500">{category.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
