"use client"

import { useCallback, useState } from "react";
import { SimpleMdeReact } from "react-simplemde-editor";

export default function Editor({ data, editable }: any) {

  const [pageValue, setPageValue] = useState(data ? data : "...")

  const handleOnChange = useCallback(
    (pageValue: string) => {
      setPageValue(pageValue)
    },[],
  )
  
  return (
    <SimpleMdeReact value={pageValue} onChange={handleOnChange} editable={editable ? editable : false}/>
  )
}
