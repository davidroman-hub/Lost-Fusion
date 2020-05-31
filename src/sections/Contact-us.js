import React from 'react'
import './contact-us.scss'

const Contact = () => {
    return (
        <footer>
            <div className = 'social'>
                <a href='https://www.facebook.com/lostfusion' target='_blank' rel='noopener noreferrer'>
                <i class="fab fa-facebook"></i>
                </a>

                <a href='https://www.instagram.com/lostfusion_oficial' target='_blank' rel='noopener noreferrer'>
                <i class="fab fa-instagram"></i>
                </a>

              

                <a href='https://www.youtube.com/channel/UCRHNmMDXY8N0i3C8Pp9M-nA' target='_blank' rel='noopener noreferrer'>
                <i class="fab fa-youtube"></i>
                </a>  

                <a href='tel:55741276954'>
                <i class="fab fa-whatsapp"></i>
                </a>  

            </div>
            
        </footer>
    )
}

export default Contact