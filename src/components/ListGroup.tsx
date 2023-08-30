import locationIcon from "../assets/icon-location.png";

const ListGroup = (props: any) => {
  return (
    <div className="journal-list">
      <div className="journal-img">
        <img src={props.item.image} alt="image" />
      </div>
      <div className="journal-desc">
        <img src={locationIcon} alt="location" />
        <span>{props.item.location}</span>
        <a href={props.item.map}>View on Google Maps</a>
        <h1>{props.item.title}</h1>
        <p className="journal-desc-date">
          {props.item.start_date} - {props.item.end_date}
        </p>
        <p>{props.item.description}</p>
      </div>
    </div>
  );
};

export default ListGroup;
