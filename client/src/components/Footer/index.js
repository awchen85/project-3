/* eslint-disable */
import footerDivider from "../../assets/images/footer-divider.png";
import footerGitHub from "../../assets/images/github-mark-white.png";
import { AiFillGithub } from "react-icons/ai";
import David from "../../assets/images/David.jpg";
import Mitch from "../../assets/images/Mitch.jpg";
import Alex from "../../assets/images/Alex.jpg";
import Patrick from "../../assets/images/Patrick.jpg";
import Teresa from "../../assets/images/Teresa.jpg";

function Footer() {
  return (
    <footer className="h-0">
      <div className="footer-divider">
        <img src={footerDivider} alt="Footer Divider" />
      </div>
      <div className="grid xl:grid-cols-2 footer grid-cols-1 gap-8">
        <div className="footer-left">
          <span className="brand">OurPlace</span>
          <p>
            Our Place is a hub to locate your next potential roommate! Use the parameters that make you comfortable and browse the homepage for someone that can help you live where you want at an affordable price. Happy searching, and welcome to <b className="text-lg">Our Place</b>.
          </p>
        </div>
        <div className="footer-right grid md:grid-cols-2 sm:grid-cols-1 gap-8">
          <section className="footer-menu self-center">
            <div className="img-container rounded-md border-4 border-black">
              <div className="box-2 relative"><img src={Mitch} alt="Mitch" />
                <p className="absolute top-1 left-1 bg-black p-1 m-1 rounded bg-opacity-30">1/5</p></div>
              <div className="box-3 relative"><img src={Patrick} alt="Patrick" />
                <p className="absolute top-1 left-1 bg-black p-1 m-1 rounded bg-opacity-30">2/5</p></div>
              <div className="box-4 relative"><img src={Alex} alt="Alex" />
                <p className="absolute top-1 left-1 bg-black p-1 m-1 rounded bg-opacity-30">3/5</p></div>
              <div className="box-5 relative"><img src={Teresa} alt="Teresa" />
                <p className="absolute top-1 left-1 bg-black p-1 m-1 rounded bg-opacity-30">4/5</p></div>
                <div className="box-1 relative"><img src={David} alt="David" />
                <p className="absolute top-1 left-1 bg-black p-1 m-1 rounded bg-opacity-30">5/5</p>
              </div>
            </div>
          </section>
          <div>
            <p className="footer-title">Project Developed By:</p>
            <ul className="grid grid-cols-1 gap-2">
              <li className="flex items-center">
                <a href="https://github.com/ScarElite" alt="GitHub Logo" target="_blank" className="mr-3">
                  <AiFillGithub className="text-2xl" />
                </a>
                Mitchell Armstrong
              </li>
              <li className="flex items-center">
                <a href="https://github.com/pmacdonald07" alt="GitHub Logo" target="_blank" className="mr-3">
                  <AiFillGithub className="text-2xl" />
                </a>
                Patrick MacDonald
              </li>
              <li className="flex items-center">
                <a href="https://github.com/awchen85" alt="GitHub Logo" target="_blank" className="mr-3">
                  <AiFillGithub className="text-2xl" />
                </a>
                Alex Chen
              </li>
              <li className="flex items-center">
                <a href="https://github.com/hartsfieldt" alt="GitHub Logo" target="_blank" className="mr-3">
                  <AiFillGithub className="text-2xl" />
                </a>
                Teresa Hartsfield
              </li>
              <li className="flex items-center">
                <a href="https://github.com/DavidDowell" alt="GitHub Logo" target="_blank" className="mr-3">
                  <AiFillGithub className="text-2xl" />
                </a>
                David Dowell
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
