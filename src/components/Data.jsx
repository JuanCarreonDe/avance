import { useState } from "react";

const Data = ({ models, active, setActive }) => {
  // const [active, setActive] = useState();
  
    return (
      <>
        {models.map((model) => (
          <div
            key={model.id}
            className={`${
              active === model.id ? "escene__data--active" : ""
            } escene__data`}
          >
            <div className="data__close" onClick={()=>setActive(-1)}>
            <span className="close__span close__span--1"></span>
            <span className="close__span close__span--2"></span>
            <span className="close__span close__span--3"></span>
        </div>
            <span
              className="data__span"
            >
              {model.title}
            </span>
            <p className="data__p">{model.description}</p>
          </div>
        ))}
      </>
    );
  };
  
  export default Data;
  