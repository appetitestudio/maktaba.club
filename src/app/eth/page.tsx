// Add this directive at the top
"use client"; 

import React, { useEffect } from 'react';

function Eth() {
  useEffect(() => {
    // Redirect to the desired URL
    window.location.href = 'https://appetitestudio.notion.site/Ethereum-Developer-Bootcamp-915187c6fa1e483daf9563b1af035f4e?pvs=74';
  }, []); // This runs only once when the component mounts

  return null; // No need to render anything
}

export default Eth;
