import React from "react";

const link_list = [
  {
    id: 1,
    main_class: "col-lg-2 col-md-4 col-sm-6",
    main_title: "Company",
    sub_list: [
      { id: 1, name: "About", link: "http://localhost:3000/" },
      { id: 2, name: "Contact", link: "http://localhost:3000/" },
      { id: 3, name: "Career", link: "http://localhost:3000/" },
    ],
  },
  {
    id: 2,
    main_class: "col-lg-3 col-md-4 col-sm-6",
    main_title: "Product & Services",
    sub_list: [
      { id: 1, name: "Products", link: "http://localhost:3000/" },
      { id: 2, name: "Business", link: "http://localhost:3000/" },
      { id: 3, name: "Developer", link: "http://localhost:3000/" },
    ],
  },
  {
    id: 3,
    main_class: "col-lg-3 col-md-4 col-sm-5",
    main_title: "Help & Suuport",
    sub_list: [
      { id: 1, name: "Support Center", link: "http://localhost:3000/" },
      { id: 2, name: "FAQ", link: "http://localhost:3000/" },
      { id: 3, name: "Terms & Conditions", link: "http://localhost:3000/" },
    ],
  },
];

const Footer = () => {
  return (
    <footer id="footer" className="footer-area">
      <div className="footer-widget">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="footer-logo-support d-md-flex align-items-end justify-content-between">
                <div className="footer-logo d-flex align-items-end">
                  <a className="mt-30" href="index.html">
                    <img src="assets/images/logo.svg" alt="Logo" />
                  </a>

                  <ul className="social mt-30">
                    <li>
                      <a href="http://localhost:3000/">
                        <i className="lni-facebook-filled"></i>
                      </a>
                    </li>
                    <li>
                      <a href="http://localhost:3000/">
                        <i className="lni-twitter-original"></i>
                      </a>
                    </li>
                    <li>
                      <a href="http://localhost:3000/">
                        <i className="lni-instagram-original"></i>
                      </a>
                    </li>
                    <li>
                      <a href="http://localhost:3000/">
                        <i className="lni-linkedin-original"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {link_list.map((link) => {
              return <AddFooter key={link.id} {...link} />;
            })}
            <div className="col-lg-4 col-md-6 col-sm-7">
              <div className="footer-newsletter">
                <h6 className="footer-title">Subscribe Newsletter</h6>
                <div className="newsletter">
                  <form action="http://localhost:3000/">
                    <input type="text" placeholder="Your Email" />
                    <button type="submit">
                      <i className="lni-angle-double-right"></i>
                    </button>
                  </form>
                </div>
                <p className="text">
                  Subscribe weekly newsletter to stay upto date. We don’t send
                  spam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="copyright text-center">
                <p className="text">
                  Template Crafted by{" "}
                  <a rel="nofollow" href="https://uideck.com">
                    UIdeck
                  </a>{" "}
                  - UI Powered by{" "}
                  <a el="nofollow" href="https://rebrand.ly/ayroui">
                    AyroUI
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

const AddFooter = (props) => {
  const { main_class, main_title, sub_list } = props;
  return (
    <div className={main_class}>
      <div className="footer-link">
        <h6 className="footer-title">{main_title}</h6>
        <ul>
          {sub_list.map((item) => {
            return <AddLinks key={item.id} {...item} />;
          })}
        </ul>
      </div>
    </div>
  );
};

const AddLinks = (props) => {
  const { name, link } = props;
  return (
    <li>
      <a href={link}>{name}</a>
    </li>
  );
};
