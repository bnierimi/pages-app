// "use client"

import Editor from "@/components/Editor";
import Avatar from "boring-avatars"
import Link from "next/link";

import { useRouter } from "next/router";
// import { useEffect } from "react";

export default function EditPage() {

  // Get the current url
  // const router = useRouter();
  // const { slug } = router.query;

  const slug = "23d3d9j2"

  const pageContent = `
    not an editor yet
    will def use a Markdown editor
    `

  // useEffect(()=>{
  //   console.log(slug);
  // }, []);

  return (

    // (app page)
    <main className="h-mobileScreen md:h-full w-full relative flex flex-col space-y-4">

      {/* (app page): header */}
      <header className="w-full bg-amber-500 text-zinc-700 py-2 px-2 flex items-center justify-between">
        <div className="flex items-center space-x-1">

          {/* ~ header: page title */}
          <h1 className="text-xl font-semibold flex items-center bg-transparent/10dark:bg-zinc-500/20 py-1 pl-1 pr-3 rounded-full space-x-1.5">

            {/* ~ page title: page avatar */}
            <div className="overflow-hidden rounded-full">
              <Avatar
                size={27}
                name="Pages"
                variant="bauhaus"
              />
            </div>
            <span className="">Page 0803</span>
          </h1>
        </div>

        {/* ~ header: more btn */}
        <button id="eachViewRowMore-btn" title="More" className="flex p-1 relative hover:bg-transparent/10 rounded-full focus:outline-none focus:ring-1 focus:ring-violet-600">
            <i className="icon icon-ic_fluent_more_vertical_20_regular flex text-xl"></i>
        </button>
      </header>

      {/* (app page): content */}
      <textarea value={pageContent} class="w-full h-full bg-transparent border-none"/>
      {/*<section className="w-full h-full">
        <Editor data={pageContent} editable={true}/>
      </section>*/}

      {/* (app page): edit page btn */}
      <button title="Save page" className="flex p-2 fixed bottom-3 right-3 md:bottom-5 md:right-5 bg-amber-500 hover:bg-amber-400 dark:text-zinc-700 rounded-full focus:outline-none focus:ring-1 focus:ring-violet-600 shadow-lg transition-all ease-in-out">
        <i className="icon icon-ic_fluent_dismiss_20_filled flex text-2xl"></i>
      </button>
    </main>
  )
}
