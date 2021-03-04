
//images
import womanPhoto from './images/section-2/woman.png'
import BookIcon from './images/section-2/icon-1.svg'
import ComputerIcon from './images/section-2/icon-2.svg'
import UserIcon from './images/section-2/icon-3.svg'
import RocketIcon from './components/icons/RocketIcon'
import ImageCourse from './images/section-4/thumbnail.png'

//components
import Header from './components/Header'
import Footer from './components/Footer'
import ExploreCard from './components/ExploreCard'
import Slider from './components/Slider'
import CourseCard from './components/CourseCard'
import Testimonials from './components/Testimonials'


function App() {
  return (
  <main>
    <Header />

    {/* main-section */}
    <section id="main-section" className="bg-cover d-flex">
        <div className="main-wrapper">
            <div className="grid">
              <div className="grid-item">
                <h1 className="main-title text--white">Formación Online Para 
                  <span className="text--primary">Profesionales TIC</span>
                </h1>
                <h2 className="main-subtitle text--white">Sea dueño de su futuro aprendiendo nuevas habilidades en línea</h2>
                <div className="search-wrapper">
                <div className="search-box d-flex">
                      <input placeholder="¿que quieres aprender hoy?" />
                      <div className="search-icon d-flex justify-content">
                           <svg stroke="currentColor" fill="none"  stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                      </div>
                </div>

                </div>

                <ul className="opotunity-list text--white">
                  <li className="opotunity-item">Más de 2 millones de estudiantes.</li>
                  <li className="opotunity-item">Más de 30.000 cursos</li>
                  <li className="opotunity-item">Aprenda cualquier cosa en línea</li>
                </ul>

              </div>
          
          

            </div>
        </div>
    </section>

    <section id="learnWeUs">
        <div className="learnWeUs-wrapper">
            <div className="grid-2">
                <div className="grid-item">

                    <figure className="learnWeUs-image">
                        <img alt="aprende con nosotros" src={womanPhoto} width="100%"  />
                    </figure>

                </div>
                <div className="learnWeUs-description d-flex grid-item">
                    <h1 className="learnWeUs-title"><span id="wylearntext" className="text--white">
                      ¿Por qué   aprender</span> <br /> con nosotros?</h1>
                     <p className="paragraph text--secondary">
                      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo
                     </p>
                     <div className="learnWeUs-points d-flex">
                        <div className="learnWeUs-point d-flex">
                            <figure className="learnWeUs-point__icon">
                                <img loading="lazy" alt="book"  width="100%" src={BookIcon} />
                            </figure>
                            <p className="learnWeUs-point__text">
                              Lorem ipsum dolor sit ,<br/>
                              consetetur sadipscing 
                            </p>
                        </div>

                        <div className="learnWeUs-point d-flex">
                            <figure className="learnWeUs-point__icon">
                                <img loading="lazy" alt="book"  width="100%" src={ComputerIcon} />
                            </figure>
                            <p className="learnWeUs-point__text">
                              Lorem ipsum dolor sit ,<br/>
                              consetetur sadipscing 
                            </p>
                        </div>

                        <div className="learnWeUs-point d-flex">
                            <figure className="learnWeUs-point__icon">
                                <img loading="lazy" alt="book"  width="100%" src={UserIcon} />
                            </figure>
                            <p className="learnWeUs-point__text">
                              Lorem ipsum dolor sit ,<br/>
                              consetetur sadipscing 
                            </p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </section>

    <section id="explore" className="bg-cover position-relative"> 
    
              <h2 className="section-title text--white text-center">Explora los temas principales</h2>
              <p className="paragraph section-paragraph text-center text--white">
                  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.
              </p>
               <Slider>
                 
                    <ExploreCard icon={<RocketIcon/>} title="Diseño" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed" />
                    <ExploreCard icon={<RocketIcon/>} title="Desarrollo" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed" />
                    <ExploreCard icon={<RocketIcon/>} title="Marketing" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed" />
                    <ExploreCard icon={<RocketIcon/>} title="Diseño" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed" />
                    <ExploreCard icon={<RocketIcon/>} title="Diseño" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed" />
                    <ExploreCard icon={<RocketIcon/>} title="Diseño" description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed" />
                 
                </Slider>
       
    </section>


    <section id="currencycourse" >
        <article className="course-separator">
              <div className="wrapper">
              <h1 className="text--white section-title text-center">Cursos recientes</h1>
              <p className="paragraph text-center text--white ">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed</p>  

              </div>

        </article>
        <div className="courses" >
              <Slider>
              <CourseCard  
                image={ImageCourse}
                title="Lorem ipsum dolor sit amet, consetetur"
                user={{
                  name:'German Vega',
                  photo:'https://cdn.pixabay.com/photo/2017/08/12/18/31/male-2634974__340.jpg'
                }}
                hours={5}
                sections={10}
                price={"80.000"}
                discount={"120.000"}
                tag="DISEÑO"

              />

              <CourseCard  
                image={ImageCourse}
                title="Lorem ipsum dolor sit amet, consetetur"
                user={{
                  name:'German Vega',
                  photo:'https://cdn.pixabay.com/photo/2017/08/12/18/31/male-2634974__340.jpg'
                }}
                hours={5}
                sections={10}
                price={"80.000"}
                discount={"120.000"}
                tag="DESARROLLO"

              />

              <CourseCard  
                image={ImageCourse}
                title="Lorem ipsum dolor sit amet, consetetur"
                user={{
                  name:'German Vega',
                  photo:'https://cdn.pixabay.com/photo/2017/08/12/18/31/male-2634974__340.jpg'
                }}
                hours={5}
                sections={10}
                price={"80.000"}
                discount={"120.000"}
                tag="MARKETING"

              />

              <CourseCard  
                image={ImageCourse}
                title="Lorem ipsum dolor sit amet, consetetur"
                user={{
                  name:'German Vega',
                  photo:'https://cdn.pixabay.com/photo/2017/08/12/18/31/male-2634974__340.jpg'
                }}
                hours={5}
                sections={10}
                price={"80.000"}
                discount={"120.000"}
                tag="MARKETING"

              />

              </Slider>

             
        </div>
    </section>

    <section id="courseresults" >
        <div className="wrapper">
             <div className="grid-3">
                  <div className="grid-item text-center">
                      <h1 className="text--white courseresult-number">5000</h1>
                      <h2 className="text--secondary courseresult-title">Aprendices</h2>
                  </div>
                  <div className="grid-item text-center">
                      <h1 className="text--white courseresult-number">7000</h1>
                      <h2 className="text--secondary courseresult-title">Graduados</h2>
                  </div>
                  <div className="grid-item text-center">
                      <h1 className="text--white courseresult-number">2000</h1>
                      <h2 className="text--secondary courseresult-title">Cursos Publicados</h2>
                  </div>
              </div>   
        </div>        
    </section>
                
    <section id="testimonials" className="bg-cover position-relative">
        <div className="wrapper">
          <h1 className="section-title text-center">
              Lo que nuestros usuarios<br />
              piensan de nosotros
            </h1>       

            <Slider>

              <Testimonials 
                user={{
                  name:'German Vega',
                  photo:'https://cdn.pixabay.com/photo/2017/08/12/18/31/male-2634974__340.jpg',
                  role:'Desarrollador web'
                }}
                message="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ,Lorem ipsum dolor sit ame"
              
              />  

              <Testimonials 
                user={{
                  name:'German Vega',
                  photo:'https://cdn.pixabay.com/photo/2017/08/12/18/31/male-2634974__340.jpg',
                  role:'Desarrollador web'
                }}
                message="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ,Lorem ipsum dolor sit ame"
              
              /> 

              <Testimonials 
                user={{
                  name:'German Vega',
                  photo:'https://cdn.pixabay.com/photo/2017/08/12/18/31/male-2634974__340.jpg',
                  role:'Desarrollador web'
                }}
                message="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ,Lorem ipsum dolor sit ame"
              
              />  

               <Testimonials 
                user={{
                  name:'German Vega',
                  photo:'https://cdn.pixabay.com/photo/2017/08/12/18/31/male-2634974__340.jpg',
                  role:'Desarrollador web'
                }}
                message="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ,Lorem ipsum dolor sit ame"
              
              />  

              <Testimonials 
                user={{
                  name:'German Vega',
                  photo:'https://cdn.pixabay.com/photo/2017/08/12/18/31/male-2634974__340.jpg',
                  role:'Desarrollador web'
                }}
                message="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ,Lorem ipsum dolor sit ame"
              
              /> 

              <Testimonials 
                user={{
                  name:'German Vega',
                  photo:'https://cdn.pixabay.com/photo/2017/08/12/18/31/male-2634974__340.jpg',
                  role:'Desarrollador web'
                }}
                message="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ,Lorem ipsum dolor sit ame"
              
              />  



            </Slider>    
           
           
        </div>
    </section>
    <Footer />          
  </main>
  
  );
}

export default App;
