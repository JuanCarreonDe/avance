const Data = ({ models, active }) => {
  return (
    //   <div className="escene__data data">
    <>
      {models.map((model) => (
        <div
          key={model.id}
          className={`${
            active === model.id ? "escene__data--active" : ""
          } escene__data`}
          onClick={() => handleButtonClick(model)}
        >
          <span
            className="data__span"
          >
            {model.title}
          </span>
          <p className="data__p">{model.description}</p>
          {/* <button className={`${active === model.id ? "btns__button--active" : ""} btns__button`} /> */}
        </div>
      ))}
    </>
  );
};

export default Data;
