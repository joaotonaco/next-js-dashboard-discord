'use client';

import { HiOutlinePencilAlt } from 'react-icons/hi';

// import { Dialog, Transition } from '@headlessui/react';
// import { Fragment, useState } from 'react';

function ConfigItem({
  name,
  type,
}: {
  name: string;
  type: 'string' | 'number' | 'channel' | 'role';
}) {
  // const [isOpen, setIsOpen] = useState(false);

  // const openModal = () => setIsOpen(true);

  // const closeModal = () => setIsOpen(false);

  return (
    <div className="flex flex-col gap-1 items-center w-fit">
      <p className="font-bold">{name}</p>
      <div className="group flex items-center relative w-fit">
        <p className="bg-neutral-800 rounded-3xl py-1 px-3 w-fit"># channel-1</p>
        <button className="px-2 py-2 rounded-full opacity-0 group-hover:opacity-80 transition-opacity duration-300 delay-0 absolute -right-7">
          <HiOutlinePencilAlt />
        </button>
      </div>
    </div>
  );

  {
    /* <>
   <button
     onClick={openModal}
     className="group flex items-center justify-center h-7 bg-neutral-800 rounded-3xl text-[clamp(0.8rem,1vw+0.5rem,0.9rem)] py-4 px-5 cursor-pointer w-fit font-semibold"
   >
     <p className="transition-colors duration-150 group-hover:text-neutral-400 select-none line-clamp-1">
       {name}
     </p>
   </button>
   <Transition appear show={isOpen} as={Fragment}>
     <Dialog as="div" onClose={closeModal} className="relative z-50">
       <Transition.Child
         as={Fragment}
         enter="ease-out duration-300"
         enterFrom="opacity-0"
         enterTo="opacity-100"
         leave="ease-in duration-200"
         leaveFrom="opacity-100"
         leaveTo="opacity-0"
       >
         <div className="fixed inset-0 bg-black/50" aria-hidden="true" />
       </Transition.Child>
       <div className="fixed inset-0 overflow-y-auto">
         <div className="flex min-h-full items-center justify-center p-4">
           <Transition.Child
             as={Fragment}
             enter="ease-out duration-300"
             enterFrom="opacity-0 scale-95"
             enterTo="opacity-100 scale-100"
             leave="ease-in duration-200"
             leaveFrom="opacity-100 scale-100"
             leaveTo="opacity-0 scale-95"
           >
             <Dialog.Panel className="w-full max-w-sm overflow-hidden rounded-2xl p-6 bg-neutral-700 shadow-xl transition-all">
               <Dialog.Title>{name}</Dialog.Title>
               <p>Teste som teste</p>
               <button onClick={closeModal}>Cancel</button>
             </Dialog.Panel>
           </Transition.Child>
         </div>
       </div>
 </Dialog>
   </Transition>
 </> */
  }
}

export default ConfigItem;
