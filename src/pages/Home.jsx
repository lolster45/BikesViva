
//Components...
import NumberCounter from '../components/NumberCounter';
import ContactForm from '../components/Contact';

//React slickk...
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

//React observer...
import { useInView } from 'react-intersection-observer';

//Styles... 
import '../styles/Home.scss'


const Home = () => {

    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        vertical: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,

    };


    const { ref, inView } = useInView({threshold: 0.1, triggerOnce: true});
    const { ref: ref2, inView: inView2 } = useInView({threshold: 0.1, triggerOnce: true});
    const { ref: ref3, inView: inView3 } = useInView({threshold: 0.1, triggerOnce: true});
    const { ref: ref4, inView: inView4 } = useInView({threshold: 0.1, triggerOnce: true});
    const { ref: ref5, inView: inView5 } = useInView({threshold: 0.1, triggerOnce: true});
    const { ref: ref6, inView: inView6 } = useInView({threshold: 0.1, triggerOnce: true});


    return (
        <div className='home-page'>
            <section className="main-section">
                <Slider {...settings} className='slider-thing'>
                    <div className="slide">
                        <img src="/kidBike1.jpg" alt="Slide 1" />
                    </div>
                    <div className="slide">
                        <img src="/kidBike2.jpg" alt="Slide 2" />
                    </div>
                    <div className="slide">
                        <img src="/kidBike3.jpg" alt="Slide 3" />
                    </div>     
                </Slider>
                <div className='overlay'>
                    <div ref={ref} className={`main-text ${inView ? 'fadeIn' : ''}`}>
                        <h1>Helping Children Get Rides</h1>
                        <p>Our misson is to find bikes</p>
                    </div>
                </div> 
            </section>
            <div ref={ref2} className={`main-subinfo ${inView2 ? 'fadeIn' : ''}`}>
                    <span>
                        <div>
                            <NumberCounter targetNumber={1000} duration={1} number={'number'}  />
                        </div>
                        <p>Funds Raised</p>
                    </span>
                    <span className={`${inView ? 'fadeIn' : ''}`}>
                        <div>
                            <NumberCounter targetNumber={3}duration={400} number={'number'} />
                        </div>
                        <p>Dedicated Volunteers</p>
                    </span>
                    <span className={`${inView ? 'fadeIn' : ''}`}>
                        <div>
                            <NumberCounter targetNumber={100}duration={400} number={'number'} />%
                        </div>
                        <p>Delivered Donations</p>
                    </span>
                    <span className={`${inView ? 'fadeIn' : ''}`}>
                        <div>
                            <NumberCounter targetNumber={3} duration={400} number={'number'} />+
                        </div>
                        <p>Media Mention</p>
                    </span>
            </div>   
            <section className="our-mission-section">
                <div ref={ref3} className={`mission-left ${`${inView3 ? 'fadeIn' : ''}`}`}>
                    <h1>Who We Are?</h1>
                    <p>
                        We are a father and daughter team that was inspired to start this project by seeing kids riding bikes in our neighborhood. While many  kids have bikes already, there are many more that still do not, and do not have a way to get one. We decided to try to change that!
                    </p>
                    <br/>
                    <p>
                        Dad (a bicycle mechanic) and daughter (Lucero, 11 years old) fix, tune, wash, and test ride every single bike that we give away.  We are trying to get 100 (or more!) bikes to kids by the end of the summer, totally for free.
                    </p>
                </div>
                <img ref={ref4} src="/family.jpg" alt="" className={`${inView4 ? 'fadeIn' : ''}`}/>
            </section>
            <section className="about-us-section">
                <div className='about-us-container'>
                    <div ref={ref5} className={`about-us-left ${inView5 ? 'fadeIn' : ''}`}>
                        <div className="grid-item image-large">
                            <img 
                                src="https://earlyrider.com/cdn/shop/files/Hellion16_gallery_desktop2_7e5b2e5c-0a40-4a01-8b2b-34ab63525792.jpg?v=1682489503" 
                                alt="Large Image" 
                            />
                        </div>
                        <div className="grid-item"> 
                            <h2>100+</h2>
                            <p>Single column content</p>
                        </div>
                        <div className="grid-item image-small">
                            <img 
                                src="https://forthbikes.com/wp-content/uploads/2023/10/banner-002-1-scaled.jpg" 
                                alt="Small Image"
                            />
                        </div>
                    </div>
                    <div ref={ref6} className={`about-us-right ${inView6 ? 'fadeIn' : ''}`}>
                            <h2>Future?</h2>
                            <p>
                            We initially planned to give away 100 bikes to Austin area kids by the end of summer 2020, but we quickly surpassed that goal. Now, we're committed to reaching any child in need of a bike year-round, and there's no stopping us!
                            </p>
                            <p>As bike requests and donations continue to grow, we need your help to keep up. We're grateful for any support, whether through monetary donations or bike contributions. Our next step is expanding into a warehouse to store, repair, and distribute bikes to kids as quickly as possible!
                            </p>
                    </div>

                </div>
            </section>
            <section className="news-section">
                <h2>Were on the News!!!</h2>
                <div className="article-wrap">
                    <article className="article-card">
                        <img src="/articleOneImage.png" alt="" />
                        <div className="article-bottom">
                            <h2>Returning the Favor</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quod minus non quaerat ipsum in, porro ad similique nulla temporibus vel est eum dolores, facere at deserunt, tenetur cupiditate sed?</p>
                            <a href="https://www.facebook.com/ReturningTheFavor/videos/908733956201486/" className="first" target='_blank'>
                                <button>Check Out</button>
                            </a>
                        </div>
                    </article>
                    <article className="article-card">
                        <img src="/articleTwoImage.png" alt="" />
                        <div className="article-bottom">
                            <h2>CBS Austin</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quod minus non quaerat ipsum in, porro ad similique nulla temporibus vel est eum dolores, facere at deserunt, tenetur cupiditate sed?</p>
                            <a href="https://cbsaustin.com/news/local/austin-man-donates-over-100-bikes-to-kids-in-underserved-communities-looking-to-grow" className="second" target='_blank'>
                                <button>Check Out</button>
                            </a>                        
                        </div>
                    </article>
                    <article className="article-card">
                        <img src="/articleThreeImage.png" alt="" />
                        <div className="article-bottom">
                            <h2>KXAN Austin</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quod minus non quaerat ipsum in, porro ad similique nulla temporibus vel est eum dolores, facere at deserunt, tenetur cupiditate sed?</p>
                            <a href="https://www.kxan.com/news/local/austin/texas-school-for-the-deaf-students-surprised-with-30-brand-new-bikes/" className="third" target='_blank'>
                                <button>Check Out</button>
                            </a>                        
                        </div>
                    </article>
                </div>
            </section>
            <section className="process-section">
                <h2>The Process</h2>
                <div>
                    <div className="process-card">
                        <span>Step 1</span>
                        <img src="/broken-bike.png" alt="" />
                        <h2>Find Broken Bike</h2>
                        <p>It all starts with my daughter and me hunting around the neighborhood or checking donation centers for old, broken bikes. We love finding these forgotten treasures, knowing that with a little love, they’ll soon be ready to ride again.</p>
                    </div>
                    <div className="process-card">
                        <span>Step 2</span>
                        <img className='fix-image' src="/fix-broken-bike.png" alt="" />
                        <h2>Fix it!</h2>
                        <p>Once we get a bike, the real fun begins! Together, we spend time fixing it up—tightening the bolts, replacing parts, whatever it needs. Every bike gets our full attention because we want to make sure it’s safe and ready for its new home.</p>
                    </div>
                    <div className="process-card">
                        <span>Step 3</span>
                        <img src="/present.png" alt="" />
                        <h2>Give Away</h2>
                        <p>This is our favorite part—handing the bikes over to kids who need them. Seeing their faces light up when they realize it’s theirs to keep is priceless. It’s more than just giving away a bike—it’s about sharing joy and making a difference, one ride at a time.</p>
                    </div>
                </div>
            </section>
            <ContactForm/>
        </div>
    );
};

export default Home;