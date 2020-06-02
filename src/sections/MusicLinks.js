import React from 'react'
import './MusicLinks.scss'
import { Icon, InlineIcon } from '@iconify/react';
import deezerIcon from '@iconify/icons-simple-icons/deezer';

const MusicLinks = () => {
    return (
        <footer>
            <div className = 'social'>
                <a href='https://open.spotify.com/artist/7KZHOPhqGOczZDbLBCUskM' target='_blank' rel='noopener noreferrer'>
                     <i className="fab fa-spotify"></i>
                </a>

                <a href='https://music.apple.com/us/artist/lost-fusi%C3%B3n/1507822747?fbclid=IwAR1CH44LyLI_Lf-qaS85cWmEwkH4apy47cd6a5u7E4dKXNLVK2-3Yb-C9W4' target='_blank' rel='noopener noreferrer'>
                    <i class="fab fa-apple"></i>
                </a>

              

                <a href='https://www.youtube.com/channel/UCRHNmMDXY8N0i3C8Pp9M-nA' target='_blank' rel='noopener noreferrer'>
                <i class="fab fa-youtube"></i>
                </a>  
                <a href='https://www.deezer.com/en/artist/12963387' target='_blank' rel='noopener noreferrer'>
                <Icon icon={deezerIcon} className='deezer' />
                </a>  

            </div>
            
        </footer>
    )
}

export default MusicLinks