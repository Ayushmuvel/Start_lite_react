import React from "react";

const link_list = [
  {
    id: 1,
    main_class: "col-lg-2 col-md-4 col-sm-6",
    main_title: "Company",
    sub_list: [
      { id: 1, name: "About", link: "#" },
      { id: 2, name: "Contact", link: "#" },
      { id: 3, name: "Career", link: "#" },
    ],
  },
  {
    id: 2,
    main_class: "col-lg-3 col-md-4 col-sm-6",
    main_title: "Product & Services",
    sub_list: [
      { id: 1, name: "Products", link: "#" },
      { id: 2, name: "Business", link: "#" },
      { id: 3, name: "Developer", link: "#" },
    ],
  },
  {
    id: 3,
    main_class: "col-lg-3 col-md-4 col-sm-5",
    main_title: "Help & Suuport",
    sub_list: [
      { id: 1, name: "Support Center", link: "#" },
      { id: 2, name: "FAQ", link: "#" },
      { id: 3, name: "Terms & Conditions", link: "#" },
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
                      <a href="#">
                        <i className="lni-facebook-filled"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="lni-twitter-original"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="lni-instagram-original"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#">
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
              return <Add_footer key={link.id} {...link} />;
            })}
            <div className="col-lg-4 col-md-6 col-sm-7">
              <div className="footer-newsletter">
                <h6 className="footer-title">Subscribe Newsletter</h6>
                <div className="newsletter">
                  <form action="#">
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

const Add_footer = (props) => {
  const { id, main_class, main_title, sub_list } = props;
  return (
    <div className={main_class}>
      <div className="footer-link">
        <h6 className="footer-title">{main_title}</h6>
        <ul>
          {sub_list.map((item) => {
            return <Add_links key={item.id} {...item} />;
          })}
        </ul>
      </div>
    </div>
  );
};

const Add_links = (props) => {
  const { id, name, link } = props;
  return (
    <li>
      <a href={link}>{name}</a>
    </li>
  );
};
