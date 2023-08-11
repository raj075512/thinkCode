
import React from 'react'
import CodeMirror from "@uiw/react-codemirror"
import {vscodeDark} from "@uiw/codemirror-theme-vscode"
import { cpp } from '@codemirror/lang-cpp'


function IDE() {
  return (
    <div className='m-5'>
        <CodeMirror
         value=''
         theme={vscodeDark}
         extensions={[cpp()]}
         style={{fontSize:16}} 
        />
       
    </div>
  )
}

export default IDE
