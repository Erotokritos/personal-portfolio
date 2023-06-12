import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Skills</h2>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <h4>C++</h4>
                                <h5>Practiced through game development and various projects</h5>
                            </div>
                            <div className="item">
                                <h4>Python</h4>
                                <h5>Practiced through academic course and personal projects</h5>
                            </div>
                            <div className="item">
                                <h4>Java Script</h4>
                                <h5>Web development projects</h5>
                            </div>
                            <div className="item">
                                <h4>SQL</h4>
                                <h5>Learnt through academic courses and projects</h5>
                            </div>
                            <div className="item">
                                <h4>Git/GitHub</h4>
                                <h5>For version control</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
