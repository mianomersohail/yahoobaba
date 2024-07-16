import './Home.css'
function Home(){
    return(
        <>
        <div className="container-fluid home-container">
            <div className="row ">
                <div className="col-xl-10 offset-xl-1 homeemail">
                    <span className="home-fle">

                   
                    <span className="home-e">Email</span>
                    <span className="home-e">marketing</span>
                    </span>
                    <span className='home-fle'>

                   
                    <span className="home-e home-blue home-blue-one">and</span>
                    <span className="home-e home-blue home-blue-two">beyond</span>
                    </span>


                </div>
                <div className="col-xl-11 offset-xl-3">
                    <p className="home-afford">An affordable, easy platform to send emails, grow your list, and automate communication.</p>
                </div>
                <div className="col-xl-11 offset-xl-1 home-free-ac">
                    <div className="home-btn-ac">Create Free account -</div>
                </div>
                <div className="col-xl-11 home-free-ac offset-xl-1">
                    <p className="home-over-btn">Try us free  |  No credit card required  |  Cancel anytime</p>
                </div>
                <div className="col-xl-12 offset-xl-4">
                    <img className='home-img-one' src="https://us-wn-g.gr-cdn.com/_next/static/media/img_16.8b928753.png"/>

                </div>  
            </div>
        </div>
        </>
    )
}
export default Home;