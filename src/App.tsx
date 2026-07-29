import logo from "./assets/logo.jpg";
import "./App.css";
import { Mail, MapPin, Phone, Share2 } from "lucide-react";

function App() {
  return (
    <>
      <section id="center">
        <img className="logo" src={logo}></img>
        <div className="contact">
          <div>
            <Phone color="black" />
            <span>Phone</span>
            <a className="external-link" href="tel:+12089849293">
              (208) 984-9293
            </a>
          </div>
          <div>
            <Mail color="black" />
            <span>Email</span>
            <a
              className="external-link"
              href="mailto:Goldenpawsmobile@gmail.com"
            >
              Goldenpawsmobile@gmail.com
            </a>
          </div>
          <div>
            <Share2 color="black" />
            <span>Connect</span>
            <a
              className="external-link"
              href="https://www.facebook.com/p/Golden-paws-mobile-pet-pedicures-100084290471506/"
            >
              @Goldenpawsmobile
            </a>
          </div>
          <div>
            <MapPin color="black" />
            <span>Now Servicing</span>
            <span>Treasure Valley, Idaho</span>
          </div>
        </div>
      </section>

      <div className="ticks"></div>

      <section id="center">
        <h1>Our Mission</h1>
        <p>
          Golden Paws was founded on giving your dog the "Spa Experience"
          without spending hours at the Grooming Salon. I focus on nails, teeth,
          and ear cleaning alongside a list of other services, in order to keep
          your pup smelling and looking good between the full grooming trips.
        </p>
      </section>

      <div className="ticks"></div>

      <section>
        <h1>Services</h1>
        <h2>Dog Sizing</h2>
        <p>
          Small: Up to 20lbs
          <br />
          Medium: 21 to 40lbs
          <br />
          Large: 41 to 70lbs
          <br />
          X-Large: 71lbs and more
        </p>
        <div id="pricing">
          <div>
            <h2>Quick and Fresh Package</h2>
            <span>
              Nails Trimmed and Dremeled with Ears cleaned using and Enzymatic
              solution and Teeth scrub!
            </span>
            <p>
              Small - $30
              <br />
              Medium - $35
              <br />
              Large - $40
              <br />
              X-Large - $45
            </p>
          </div>
          <div>
            <h2>Golden Paws Package</h2>
            <span>
              Nails Trimmed and Dremeled with Ears cleaned using an Enzymatic
              solution, Teeth scrubbed plus a Pad and Paw trim up!
            </span>
            <p>
              Small - $40
              <br />
              Medium - $45
              <br />
              Large - $50
              <br />
              X-Large - $55
            </p>
          </div>
          <div>
            <h2>Nail Trim and Dremel</h2>
            <p>
              Small - $15
              <br />
              Medium - $20
              <br />
              Large - $25
              <br />
              X-Large - $30
            </p>
          </div>
          <div>
            <h2>Brush Out</h2>
            <p>
              Small - $30
              <br />
              Medium - $40
              <br />
              Large - $50
              <br />
              X-Large - $60
            </p>
          </div>
          <div>
            <h2>Pad and Paw trim up</h2>
            <p>
              Small - $15
              <br />
              Medium - $20
              <br />
              Large - $25
              <br />
              X-Large - $30
            </p>
          </div>
          <div>
            <h2>Teeth and Ears</h2>
            <p>
              Teeth scrubbing $5
              <br />
              Ear cleaning with enzymatic solution $15
            </p>
          </div>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}

export default App;
