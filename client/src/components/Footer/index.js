/* eslint-disable */
import footerDivider from "../../assets/images/footer-divider.png";
import footerGitHub from "../../assets/images/github-mark-white.png";

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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pro in
            tincidunt quam vitae elit efficitur, consequat lacinia lectus
            hendrerit.
          </p>
        </div>
        <div className="footer-right grid md:grid-cols-2 sm:grid-cols-1 gap-8">
          <div className="footer-menu self-center">
            <ul>
              <li>link</li>
              <li>link</li>
              <li>link</li>
              <li>link</li>
            </ul>
          </div>
          <div>
            <p className="footer-title">Project Developed By:</p>
            <ul className="grid grid-cols-1 gap-2">
              <li>
                <a
                  href="https://github.com/awchen85"
                  className="flex items-center"
                  target="_blank"
                >
                  <img src={footerGitHub} alt="GitHub Logo" className="mr-3" />
                  Alex Chen
                </a>
              </li>
              <li className="flex items-center">
                <img src={footerGitHub} alt="GitHub Logo" className="mr-3" />
                Git Hub Username
              </li>
              <li className="flex items-center">
                <img src={footerGitHub} alt="GitHub Logo" className="mr-3" />
                Git Hub Username
              </li>
              <li className="flex items-center">
                <img src={footerGitHub} alt="GitHub Logo" className="mr-3" />
                Git Hub Username
              </li>
              <li className="flex items-center">
                <img src={footerGitHub} alt="GitHub Logo" className="mr-3" />
                Git Hub Username
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
