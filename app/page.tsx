// import Image from 'next/image';
import Link from "next/link";
import Avatar from "boring-avatars";

import ViewRowBtn from "@/components/ViewRowBtn";
// import './app.js';

export default function Home() {
  
  const dbData = [
    "[ ] {on, off}line toast", "[*] make +error.svelte", "[ ] npm install flowbite", "[ ] another word for {label, tag, playlist}", "t/kagayaki.be-E", "log{book, pose}", "grandline", "Contract code sample", "henjin", "reishi", "night owl", "mandelin - site and reference",  "Challenges", "anime list", "aot", "bank", "knapsack", "kangol", "gon"
  ];

  return (

    // (app)
    <main className="h-mobileScreen md:h-full w-full relative flex flex-col space-y-4">
      
      {/* (app): header */}
      <header className="w-full relative bg-zinc-200dark:bg-zinc-500/10 pt-2 pb-1 px-2 flex md:hidden items-center justify-between rounded-b-2xl">
        <div className="flex items-center space-x-4">
          
          {/* ~ header: menu drawer's btn */}
          <button type="button" title="Menu" id="menuDrawer-btn" data-drawer-target="menuDrawer" data-drawer-show="menuDrawer" aria-controls="menuDrawer" className="p-1 relative hover:bg-transparent/10 dark:hover:bg-zinc-500/20 rounded-full focus:outline-none focus:ring-1 focus:ring-violet-600">
            <i className="icon icon-ic_fluent_navigation_20_regular flex text-lg"></i>
          </button>

          {/* ~ header: title */}
          <h1 className="text-xl font-semibold flex items-center space-x-2 bg-transparent/10 dark:bg-zinc-500/20 py-1 pl-1 pr-3 rounded-full">
            <div className="overflow-hidden rounded-full">
              <Avatar
                size={27}
                name="Pages"
                variant="bauhaus"
              />
            </div>
            <span className="">Pages</span>
          </h1>
        </div>

        <div className="flex items-center space-x-2"></div>
      </header>
      
      {/* (app): list of pages */}
      <section className="w-full">
        
        {/* ~ list of pages: top bar */}
		    <div className="w-full flex items-center justify-between px-4 md:px-20 py-1">
          
          {/* ~ top bar: filter select */}
          <button className="bg-zinc-200 dark:bg-zinc-500/20 hover:bg-zinc-300 dark:hover:bg-zinc-500/30 md:bg-zinc-300 md:hover:bg-zinc-400/50 text-xs flex items-center space-x-1 rounded-full px-2 py-1 focus:outline-none focus:ring-1 focus:ring-violet-600">
            <p className="">Last opened by me</p>
            <i className="icon icon-ic_fluent_arrow_down_20_regular flex text-xs"></i>
          </button>

          <div className="flex items-center space-x-2">

            {/* ~ top bar: search btn */}
            <button title="Search" className="p-1 relative bgzinc-200 hover:bg-zinc-300 dark:md:bg-zinc-500/20 dark:hover:bg-zinc-500/30 md:bg-zinc-300 md:hover:bg-zinc-400/50 rounded-full focus:outline-none focus:ring-1 focus:ring-violet-600">
              <i className="icon icon-ic_fluent_search_20_regular flex text-lg"></i>
            </button>
            
            {/* ~ top bar: view btn */}
            <button title={"View"} className="p-1 relative bgzinc-200 hover:bg-zinc-300 dark:md:bg-zinc-500/20 dark:hover:bg-zinc-500/30 md:bg-zinc-300 md:hover:bg-zinc-400/50 rounded-full focus:outline-none focus:ring-1 focus:ring-violet-600">
              <i className="icon icon-ic_fluent_grid_20_regular flex text-lg"></i>
            </button>
          </div>
        </div>
        
        {/* ~ list of pages: display pages */}
		    <div className={`h-full w-full pb-10 py-1 space-y-1} `}>
				  {
            dbData.map((eachData, key):any => <span key={key}>
              <ViewRowBtn data={eachData}/>
            </span>)
          }
        </div>
        
      </section>

      {/* (app): <sm> create new page btn */}
      <Link href="/pg/new" title="New page" className="flex md:hidden p-2 fixed bottom-3 right-3 bg-amber-500 hover:bg-amber-400 dark:text-zinc-700 rounded-full focus:outline-none focus:ring-1 focus:ring-violet-600 shadow-lg">
        <i className="icon icon-ic_fluent_add_20_filled flex text-2xl"></i>
      </Link>
    </main>
  )
}

