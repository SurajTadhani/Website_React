import React,{useState} from "react";

function Contact() {
  const [name, setName] = useState({
    fullname : '',
    email : '',
    number : '',
    message : '',
  });
  const InputEvent = (event) => {
 const {name, value} = event.target;

 setName((preVal) => {
  return {
    ...preVal,
    [name] : value,
  };
 })
  };
  const formSubmit = (e) => {
  e.preventDefault();
  alert(`
  My FullName is :- ${name.fullname} 
  Email is :- ${name.email}
  My Number is   :- ${name.number} 
  Query Message is  :-${name.message}
  `)
  
  };
  
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form  onSubmit={formSubmit}>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  FullName
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter Your Full Name"
                  name='fullname'
                  value={name.fullname}
                  onChange={InputEvent}
                />
              </div>
              
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  name='email'
                  value={name.email}
                  onChange={InputEvent}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                  Contact Number
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter Your Contact Number"
                  name='number'
                  value={name.number}
                  onChange={InputEvent}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">
                  Query Message
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  placeholder="Enter a query message"
                  name='message'
                  value={name.message}
                  onChange={InputEvent}
                ></textarea>
              </div>
              <div className="col-12">
              <button type="submit" className="btn btn-outline-primary">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
