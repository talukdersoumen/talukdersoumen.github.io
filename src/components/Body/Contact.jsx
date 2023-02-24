import React from "react";

const Contact = () => {
  return (
    <div
      className="ContactBody flex flex-col justify-center items-center h-screen w-full
relative bg-cover bg-no-repeat text-white"
      id="contact"
    >
      <div className="ContactBody-title text-3xl font-extrabold absolute right-10 top-6 font-mono">
        ..// contact
      </div>
      <div className="flex w-9/12 justify-center items-center">
        <form action="#" method="post">
          <div className="flex flex-col gap-4">
            <div className="flex gap-4">
              {" "}
              <div className="flex flex-col">
                <label htmlFor="firstName">First Name:</label>
                <input type="text" placeholder="Enter First Name" />
              </div>
              <div className="flex flex-col">
                <label htmlFor="lastName">Last Name:</label>
                <input type="text" placeholder="Enter Last Name" />{" "}
              </div>
            </div>
            <div className="flex flex-col">
              <label htmlFor="fullName">Full Name:</label>
              <input type="text" placeholder="Enter Full Name" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="eMail">Enter E-mail:</label>
              <input
                type="email"
                name=""
                id=""
                placeholder="example@coolmail.com"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="message">Write Message:</label>
              <input type="text" placeholder="Write here" />
            </div>
            <div className="flex gap-5 justify-center items-center">
              <input type="button" value="Submit" />
              <span>or</span>
              <a
                href="mailto:soumen.sagor@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mail Directly{" "}
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
