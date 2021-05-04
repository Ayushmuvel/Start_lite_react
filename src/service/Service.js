import React from "react";

var services_lis = [
  {
    id: 1,
    class_name: "lni-bolt",
    service_title: "Startup",
    text: "Short description for the ones",
  },
  {
    id: 2,
    class_name: "lni-bar-chart",
    service_title: "SaaS Business",
    text: "Short description for the ones",
  },
  {
    id: 3,
    class_name: "lni-brush",
    service_title: "Agency",
    text: "Short description for the ones",
  },
  {
    id: 4,
    class_name: "lni-bolt",
    service_title: "App Landing",
    text: "Short description for the ones",
  },
];

const Service = () => {
  return (
    <section id="service" className="services-area">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="section-title pb-10">
              <h4 className="title">Crafted For</h4>
              <p className="text">
                Stop wasting time and money designing and managing a website
                that doesn’t get results. Happiness guaranteed!
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <div className="row">
              {services_lis.map((service) => {
                return (
                  <Service_content
                    key={service.id}
                    {...service}
                  ></Service_content>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="services-image d-lg-flex align-items-center">
        <div className="image">
          <img src="assets/images/services.png" alt="Services" />
        </div>
      </div>
    </section>
  );
};

const Service_content = (props) => {
  const { id, class_name, service_title, text } = props;
  console.log(id);
  return (
    <div className="col-md-6">
      <div className="services-content mt-40 d-sm-flex">
        <div className="services-icon">
          <i className={class_name}></i>
        </div>
        <div className="services-content media-body">
          <h4 className="services-title">{service_title}</h4>
          <p className="services-text">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Service;
