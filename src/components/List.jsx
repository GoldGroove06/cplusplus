import { useState } from "react";
const headers= {
    
     "Atomics and threading library": [
        { name: "atomic", description: "Atomic" },
        { name: "condition_variable", description: "Condition variable" },
        { name: "future", description: "Future" },
        { name: "mutex", description: "Mutex" },
        { name: "thread", description: "Thread" }
      ]
    ,
    
       "Miscellaneous headers": [
        { name: "algorithm", description: "Standard Template Library: Algorithms" },
        { name: "chrono", description: "Time library" },
        { name: "codecvt", description: "Unicode conversion facets" },
        { name: "complex", description: "Complex numbers library" },
        { name: "exception", description: "Standard exceptions" },
        { name: "functional", description: "Function objects" },
        { name: "initializer_list", description: "Initializer list" },
        { name: "iterator", description: "Iterator definitions" },
        { name: "limits", description: "Numeric limits" },
        { name: "locale", description: "Localization library" },
        { name: "memory", description: "Memory elements" },
        { name: "new", description: "Dynamic memory" },
        { name: "numeric", description: "Generalized numeric operations" },
        { name: "random", description: "Random" },
        { name: "ratio", description: "Ratio header" },
        { name: "regex", description: "Regular Expressions" },
        { name: "stdexcept", description: "Exception classes" },
        { name: "string", description: "Strings" },
        { name: "system_error", description: "System errors" },
        { name: "tuple", description: "Tuple library" },
        { name: "typeindex", description: "Type index" },
        { name: "typeinfo", description: "Type information" },
        { name: "type_traits", description: "type_traits" },
        { name: "utility", description: "Utility components" },
        { name: "valarray", description: "Library for arrays of numeric values" }
      ]
    
    };
  
function List (){
    const [search, setSearch] = useState("");
   
     return (
       <div className="max-w-3xl mx-auto p-6 bg-gray-900 text-white rounded-lg shadow-lg">
         <h1 className="text-2xl font-bold mb-4">C Library Reference</h1>
         <input
           type="text"
           placeholder="Search headers..."
           className="w-full p-2 mb-4 border border-gray-600 rounded bg-gray-800 text-white"
           value={search}
           onChange={(e) => setSearch(e.target.value)}
         />
         {Object.entries(headers).map(([category, items]) => {
           const filteredItems = items.filter((item) =>
             item.name.toLowerCase().includes(search.toLowerCase())
           );
           if (filteredItems.length === 0) return null;
   
           return (
             <div key={category} className="mb-4">
               <h2 className="text-xl font-semibold mb-2">{category}</h2>
               <div className="border border-gray-600 rounded-lg">
                 {filteredItems.map((item, index) => (
                   <div
                     key={item.name}
                     className={`flex justify-between p-3 ${
                       index % 2 === 0 ? "bg-gray-800" : "bg-gray-700"
                     }`}
                   >
                     <a
                       href={`#${item.name}`}
                       className="text-blue-400 hover:underline"
                     >
                       {item.name}
                     </a>
                     <span className="text-gray-400">{item.description}</span>
                   </div>
                 ))}
               </div>
             </div>
           );
         })}
       </div>
     );
   }

export default List;
   