// Add this directive at the top
"use client"; 

import React, { useEffect } from 'react';

function Notion() {
  useEffect(() => {
    // Redirect to the desired URL
    window.location.href = 'https://www.notion.so/appetitestudio/Maktaba-Club-1130c02b1ead80d0bb7af4307824838e';
  }, []); // This runs only once when the component mounts

  return null; // No need to render anything
}

export default Notion;
