export function ToastMessage({ toast, setToast }) {
   return (
      <small className="mt-1 rounded-3 mb-1 d-block text-end">
         {toast}
         <Image src={angry} style={{ height: "25px", width: "28px" }}></Image>
         <GrClose
            className="mx-1"
            size={16}
            onClick={() => {
               setToast("");
            }}
         />
      </small>
   );
}