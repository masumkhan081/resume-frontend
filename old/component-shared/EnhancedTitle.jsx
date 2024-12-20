export function EnhancedTitle({ title, instruction, msg, type }) {
   return (
      <span className="block rounded-md py-0 ps-0   text-teal-800 text-start">
         {/* {type === "front" ? (
           <FcDataSheet size={18} className="me-1 rounded-3" />
         ) : type === "back" ? (
           <AiFillApi size={18} className="me-1 rounded-3" />
         ) : type === "database" ? (
           <AiFillDatabase size={15} className="me-1 rounded-3" />
         ) : null} */}

         {/* {title} */}
         <span className="font-semibold ">{title}</span>

         <span className="ms-1 font-medium ">{instruction}</span>
         <span className="ms-1 px-2 bg-teal-900 text-slate-200 rounded-full">
            {msg}
         </span>
      </span>
   );
}