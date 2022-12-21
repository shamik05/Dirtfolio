import email from "./assets/icons/email.svg";
import linkedin from "./assets/icons/linkedin.svg";
import github from "./assets/icons/github.svg";
import home from "./assets/undraw_developer.svg";
import './App.css';
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <main className="Main">
        <Header />

      <section id="About" className="About">
        <div className="About__Left">
          <img src={home} alt="Developer typing" />
        </div>

        <div className="About__Right">
          <h1>Who am I?</h1>
          <p>Hi, my name is Shamik Haldar and I am a 29 year old Ottawa resident. I have always had a love for computers and puzzle solving which has lead me to coding. Currently, I am no better than a novice programmer and considering the wealth of technical information out there, I hope to always remain in a learner's position. This is my first website created with bootstrap. Like, Comment and Subscribe!</p>
          <div className="About__Footer">
            <a className="About__Hire" href="Shamik_Resume.pdf" download>HIRE ME</a>
            
            <ul className="About__Social">
              <li>
                <a href="mailto:shamikhaldar05@gmail.com"><img src={email} alt="Email" /></a>
              </li>
              <li>
                <a href="http://www.linkedin.com/in/shamik-h/"><img src={linkedin} alt="LinkedIn" /></a>
              </li>
              <li>
                <a href="https://github.com/shamik05"><img src={github} alt="GitHub" /></a>
              </li>
              {/* <li>
                <a href="https://www.codewars.com/users/shamik05">Codewars</a>
              </li> */}
            </ul>
          </div>
        </div>
      </section>

      <div id="Projects" className="Projects">
        <h1>Projects</h1>

        <div className="row">
          <div className="col-md-4">
              <a href="https://diliubarets.github.io/LSD-project/">
              <img className="img-fluid mx-auto d-block" src="" alt="HTML5 Logo" />
              </a>
          </div>
          
          <div className="col-md-8">
            <p>LSD is an exchange-neutral tool designed for the modern cryptocurrency/token traders. Whether you are a professional investor or an amateur enthusiast, LSD provides all the necessary tools to grab the market bull by its horns.
              
            Track real-time prices to outmaneuver your opposition
            Predict the future with our database of historical prices
            Relax by listening to a wide variety of crypto podcasts
            View how your crypto stacks up against the competition by staying informed through our news section
              
            Powered by CoinCap, Gmail News, NewsAPI, and Spreaker, LSD strives to bring you accurate performance statistics and much more for free! Tell us what you think about our APP through the contact form below. Like, Comment, Subscribe and Share. Tell a loved one about the benefits of LSD today!
            
            On project work: Liam Shamik Dina</p>
          </div>
      </div>
      
      {/* <div className="row">
        <div className="col-md-4" style="height: 300px;" >
            <a href="https://obscure-thicket-26833.herokuapp.com">
            <img className="img-fluid mx-auto d-block" src="." alt="HTML5 Logo" style="height:200px" />
            </a>
        </div>
        
        <div className="col-md-8" style="height: 300px;">
          <p>Wheels Gone Wild is a virtual bike shop that helps consumers find their perfect ride. Whether you’re looking for a mountain bike, electric bike, or a bike for your child, our state of the art filtering system and excellent database will make it easy for you to get your ideal set of wheels.
            The motivation behind this project was to provide the easiest way possible for new and experienced bikers to get more out of their exercise. During these tough times, it can be hard to find ways to exercise efficiently. As mentioned earlier, getting a bike with us is easier than ever, allowing you to achieve your fitness goals and shed that extra Covid weight.
            </p>
        </div>
    </div>  

        <div className="row">
            <div className="col-md-4" style="height: 300px;" >
                <a href="https://github.com/shamik05/Homework-01---Code-Refractor">
                <img className="img-fluid mx-auto d-block" src="." alt="HTML5 Logo" height="200px" />
                </a>
            </div>
            
            <div className="col-md-8" style="height: 300px;">
              <p>A month ago, I had zero clue on HTML5. Since enrolling into the Carleton BootCampSpot, I have started learning HTML5. I understand its basics and have gained greater mastery over it. There is something to learn about it everyday or reinforce my understanding. The image on the left will lead you to my first homework assignment using HTML semantics. Fair warning, it hasn't been graded yet so don't take it as a final product. There is always room for improvement.</p>
            </div>
        </div>    

        <div className="row">
            <div className="col-md-4" style="height: 300px;" >
                <a href="https://github.com/shamik05/Homework-02---Portfolio">
                <img className="img-fluid mx-auto d-block" src="" alt="CSS Logo" />
                </a>
            </div>
            
            <div className="col-md-8">
              <p>If HTML was considered the skeleton of websites then CSS can be considered the organs, tissue, muscle etc. (You get the idea). Both are needed in tandem to aid in website creation. CSS was a greater challenge than HTML5 for me to learn because I am not great at designs. However, repeating the exercises from previous lecture has solidified my understanding. With that being said, there is also Bootstrap 4 which can be considered the plastic surgery of websites. This website is built using bootstrap and the image on the left will take you to its github page.</p>
            </div>
        </div> 

        <div className="row">
            <div className="col-md-4" style="height: 300px;" >
                <img className="img-fluid mx-auto d-block" src="" alt="Javascript Logo" />
            </div>
            
            <div className="col-md-8">
              <p>Javascript excites me in ways that I had completely forgotten since high school. It's brought back a love for coding that I lost. In plain english, it's straight up fun. I believe my next assignment will be a password generator so please stay tuned!</p>
            </div>
        </div> 

        <div className="row">
            <div className="col-md-4" style="height: 300px;">
                <a href="https://lichess.org/@/kimahs">
                <img className="img-fluid mx-auto d-block" src="" alt="Chess Logo" />
                </a>
            </div>
            
            <div className="col-md-8">
              <p>I have played chess on and off from 10 years old. I started with around a year of coaching at 10 before migrating to Canada. If I had stayed connected with the chess culture then no doubt, I would have strived to get a GM title. For most periods, I self taught and grew as a player. Right now, I only play online (albeit a while ago) at lichess while trying to get a chess.com membership account. I am looking to set up a match between myself and my TA Laith Harb. I don't think he has a chance. You can check out my profile by clicking the left image.</p>
            </div>
        </div>  */}
      </div>

      </main>
    </div>
  );
}

export default App;
