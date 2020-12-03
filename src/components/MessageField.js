import React, {useState} from 'react'
import { TextField } from '@material-ui/core'
import { pushMessage } from '../firebase'

const MessageField =  ({name, setText, text,inputEl}) => {
    const[isComposed, setIsComposed] = useState(false)
    return <TextField
            autoFocus
             fullWidth={true}
             const inputRef = {inputEl}
             onChange={(e) => setText(e.target.value)}
             onKeyDown={(e) => {
                const text = e.target.value
                if(text === '') return
                if(e.key === 'Enter' && !(isComposed) ){
                    pushMessage({ name, text})
                    setText('')
                    e.preventDefault()
                }
              }}
              onCompositionStart={()=>{setIsComposed(true)}}  
              onCompositionEnd={() => setIsComposed(false)}  
              value={text} 
            />
}

export default MessageField