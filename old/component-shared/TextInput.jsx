export function TextInput({ inputRef, ph }) {
   return (

      <input
         style={{ height: "27px" }}
         type="text"
         className="text-center rounded-md bg-slate-100 border-bottom border-green-300 text-lowercase w-1/2 "
         placeholder={ph}
         ref={inputRef}
         title="Press enter to enlist"
      />

   );
}