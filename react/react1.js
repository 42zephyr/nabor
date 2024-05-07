import React, { useEffect, useState } from "react";
function MyModal({ open, disableGlobalScroll, children }) {
  const [isMounted, setIsMounted] = useState(false);



  useEffect(() => {
    if (disableGlobalScroll && isMounted) {
      if (open) 
        document.body.style.overflow = 'hidden';
      else 
        document.body.style.overflow = 'auto';
    }
  }, [open, disableGlobalScroll, isMounted]);

  if (!open) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        padding: '20px',
      }}
    >
      {children}
    </div>
  );
}
export function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      <MyModal open={open} disableGlobalScroll={true}>
        <div>
          <h1>Some content</h1>
          <button onClick={() => setOpen(false)}>Close</button>
        </div>
      </MyModal>
    </>
  );
}
