import Link from "next/link";

export default function ViewRowBtn({ data }: any) {
  return (

    // (view row's btn)
    <div className={`w-full transition-all duration-300 ease-in-out flex justify-between hover:bg-zinc-200 dark:hover:bg-zinc-500/20 md:hover:bg-zinc-300 px-4 border md:px-20 border-transparent items-center focus-within:outline-none focus-within:ring-1 focus-within:ring-violet-600 relative `}>

      {/* (view row's btn): link to page */}
      <Link href={`/pg/${data.id}`} className={`w-full py-2.5 flex focus:outline-none focus:ring-0`}>
        <div className={`w-full flex items-start space-x-2.5`}>

          {/* ~ link to page: icon */}
          <div className="flex">
            <i className={`icon icon-ic_fluent_text_align_left_20_regular flex text-lg text-zinc-700 bg-amber-500 rounded p-1`}></i>
          </div>

          {/* ~ link to page: info */}
          <div className={`relative flex flex-col w-8/12 md:w-5/12 `}>
            <p className={`font-medium w-full text-ellipsis overflow-hidden whitespace-nowrap`}>{data}</p>
            <time className="text-xs opacity-70">14:26, June 5 2023</time>
          </div>
        </div>
      </Link>

      {/* (view row's btn): <lg> more btn */}
      <button id="eachViewRowMore-btn" data-dropdown-toggle="eachViewRowMore" data-dropdown-offset-distance="10" data-dropdown-offset-skidding="50" data-dropdown-placement="left" title="More" className="hidden md:flex p-1 relative hover:bg-transparent/10 rounded-full focus:outline-none focus:ring-1 focus:ring-violet-600">
        <i className="icon icon-ic_fluent_more_vertical_20_regular flex text-lg"></i>
      </button>

      {/* (view row's btn): <sm> more btn */}
      <button data-modal-target="eachViewRowMore-modal" data-modal-toggle="eachViewRowMore-modal" title="More" className="flex md:hidden p-1 relative hover:bg-transparent/10 rounded-full focus:outline-none focus:ring-1 focus:ring-violet-600">
        <i className="icon icon-ic_fluent_more_vertical_20_regular flex text-lg"></i>
      </button>
    </div>
  )
}
