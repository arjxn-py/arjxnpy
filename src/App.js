import React from "react";
import "./App.css"

// Made by Yago Estévez (Twitter: @yagoestevez.com)


/***********************
  Menu Component
 ***********************/

  const Menu = props => {
    return (
      <div className={`menu-container ${props.showMenu}`}>
        <div className="overlay" />
        <div className="menu-items">
          <ul>
            <li>
              <a href="#welcome-section" onClick={props.toggleMenu}>
                HOME
              </a>
            </li>
            <li>
              <a href="#about" onClick={props.toggleMenu}>
                ABOUT
              </a>
            </li>
            <li>
              <a href="#projects" onClick={props.toggleMenu}>
                PORTFOLIO
              </a>
            </li>
            <li>
              <a href="#contact" onClick={props.toggleMenu}>
                CONTACT
              </a>
            </li>
          </ul>
          <SocialLinks />
        </div>
      </div>
    );
  };
  
  
  /***********************
    Nav Component
   ***********************/
  
  const Nav = props => {
    return (
      <React.Fragment>
        <nav id="navbar">
          <div className="nav-wrapper">
            <p className="brand">
              Arjxn
              <strong>.py</strong>
            </p>
            <a href="#x"
              onClick={props.toggleMenu}
              className={props.showMenu === 'active' ? 'menu-button active' : 'menu-button'}
            >
              <span />
            </a>
          </div>
        </nav>
      </React.Fragment>
    );
  };
  
  
  
  /***********************
    Header Component
   ***********************/
  
  const Header = props => {
    return (
      <header id="welcome-section">
        <div className="forest" />
        <div className="silhouette" />
        <div className="moon" />
        <div className="container">
          <h1>
            <span className="line">I do</span>
            <span className="line">Full Stack</span>
            <span className="line">Web Development</span>
            <span className="line">
              <span className="color">&</span> code.
            </span>
          </h1>
          <div className="buttons">
            <a href="#projects">my portfolio</a>
            <a href="#contact" className="cta">
              get in touch
            </a>
          </div>
        </div>
      </header>
    );
  };
  
  
  /***********************
    About Component
   ***********************/
  
  const About = props => {
    return (
      <section id="about">
        <div className="wrapper">
          <article>
            <div className="title">
              <h3>Who's this guy?</h3>
              <p className="separator" />
            </div>
            <div className="desc full">
              <h4 className="subtitle">My name is Arjun.</h4>
              <p>
                I am a Second year student at Cluster Innovation Centre, University of Delhi, pursuing my major in Information Technology & Mathematical Innovations & Management as minor.
              </p>
              <p>
                Besides focusing on my academic skills and formal commitments, you can always find me working on developing my tech-stack and currently I am exploring MERN stack as I am commited to some projects related to Web Development. And along with that I implement my small ideas in the form of code, develop and maintain open-source projects, which I believe are the key to collaborative tech-dev.
              </p>
              <p>
                I really enjoy solving problems as well as making things pretty and easy to use. I
                can't stop learning new things; the more, the better.
              </p>
            </div>
            <div className="title">
              <h3>What does he do?</h3>
              <p className="separator" />
            </div>
            <div className="desc">
              <h4 className="subtitle">I'm a programmer.</h4>
              <p>
                For the front-end I usually work with Javascript, either standalone or including
                popular frameworks like ReactJS and NextJS. I also make the web pretty by using Sass,
                CSS whenever needed, any of their friends: Bootstrap, Bulma, etc.
              </p>
              <p>
                For the back-end I also work with Javascript (NodeJS, Express, MongoDB, etc). But, along with that I am also experienced with AWS and serverless & also use it when feasible.
              </p>
            </div>
            {/* <div className="desc">
              <h4 className="subtitle">Also a designer.</h4>
              <p>
                I feel comfortable working with many Adobe products. Photoshop, Illustrator, InDesign,
                Lightroom or Xd are some kind of industry standards and I love working with them. I'm
                not limited to them, though: Gimp, Inkscape or Figma are also very valid applications
                that I've been working with.
              </p>
              <p>
                User interfaces, brochures, books, branding... You name it! As I mentioned, creating
                pretty things is particularly important for me.
              </p>
            </div> */}
          </article>
        </div>
      </section>
    );
  };
  
  
  /***********************
    Project Component
   ***********************/
  
  const Project = props => {
    const tech = {
      sass: 'fab fa-sass',
      css: 'fab fa-css3-alt',
      js: 'fab fa-js-square',
      react: 'fab fa-react',
      vue: 'fab fa-vuejs',
      d3: 'far fa-chart-bar',
      node: 'fab fa-node'
    };
  
    const link = props.link || 'http://';
    const repo = props.repo || 'http://';
  
    return (
      <div className="project">
        <a className="project-link" href={link} target="_blank" rel="noopener noreferrer">
          <img className="project-image" src={props.img} alt={'Screenshot of ' + props.title} />
        </a>
        <div className="project-details">
          <div className="project-tile">
            <p className="icons">
              {props.tech.split(' ').map(t => (
                <i className={tech[t]} key={t} />
              ))}
            </p>
            {props.title}{' '}
          </div>
          {props.children}
          <div className="buttons">
            <a href={repo} target="_blank" rel="noopener noreferrer">
              View source <i className="fas fa-external-link-alt" />
            </a>
            <a href={link} target="_blank" rel="noopener noreferrer">
              Try it Live <i className="fas fa-external-link-alt" />
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  
  
  /***********************
    Projects Component
   ***********************/
  
  const Projects = props => {
    return (
      <section id="projects">
        <div className="projects-container">
          <div className="heading">
            <h3 className="title">My Works</h3>
            <p className="separator" />
            <p className="subtitle">
              Here's a list of <u>most</u> of the projects I've been working on lately. All of these
              were built during my coding camp adventure on{' '}
              <a href="https://www.freecodecamp.org/" target="_blank" rel="noopener noreferrer">
                freeCodeCamp
              </a>
              , where I've been coding for almost 7 months non-stop until I completed all the projects
              required to get my Full-Stack Developer certification.
            </p>
          </div>
          <div className="projects-wrapper">
            <Project
              title="Curio"
              img={'https://raw.githubusercontent.com/arjxn-py/curio-front/main/src/components/assets/images/language.png?token=GHSAT0AAAAAABWKNKRNGGO5I7A7LDAOAFKUY3BCDYQ'}
              tech="nodejs css react aws"
              link="https://curiocic.netlify.app/"
              repo="https://github.com/arjxn-py/curio-front"
            >
              <small>
                Built using Node , AWS + Lambda + Serverless, CSS , React.js + React Router + Axios .
              </small>
              <p>
                This is a full-stack website that I made which lets the users to translate & watch translated youtube videos.
              </p>
            </Project>
            <Project
              title="SportsKart"
              img={'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Sport_balls.svg/1200px-Sport_balls.svg.png'}
              tech="js node css"
              link="https://sports-kart.netlify.app/"
              repo="https://github.com/arjxn-py/SportsKart"
            >
              <small>
                Building using Node, ReactJS , Express, MongoDB, JS + jQuery + Axios +  JWT, CSS & Bootstrap
              </small>
              <p>
                A full-stack e-commerce website to buy , sell or rent Sports Items.
              </p>
            </Project>
            <Project
              title="Dhamni"
              img={'https://raw.githubusercontent.com/arjxn-py/Dhamni/main/images/image1.jpg'}
              tech="js react css"
              link="#"
              repo="https://github.com/yagoestevez/documentify"
            >
              <small>Built using HTML5/CSS3/JS.</small>
              <p>
                A website to create Blood Bank Chain for Blood Donors & Recievers.
              </p>
            </Project>
            <Project
              title="Image Retriever and Object Remover"
              img={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiA_p6FJ2ko1VfKzG4fl-LspKPRiWujCsuIA&usqp=CAU'}
              tech="js react css"
              link="#"
              repo="https://github.com/arjxn-py/Image-Retriever-and-Object-Remover-In-MATLAB"
            >
              <small>Built using MATLAB & C.</small>
              <p>
                A technical documentation page made for a little React library I published on NPM.
              </p>
            </Project>
          </div>
        </div>
      </section>
    );
  };
  
  
  
  /***********************
    Contact Component
   ***********************/
  
  const Contact = props => {
    return (
      <section id="contact">
        <div className="container">
          <div className="heading-wrapper">
            <div className="heading">
              <p className="title">
                Want to <br />
                contact me?
              </p>
              <p className="separator" />
              <p className="subtitle">
                Please, use the form below or send an email to {''}
                <span className="mail">
                  arjxn.py
                  <i className="fas fa-at at" />
                  @gmail
                  <i className="fas fa-circle dot" />
                  .com
                </span>
                :
              </p>
            </div>
            <SocialLinks />
          </div>
          <form id="contact-form" action="#">
            <input placeholder="Name" name="name" type="text" required />
            <input placeholder="Email" name="email" type="email" required />
            <textarea placeholder="Message" type="text" name="message" />
            <input className="button" id="submit" value="Submit" type="submit" />
          </form>
        </div>
      </section>
    );
  };
  
  
  
  /***********************
    Footer Component
   ***********************/
  
  const Footer = props => {
    return (
      <footer>
        <div className="wrapper">
          <h3>THANKS FOR VISITING</h3>
          <p>© {new Date().getFullYear()} Arjun Verma</p>
          <SocialLinks />
        </div>
      </footer>
    );
  };
  
  
  
  
  /***********************
    Social Links Component
   ***********************/
  
  const SocialLinks = props => {
    return (
      <div className="social">
        <a
          href="https://twitter.com/yagoestevez"
          target="_blank"
          rel="noopener noreferrer"
          title="Link to author's Twitter profile"
        >
          {' '}
          <i className="fab fa-twitter" />
        </a>
        <a
          id="profile-link"
          href="https://github.com/yagoestevez"
          target="_blank"
          rel="noopener noreferrer"
          title="Link to author's GitHub Profile"
        >
          {' '}
          <i className="fab fa-github" />
        </a>
        <a
          href="https://codepen.io/yagoestevez"
          target="_blank"
          rel="noopener noreferrer"
          title="Link to author's Codepen Profile"
        >
          {' '}
          <i className="fab fa-codepen" />
        </a>
      </div>
    );
  };
  
  
  
  /***********************
    Main Component
   ***********************/
  
  class App extends React.Component {
    state = {
      menuState: false
    };
  
    toggleMenu = () => {
      this.setState(state => ({
        menuState: !state.menuState
          ? 'active'
          : state.menuState === 'deactive'
            ? 'active'
            : 'deactive'
      }));
    };
  
    render() {
      return (
        <>
          <Menu toggleMenu={this.toggleMenu} showMenu={this.state.menuState} />
          <Nav toggleMenu={this.toggleMenu} showMenu={this.state.menuState} />
          <Header />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </>
      );
    }
  
    componentDidMount() {
      const navbar = document.querySelector('#navbar');
      const header = document.querySelector('#welcome-section');
      const forest = document.querySelector('.forest');
      const silhouette = document.querySelector('.silhouette');
      let forestInitPos = -300;
  
      window.onscroll = () => {
        let scrollPos = document.documentElement.scrollTop || document.body.scrollTop;
  
        if (scrollPos <= window.innerHeight) {
          silhouette.style.bottom = `${parseInt(scrollPos / 6)}px`;
          forest.style.bottom = `${parseInt(forestInitPos + scrollPos / 6)}px`;
        }
  
        if (scrollPos - 100 <= window.innerHeight)
          header.style.visibility = header.style.visibility === 'hidden' && 'visible';
        else header.style.visibility = 'hidden';
  
        if (scrollPos + 100 >= window.innerHeight) navbar.classList.add('bg-active');
        else navbar.classList.remove('bg-active');
      };
  
      (function navSmoothScrolling() {
        const internalLinks = document.querySelectorAll('a[href^="#"]');
        for (let i in internalLinks) {
          if (internalLinks.hasOwnProperty(i)) {
            internalLinks[i].addEventListener('click', e => {
              e.preventDefault();
              document.querySelector(internalLinks[i].hash).scrollIntoView({
                block: 'start',
                behavior: 'smooth'
              });
            });
          }
        }
      })();
    }
  }
  
  
  // ReactDOM.render(<App />, document.getElementById('app'));

  export default App;
