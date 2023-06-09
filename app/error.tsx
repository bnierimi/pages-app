"use client"

// import { useEffect } from "react"

export default function ErrorPage({ error, reset }: { error: Error, reset: () => void }) {
	// useEffect(()=>{
  //   console.error(error)
  // }, [error])

  return (
    <div>
      <h2>Oops!</h2>
      <p>Something is wrong: {error} </p>
      <button type="button" onClick={() => reset()}>Try again</button>
    </div>
  )
}