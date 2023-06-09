import './globals.css'
// import './app.js'

import "../public/extlib/fluent/FluentSystemIcons-Resizable.css"
// import "../public/extlib/flowbite/flowbite.min.js"
import "../public/extlib/flowbite/flowbite.min.css"

// import { Inter } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'tctrg.Pages',
  description: 'Pages app for taking notes and organising them together; yours Tcitrogg',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      {/* <body className={`${inter.className} bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-200`}> */}
      <body className={`bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-200`}>
        {children}

        {/* (frame) */}
        <section className="h-full w-full relative flex items-center md:space-x-2 md:p-2">
        
          {/* (frame): aside */}
          <aside className="h-full w-3/12 hidden md:flex flex-col rounded-xl space-y-2">
            
            {/* ~ aside: header */}
            <header className="w-full relative bg-zinc-200 dark:bg-zinc-500/20 py-1.5 pr-1.5 pl-4 flex items-center justify-between rounded-full">

              {/* ~ header: title */}
              <h1 className="text-lg font-medium flex items-center space-x-2">
                <div className="text-zinc-500 dark:text-zinc-300 rounded-md flex items-center space-x2">
                  <p className="">Tcitrogg</p>
                </div>
                <span className="p-0.5 rounded-full bg-zinc-500 dark:bg-zinc-400"></span>
                <span className="">Pages</span>
              </h1>
            </header>
            
            {/* ~ aside: board */}
            <section className="w-full h-full flex flex-col justify-between bg-zinc-200 dark:bg-zinc-500/20 rounded-2xl p-2">
              
              {/* ~ board: upper division */}
              <div className="w-full space-y-4">
                <div className="w-full flex items-center justify-between">

                  {/* ~ upper division: <lg> create new page's btn */}
                  <button title="New Page" className="w- p-2 pr-3 bg-amber-500 hover:bg-amber-400 dark:text-zinc-700 rounded-xl focus:outline-none focus:ring-1 focus:ring-violet-600 flex items-center space-x-2">
                    <i className="icon icon-ic_fluent_add_20_filled flex text-xl"></i>
                    <p className="font-semibold">New page</p>
                  </button>
                  
                  {/* ~ upper division: <lg> theme btn */}
                  <div className="flex items-center space-x-2">
                    {"<ThemeBtn/>"}
                  </div>
                </div>

                {/* ~ upper division: other btns */}
                <section className="w-full space-y-1">
                  <button type="button" className="w-full flex items-center space-x-2 p-2 hover:bg-zinc-300 dark:hover:bg-zinc-500/20 rounded-xl focus:outline-none focus:ring-1 focus:ring-violet-600">
                    <i className="icon icon-ic_fluent_archive_20_regular flex text-xl"></i>
                    <p className="font-medium">Archive</p>
                  </button>
                  <button type="button" className="w-full flex items-center space-x-2 p-2 hover:bg-zinc-300 dark:hover:bg-zinc-500/20 rounded-xl focus:outline-none focus:ring-1 focus:ring-violet-600">
                    <i className="icon icon-ic_fluent_delete_20_regular flex text-xl"></i>
                    <p className="font-medium">Bin</p>
                  </button>
                </section>
              </div>
              
              {/* ~ board: lower division */}
              <div className="w-full space-y-1">
                <a href="/" className="flex rounded-xl focus:outline-none focus:ring-1 focus:ring-violet-600">
                  <div className="w-full flex items-center space-x-2 p-2 hover:bg-zinc-300 dark:hover:bg-zinc-500/20 rounded-xl">
                    <i className="icon icon-ic_fluent_info_20_regular flex text-xl"></i>
                    <p className="font-medium">Help and feedback</p>
                  </div>
                </a>
              </div>
              
            </section>
          </aside>

          {/* (frame): Body */}
          <div className="h-full w-full md:w-9/12 md:bg-zinc- dark:md:bg-zinc-500/20 md:rounded-2xl relative overflow-y-auto scrollbar">
            <slot/>
          </div>

        </section>
        
        <script src="../public/extlib/flowbite/flowbite.min.js"></script>
        <script src="./app.js"></script>
      </body>
    </html>
  )
}
