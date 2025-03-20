"use client"
import React from "react";
import { CodeBlock, dracula } from "react-code-blocks";

const cppCode1 = `#include <iostream>

int main() {
    std::cout << "Hello World!";
}`;

const cppCode2 = `#include <iostream>

int main() {
    std::cout << "Hello World! ";
    std::cout << "I'm a C++ program";
}`;

const cppCode3 = `#include <iostream>
using namespace std;

int main() {
    cout << "Hello World! ";
    cout << "I'm a C++ program";
}`;

export default function CppTutorial() {
  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Structure of a C++ Program</h1>
      <p className="mb-4">The best way to learn a programming language is by writing programs. Here, we introduce the basic structure of a C++ program.</p>
      
      <div className="mb-6 border border-gray-700 rounded-lg p-4 bg-gray-800">
        <h2 className="text-xl font-semibold mb-2">Hello World Program</h2>
        <CodeBlock text={cppCode1} language="cpp" theme={dracula} />
      </div>
      
      <h2 className="text-xl font-semibold mt-6 mb-2">Breaking Down the Code</h2>
      <ul className="list-disc pl-6 mb-4">
        <li><code>#include &lt;iostream&gt;</code>: Includes the standard input-output library.</li>
        <li><code>int main()</code>: The main function where execution starts.</li>
        <li><code>std::cout &lt;&lt; "Hello World!";</code>: Prints text to the screen.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">Adding More Statements</h2>
      <div className="mb-6 border border-gray-700 rounded-lg p-4 bg-gray-800">
        <CodeBlock text={cppCode2} language="cpp" theme={dracula} />
      </div>
      <p>This version has two <code>std::cout</code> statements to print multiple lines.</p>

      <h2 className="text-xl font-semibold mt-6 mb-2">Using Namespace std</h2>
      <div className="mb-6 border border-gray-700 rounded-lg p-4 bg-gray-800">
        <CodeBlock text={cppCode3} language="cpp" theme={dracula} />
      </div>
      <p>Using <code>using namespace std;</code> allows us to use <code>cout</code> without prefixing it with <code>std::</code>.</p>
    </div>
  );
}
