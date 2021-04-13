import Layout2 from './Layout2'
import React,{Fragment} from 'react'

const  Header2 = ({children}) => {
    return (
        <Fragment>
          <Layout2 />
                {children}
   
            <p>Footer</p>
        </Fragment>
    )
}

export default Header2