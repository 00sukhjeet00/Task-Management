"use client";
import { useState } from "react";
import TodoList from "./lib/component/TodoList";
import Modal from "./lib/component/Modal";
import {ProtectRoute} from '@/app/lib/component/routeProtection'

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };
  return (
    <div className="container mx-auto">
      <TodoList />
      <button
        className="fixed bottom-4 right-4 bg-[#d34467] hover:bg-[#d3446795] text-white font-bold py-2 px-3 rounded-full"
        onClick={handleOpenModal}
      >
        <i className="fa-solid fa-plus fa-lg"></i>
      </button>
      <Modal isOpen={isOpen} onClose={handleCloseModal} />
    </div>
  );
}

export default ProtectRoute(Home)
