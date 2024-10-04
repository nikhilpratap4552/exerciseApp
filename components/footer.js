'use client'
import Image from 'next/image';
import facebook from '../public/social/social/facebook.svg';
import instra from '../public/social/social/instagram.svg';
import linkedin from '../public/social/social/linkedin.svg';
import './footer.css'
export default  function Footer(){
    function  submitt(){
        console.log("email submit");
        alert("display name");
    }
    return(
        <>
        <footer class="new_footer_area bg_color">
            <div class="new_footer_top">
                <div class="container">
                    <div class="row collm">
                        <div class="col-lg-3 col-md-6">
                            <div class="f_widget company_widget wow fadeInLeft" data-wow-delay="0.2s" >
                                <h3 class="f-title f_600 t_color f_size_18">Get in Touch</h3>
                                <p>Don’t miss any updates of your new activity and workout.!</p>
                                <form  >
                                    <input type="email" name="EMAIL" class="form-control memail" placeholder="Email"/>
                                   <button class="btn btn_get btn_get_two" onclick={submitt}>Subscribe</button>
                                    
                                </form> 
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6  ">
                            <div class="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.4s" >
                                <h3 class="f-title f_600 t_color f_size_18">Download</h3>
                                <ul class="list-unstyled f_list">
                                    <li><a href="#">Company</a></li>
                                    <li><a href="#">Android App</a></li>
                                    <li><a href="#">ios App</a></li>
                                    <li><a href="#">Desktop</a></li>
                                    <li><a href="#">Projects</a></li>
                                    <li><a href="#">My tasks</a></li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <div class="f_widget about-widget pl_70 wow fadeInLeft" data-wow-delay="0.6s" >
                                <h3 class="f-title f_600 t_color f_size_18">Help</h3>
                                <ul class="list-unstyled f_list">
                                    <li><a href="#">FAQ</a></li>
                                    <li><a href="#">Term & conditions</a></li>
                                    <li><a href="#">Reporting</a></li>
                                    <li><a href="#">Documentation</a></li>
                                    <li><a href="#">Support Policy</a></li>
                                    <li><a href="#">Privacy</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="f_widget social-widget pl_70 wow fadeInLeft" data-wow-delay="0.8s" >
                                <h3 className="f-title f_600 t_color f_size_18">Team Solutions</h3>
                                <div className="f_social_icon">
                                    
                                    
                                    <a href="#" className="fab fa-twitter"><Image src={instra} id='img'  height={25} alt='instragram'/></a>
                                    <a href="#" className="fab fa-linkedin"> <Image src={facebook} id='img' height={25} width={26} alt='facebook'/></a>
                                    <a href="#" className="fab fa-pinterest"><Image src={linkedin} id='img' height={25} alt='linkedin'/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer_bg">
                    <div class="footer_bg_one"></div>
                    <div class="footer_bg_two"></div>
                    <div class="footer_bg_ttwo"></div>

                </div>
            </div>
            
        </footer>
        </>

    );
}