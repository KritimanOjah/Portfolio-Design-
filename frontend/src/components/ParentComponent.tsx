import React, { useState } from "react";
import ContactUS from "./ContactUS"; // Assuming the file path

const ParentComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false); // Track modal state

  const openModal = () => setIsModalOpen(true); // Function to open the modal
  const closeModal = () => setIsModalOpen(false); // Function to close the modal

  return (
    <div>
      {/* Button to open modal */}
      <button onClick={openModal}>Open Contact Form</button>

      {/* Conditionally render the modal */}
      {isModalOpen && <ContactUS onClose={closeModal} />}
    </div>
  );
};

export default ParentComponent;
