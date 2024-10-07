import React from 'react'
import ThemeSwitch from '../ThemeSwitch/ThemeSwitch'

function Navigation() {
  return (
    <div className="flex justify-center w-full">
      <nav className="flex items-center space-x-4">
        {[
          ['Notion', 'https://www.notion.so/appetitestudio/Maktaba-Club-1130c02b1ead80d0bb7af4307824838e'],
          ['ETH Bootcamp Apply', '/eth-apply'],

        ].map(([title, url]) => (
          <a 
            key={title} 
            href={url} 
            className="rounded-lg px-3 py-2 font-semibold text-slate-800 hover:bg-slate-700 hover:text-slate-100 dark:text-slate-100 dark:hover:text-slate-800 dark:hover:bg-zinc-300"
          >
            {title}
          </a>
        ))}
      
      </nav>
    </div>
  )
}

export default Navigation