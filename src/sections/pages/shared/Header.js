import Layout1 from './Layout1'
import React,{Fragment} from 'react'

const  Header1 = ({children}) => {
    return (
        <Fragment>
          <Layout1 />
                {children}
            <p>Footer</p>
        </Fragment>
    )
}

export default Header1