
import { Link } from "react-router-dom"

export const Header = ()=>{
    return(
        <>
         {/* <h1>Header</h1> */}

         <Link to='/'>Home</Link>
         <Link to='/login'>Login</Link>
        </>
    )
}