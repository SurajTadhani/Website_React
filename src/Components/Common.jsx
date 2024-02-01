import React from "react";
import { NavLink } from "react-router-dom";
import './Home.css';

function Common(props) {
  return (
    <>
      <section
     
        id="header"
        className="d-flex align-items-center"
        style={{ 
       padding:'20px',
         marginTop: '5px' 
      }}
      >
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 max-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                   {props.title }
                    <strong className="brand-name"> Radhe EnterPrice</strong>
                  </h1>
                  <h3 className="my-3">
                    {props.lines}
                  </h3>
                  <div className="mt-3">
                    <NavLink to={props.visit} className="btn-get-started">
                      {props.buttonname}
                    </NavLink>
                  </div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img
                    src={props.imgsrc}
                    className="img-fluid  animated"
                    alt=""
                    style={{
                      borderRadius: "50px",
                      marginLeft: "20px",
                      // height: "250px",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Common;

