import React, { useState } from 'react';
import '../components/DropdownComponent.css';
const DropdownComponent = () => {
  const [isOpen, setIsOpen] = useState(false); // State to keep track of dropdown open/closed status

  // Function to toggle dropdown open/closed status
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown-container">
      <button className="dropdown-button" onClick={toggleDropdown}>
        Get Clues
      </button>
      {isOpen && (
        <ul className="dropdown-list">
          <li className="dropdown-item">* Start from the corners: One common strategy is to start from one of the corners, typically the top-left corner, and build your numbers from there. This allows you to consolidate tiles and create larger numbers in a more organized manner.</li>
          <li className="dropdown-item">* Keep the highest number in a corner: Try to keep your highest number tile in a corner of the board, preferably in the opposite corner of where you started. This allows you to build around it and make larger numbers more easily.</li>
          <li className="dropdown-item">* Merge smaller tiles first: Merge smaller tiles first to create larger tiles. For example, if you have two "2" tiles next to each other, merge them to create a "4" tile. This helps you to keep the board clear and create space for new tiles to appear.</li>
          <li className="dropdown-item">* Create empty spaces: Try to create empty spaces on the board to allow for more tiles to appear. To do this, consolidate tiles and move them towards one side of the board. This will create empty spaces for new tiles to spawn.</li>
          <li className="dropdown-item">* Keep the board balanced: Try to keep the board balanced by distributing tiles evenly across the board. This prevents one side of the board from becoming too crowded, making it difficult to merge tiles or create larger numbers.</li>
          {/* Add more list items for additional points */}
        </ul>
      )}
    </div>
  );
};

export default DropdownComponent;
