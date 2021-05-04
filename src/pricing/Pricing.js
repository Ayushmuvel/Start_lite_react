import React from "react";

const price_lis = [
  {
    id: 1,
    main_class: "single-pricing mt-40",
    img_class: "",
    img_src: "",
    img_alt: "",
    sub_class: "pricing-header text-center",
    sun_title: "Basic",
    price: "$ 199",
    year: "per year",
    styl_color: `<defs><style>.color-1{fill:#2bdbdc;isolation:isolate;}.cls-1{opacity:0.1;}.cls-2{opacity:0.2;}.cls-3{opacity:0.4;}.cls-4{opacity:0.6;}</style></defs>`,
  },
  {
    id: 2,
    main_class: "single-pricing pro mt-40",
    img_class: "pricing-baloon",
    img_src: "assets/images/baloon.svg",
    img_alt: "baloon",
    sub_class: "pricing-header",
    sun_title: "pro",
    price: "$ 399",
    year: "per year",
    styl_color: `<defs><style>.color-2{fill:#0067f4;isolation:isolate;}.cls-1{opacity:0.1;}.cls-2{opacity:0.2;}.cls-3{opacity:0.4;}.cls-4{opacity:0.6;}</style></defs>`,
  },
  {
    id: 3,
    main_class: "single-pricing enterprise mt-40",
    img_class: "pricing-flower",
    img_src: "assets/images/flower.svg",
    img_alt: "flower",
    sub_class: "pricing-header text-right",
    sun_title: "Enterprise",
    price: "$ 799",
    year: "per year",
    styl_color: `<defs><style>.color-3{fill:#4da422;isolation:isolate;}.cls-1{opacity:0.1;}.cls-2{opacity:0.2;}.cls-3{opacity:0.4;}.cls-4{opacity:0.6;}</style></defs>`,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="pricing-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title text-center pb-10">
              <h4 className="title">Our Pricing</h4>
              <p className="text">
                Stop wasting time and money designing and managing a website
                that doesn’t get results. Happiness guaranteed!
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {price_lis.map((each_price) => {
            return (
              <Price_comp key={each_price.id} {...each_price}></Price_comp>
            );
          })}
        </div>
      </div>
    </section>
  );
};

const Price_comp = (props) => {
  const {
    id,
    main_class,
    img_class,
    img_src,
    img_alt,
    sub_class,
    sun_title,
    price,
    year,
    styl_color,
  } = props;
  return (
    <div className="col-lg-4 col-md-7 col-sm-9">
      <div className={main_class}>
        <Image {...props} />
        <div className={sub_class}>
          <h5 className="sub-title">{sun_title}</h5>
          <span className="price">{price}</span>
          <p className="year">{year}</p>
        </div>
        <div className="pricing-list">
          <ul>
            <li>
              <i className="lni-check-mark-circle"></i> Carefully crafted
              components
            </li>
            <li>
              <i className="lni-check-mark-circle"></i> Amazing page examples
            </li>
            <li>
              <i className="lni-check-mark-circle"></i> Super friendly support
              team
            </li>
            <li>
              <i className="lni-check-mark-circle"></i> Awesome Support
            </li>
          </ul>
        </div>
        <div className={sub_class}>
          <a className="main-btn" href="#">
            GET STARTED
          </a>
        </div>
        <div className="buttom-shape">
          <svg
            id="Layer_1"
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 350 112.35"
          >
            {`<defs><style>.color-1{fill:#2bdbdc;isolation:isolate;}.cls-1{opacity:0.1;}.cls-2{opacity:0.2;}.cls-3{opacity:0.4;}.cls-4{opacity:0.6;}</style></defs>`}
            <title>bottom-part1</title>
            <g id="bottom-part">
              <g id="Group_747" data-name="Group 747">
                <path
                  id="Path_294"
                  data-name="Path 294"
                  className="cls-1 color-1"
                  d="M0,24.21c120-55.74,214.32,2.57,267,0S349.18,7.4,349.18,7.4V82.35H0Z"
                  transform="translate(0 0)"
                />
                <path
                  id="Path_297"
                  data-name="Path 297"
                  className="cls-2 color-1"
                  d="M350,34.21c-120-55.74-214.32,2.57-267,0S.82,17.4.82,17.4V92.35H350Z"
                  transform="translate(0 0)"
                />
                <path
                  id="Path_296"
                  data-name="Path 296"
                  className="cls-3 color-1"
                  d="M0,44.21c120-55.74,214.32,2.57,267,0S349.18,27.4,349.18,27.4v74.95H0Z"
                  transform="translate(0 0)"
                />
                <path
                  id="Path_295"
                  data-name="Path 295"
                  className="cls-4 color-1"
                  d="M349.17,54.21c-120-55.74-214.32,2.57-267,0S0,37.4,0,37.4v74.95H349.17Z"
                  transform="translate(0 0)"
                />
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

const Image = (props) => {
  const { img_class, img_alt, img_src } = props;
  console.log(img_class);
  if (img_class == "") {
    return <></>;
  }
  return (
    <div className={img_class}>
      <img src={img_src} alt={img_alt} />
    </div>
  );
};

export default Pricing;
