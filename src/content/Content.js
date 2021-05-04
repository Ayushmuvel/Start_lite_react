import React from "react";

const input_lis = [
  {
    id: 1,
    in_type: "text",
    in_name: "name",
    in_placeholder: "Your Name",
    in_data_err: "Name is required.",
  },
  {
    id: 2,
    in_type: "email",
    in_name: "email",
    in_placeholder: "Your Email",
    in_data_err: "Valid email is required.",
  },
  {
    id: 3,
    in_type: "text",
    in_name: "subject",
    in_placeholder: "Subject",
    in_data_err: "Subject is required.",
  },
  {
    id: 4,
    in_type: "text",
    in_name: "phone",
    in_placeholder: "Phone",
    in_data_err: "Phone is required.",
  },
  {
    id: 5,
    in_type: "text_area",
    in_name: "message",
    in_placeholder: "Your Mesaage",
    in_data_err: "Please, leave us a message.",
  },
  {
    id: 6,
    in_type: "button",
    in_name: "submit",
    in_placeholder: "main-btn",
    in_data_err: "Name is required.",
  },
];

const Content = () => {
  return (
    <section id="contact" className="contact-area">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6">
            <div className="section-title text-center pb-10">
              <h4 className="title">Get In touch</h4>
              <p className="text">
                Stop wasting time and money designing and managing a website
                that doesn’t get results. Happiness guaranteed!
              </p>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="contact-form">
              <form
                id="contact-form"
                action="assets/contact.php"
                method="post"
                data-toggle="validator"
              >
                <div className="row">
                  {input_lis.map((inp) => {
                    return <Input_component key={inp.id} {...inp} />;
                  })}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;

const Input_component = (props) => {
  const { in_type, in_name, in_placeholder, in_data_err } = props;
  console.log(in_type);
  if (in_type == "button") {
    return (
      <>
        <p className="form-message"></p>
        <div className="col-md-12">
          <div className="single-form form-group text-center">
            <button type="submit" className="main-btn">
              send message
            </button>
          </div>
        </div>
      </>
    );
  }
  if (in_type == "text_area") {
    return (
      <div className="col-md-12">
        <div className="single-form form-group">
          <textarea
            placeholder="Your Mesaage"
            name="message"
            data-error="Please, leave us a message."
            required="required"
          ></textarea>
          <div className="help-block with-errors"></div>
        </div>
      </div>
    );
  }
  return (
    <div className="col-md-6">
      <div className="single-form form-group">
        <input
          type="text"
          name={in_name}
          placeholder={in_placeholder}
          data-error={in_data_err}
          required="required"
        />
        <div className="help-block with-errors"></div>
      </div>
    </div>
  );
};
