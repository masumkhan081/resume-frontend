export function NextPrevious({
   busy,
   error,
   prev,
   next,
   nextText,
   saveAndNext,
   setTestData,
 }) {
   const navigate = useNavigate();
 
   return (
     <div className="px-4 container-fluid mb-3 d-flex justify-content-between ">
       <div className="d-flex justify-content-between gap-4">
         {prev && (
           <Button
             disabled={busy}
             onClick={() => navigate(prev)}
             className="btn btn-sm border-0 py-0 px-1 bg-success bg-opacity-25 text-dark fw-bold rounded-3"
           >
             <BsArrowLeftCircle size={15} className="mb-1 me-1" />
             Prev
           </Button>
         )}
         <Dummy setData={() => setTestData("whatev")} btnText="Test Data" />
         <Dummy setData={() => setTestData("reset")} btnText="Reset" />
       </div>
       {error && <span className="fw-bold">{error}</span>}
       <div className="d-flex gap-3">
         {saveAndNext && (
           <Button
             disabled={busy}
             onClick={saveAndNext}
             className="btn btn-sm border-0 py-0 px-1 bg-success bg-opacity-25 text-dark fw-bold rounded-3"
           >
             {nextText}
           </Button>
         )}
         {next && (
           <Button
             disabled={busy}
             onClick={() => navigate(next)}
             className="btn btn-sm border-0 py-0 px-1 bg-success bg-opacity-25 text-dark fw-bold rounded-3"
           >
             Next <BsArrowRightCircle size={15} className="mb-1" />
           </Button>
         )}
       </div>
     </div>
   );
 }