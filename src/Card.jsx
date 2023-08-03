import React from "react";

function Card(props) {
  return (
    <article className="card">
      <img src={props.imageUrl} alt="photo" className="card--img" />
      <div className="card--info">
        <div className="card--info--location">
          <img src="../location.png" alt="location" />
          <p className="card--info--location--city">{props.location}</p>
          <a
            href={props.googleMapsUrl}
            target="_blank"
            className="card--info--location--map"
          >
            View on Google Maps
          </a>
        </div>
        <p className="card--name">{props.title}</p>
        <p className="card--date">
          <span>{props.startDate}</span> - <span>{props.endDate}</span>
        </p>
        <p className="card--descr">{props.description}</p>
      </div>
    </article>
  );
}

export default Card;
