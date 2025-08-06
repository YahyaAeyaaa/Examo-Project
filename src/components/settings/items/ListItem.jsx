import React from 'react'

const ListItem = ({ title, type, content, number }) => {
  return (
    <div className="pl-2">
      <h1 className="text-xl font-medium">{number}. {title}</h1>
      <div className="flex items-stretch gap-4 rounded-md p-4 pl-5">
        <div className="w-1 flex-shrink-0 rounded-full bg-blue-500"></div>
        <div className="flex-1">
          {type === 'text' ? (
            <p className="text-base text-[#676767]">{content}</p>
          ) : (
            <ul className="list-disc pl-5 text-base text-[#676767] space-y-2">
              {content.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};




export default ListItem
