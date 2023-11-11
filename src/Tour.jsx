import { useState } from "react";

const Tour = ({ tour, updateList }) => {
  const { id, image, info, name, price } = tour;
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour" key={id}>
      <div>
        <img className="img" src={image} alt="" />
        <div className="tour-info">
          <h5>{name}</h5>
          <p>
            {!readMore ? `${info.substring(0, 150)}...` : info}
            <button
              className="info-btn"
              onClick={() => {
                setReadMore(!readMore);
              }}
            >
              {readMore ? `see less` : `read more`}
            </button>
          </p>

          <span className="tour-price">${price}</span>
          <button
            className="btn btn-block delete-btn"
            onClick={() => updateList(id)}
          >
            Not Interested
          </button>
        </div>
      </div>
    </article>
  );
};
export default Tour;
