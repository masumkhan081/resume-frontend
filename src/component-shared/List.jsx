import React from "react";
import { GrClose } from "react-icons/gr";

//
export default function List({ items, removeSkill }) {




  return (
    <div className="flex flex-wrap gap-1 mt-2">
      {items &&
        items.map((item) => {
          return (
            <span
              
              key={item}
              className="pb-0 pt-0 rounded-md px-1 flex items-center font-semibold "
            >
              {item}
              <GrClose
                size={16}
                className="ms-1  p-0.125 border border-red-800 rounded-full shadow-md"
                onClick={() => {

                  removeSkill(item);
                }}
              />
            </span>
          );
        })}
    </div>
  );
}