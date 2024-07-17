import './Home.css'
import GetReponse from './GetResponse/GetResponse'
export default function Home(){
    return(
        <>
        <div className="container-fluid Home-main-container">
            <div className="row">
                <div className="col-lg-10 offset-xl-1  home-main">
                    <span className="email-main-h">Email</span><span className="email-main-h">marketing</span>
                    <span><span className="email-main-h blue main-blue-one ">and</span><span className="email-main-h blue main-blue-two">beyond</span></span>
                </div>
                <div className="col-lg-9 offset-lg-2 offset-md-1 col-md-10">
                    <h6 className="home-afford">An affordable, easy platform to send emails, grow your list, and automate communication.</h6>

                </div>
                <div className="col-lg-12 Home-main-of-btn">
                    <div className="home-main-btn">
                        Create FREE account

                    </div>
                   

                </div>
                <div className="col-lg-12 Home-main-btn-p">
                    <p>Try us free  |  No credit card required  |  Cancel anytime</p>

                </div>
                <div className="col-lg-10 offset-lg-2 home-img-two">
                    <img className="home-img-twos" src="https://us-wn-g.gr-cdn.com/_next/static/media/img_16.8b928753.png"/>

                </div>
                <div className="col-lg-12 home-third-img-main">
                    <img className="home-img-three" src="https://us-wn-g.gr-cdn.com/_next/static/media/g2.26f5f2c4.png"/>
                   
                </div>
                <div className="col-lg-12 home-main-p-third">
                     <p>EMAIL MARKETING INDUSTRY LEADER SINCE 1998</p>

                </div>
                <div className="col-lg-12 email-marketing">
    <h1><span class="easier">Easier</span> <span class="highlight">email marketing & automation</span></h1>
    <h1>that converts contacts into customers</h1>
</div>

            </div>
        </div>
        <GetReponse/>
        
        </>
    )
}