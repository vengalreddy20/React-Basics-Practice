import {useContext} from 'react'
import {user,message} from '../App'

function ContextHook() {

    
    const username = useContext(user)
    const msg=useContext(message)
    return (
        <div>
            hello -{username}  -   {msg}
        </div>
    )
}

export default ContextHook
