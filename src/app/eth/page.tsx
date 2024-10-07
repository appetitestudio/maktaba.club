"use client"; 

import React, { useEffect } from 'react';
import Head from 'next/head'; // Import Head for metadata

function Eth() {
  useEffect(() => {
    // Redirect to the desired URL
    window.location.href = 'https://appetitestudio.notion.site/Ethereum-Developer-Bootcamp-915187c6fa1e483daf9563b1af035f4e?pvs=74';
  }, []); // This runs only once when the component mounts

  return (
    <>
      <Head>
        <title>Ethereum Developer Bootcamp - Maktaba Club</title>
        <meta name="description" content="Join the Ethereum Developer Bootcamp to fast-track your career in Web3 with hands-on projects, expert mentorship, and a dynamic community." />
        <meta property="og:title" content="Ethereum Developer Bootcamp - Maktaba Club" />
        <meta property="og:description" content="Fast-track your career in Web3 development by joining our Ethereum Bootcamp with hands-on projects and expert mentorship." />
        <meta property="og:url" content="https://appetitestudio.notion.site/Ethereum-Developer-Bootcamp-915187c6fa1e483daf9563b1af035f4e?pvs=74" />
      </Head>
      {/* No need for visible content since it's redirecting */}
    </>
  );
}

export default Eth;
