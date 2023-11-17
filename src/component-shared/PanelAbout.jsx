export function PanelAbout({ title, about }) {
   return (
      <div>
         <span
            text="dark"
            className="text-center bg-success bg-opacity-10 d-block py-0 "
         >
            {about == "projects" && (
               <MdDeveloperMode size={18} className=" me-1 mb-1" />
            )}
            {about == "hobbies" && <BiListPlus size={21} className=" me-1 mb-0" />}
            {about == "education" && (
               <FaUniversity size={19} className=" mb-1 me-1" />
            )}
            {about == "experience" && (
               <GiOfficeChair size={18} className=" mb-1 me-1" />
            )}

            {title}
         </span>
      </div>
   );
}