"use client"
import CLibraryReference from "@/components/CLibraryReference";
import List from "@/components/List"
import Image from "next/image";

function Reference() {
    return (
      <div className="bg-gray-900">
      
      <div className="text-white bg-gray-900 p-6 m-4">

      <div className="mb-6">
        <h1 className="text-2xl font-bold underline mb-2">Input/Output Stream Library</h1>
        <p className="text-gray-300 mb-4">
          Provides functionality to use an abstraction called streams specially designed to perform input and output
          operations on sequences of characters, like files or strings. This functionality is provided through several
          related classes, as shown in the following relationship map, with the corresponding header file names on top:
        </p>
        <div className="flex justify-center">
          <Image
            src={"/iostream.gif"}
            alt="iostream image"
            height={700}
            width={700}
            className="rounded-lg border border-gray-700 shadow-md"
          />
        </div>
      </div>

 
      
    </div>
    <CLibraryReference/>
    <div className="bg-gray-800 p-4 rounded-lg shadow-md m-4  ">
        <h1 className="text-xl font-semibold underline mb-2">Update Progress</h1>
        <p className="text-gray-400">
          Work is under progress to update the whole reference to the latest standard. To check the status of each
          header, see <span className="text-blue-400 cursor-pointer hover:underline">Update progress</span>.
        </p>
      </div>
    </div>
    )
}

export default Reference;