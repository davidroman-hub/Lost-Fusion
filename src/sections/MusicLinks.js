import React from 'react'
import './MusicLinks.scss'

const MusicLinks = () => {
    return (
        <footer>
            <div className = 'social'>
                <a href='https://open.spotify.com/artist/7KZHOPhqGOczZDbLBCUskM' target='_blank' rel='noopener noreferrer'>
                     <i className="fab fa-spotify"></i>
                </a>

                <a href='/' target='_blank' rel='noopener noreferrer'>
                    <i class="fab fa-apple"></i>
                </a>

              

                <a href='https://www.youtube.com/channel/UCRHNmMDXY8N0i3C8Pp9M-nA' target='_blank' rel='noopener noreferrer'>
                <i class="fab fa-youtube"></i>
                </a>  

            </div>
            
        </footer>
    )
}

export default MusicLinks