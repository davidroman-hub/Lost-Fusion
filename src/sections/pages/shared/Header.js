import Layout1 from './Layout1'
import React,{Fragment} from 'react'
import MusicLinks from '../../MusicLinks'

const  Header1 = ({children}) => {
    return (
        <Fragment>
          <Layout1 />
          <MusicLinks/>
                {children}
            <p>Footer</p>
        </Fragment>
    )
}

export default Header1