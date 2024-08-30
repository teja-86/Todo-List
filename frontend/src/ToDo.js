import React from 'react';
import { BiEdit } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';

const ToDo = ({ text, updateMode, deleteToDo }) => {
  return (
    <div className="todo flex justify-between items-center bg-gray-200 p-4 rounded-lg shadow-sm mb-2">
      <div className="text text-gray-800 font-medium">{text}</div>
      <div className="icons flex space-x-2">
        <BiEdit 
          className="icon text-blue-500 hover:text-blue-700 cursor-pointer transition-colors duration-200" 
          onClick={updateMode} 
        />
        <AiFillDelete 
          className="icon text-red-500 hover:text-red-700 cursor-pointer transition-colors duration-200" 
          onClick={deleteToDo} 
        />
      </div>
    </div>
  );
};

export default ToDo;
