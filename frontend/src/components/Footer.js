import React from 'react'
import './Footer.css'


const Footer = () => {
  return (
  <div className="footer">
    <footer class="site-footer">
    <div class = "container">
    <div class="grid-container">
    <div class="grid-item">
    <img src = " /images/logo.jpg" class = "logo-img"/>
    </div>
		
    <div class="grid-item inner-grid-container">
    <div class="grid-item"><a href="">Tickly tots </a></div>   
					<div class="grid-item"><a href="https://www.facebook.com/ticklytots/">About Us</a></div> 

          <div class="grid-item"><a href="">Privacy Policy</a></div>   
					<div class="grid-item"><a href="">Email Us</a></div>   
					<div class="grid-item"><a href="mailto:vani.jain@gmail.com">vani.jain@gmail.com</a></div>   

					{/* <div class="grid-item"><a href="">Finance</a></div>
					<div class="grid-item"><a href="">Cookie Policy</a></div>   
					<div class="grid-item"><a href="">Jobs </a></div> */}
					
          </div>


          <div class="grid-item">
					<div class = "social-buttons">
						<a href= "https://www.instagram.com/invites/contact/?i=1212jq1qxz91o&utm_content=kher6ye"><i class="fab fa-instagram circle-icon"></i></a>
						<a href= "https://www.facebook.com/ticklytots/"><i class="fab fa-facebook circle-icon"></i></a>
						<a href= "https://api.whatsapp.com/send?phone=919999472912"><i class="fab fa-whatsapp circle-icon"></i></a>
            
					</div>
				</div>   
        <hr/>
			<p>Copyright © 2021 | Tickly Tots | All rights reserved</p>
      </div>
      </div>
    </footer>
  </div>
  )
}

export default Footer
