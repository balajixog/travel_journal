export default function Entry(props){
    return(
      <>
        <article className="entry">
              <div className="entry-image-container">
              <img className="entry-image" src={props.img} alt={props.alt} />
              </div>
              <div className="entry-details">
                <img className="location-pin" src="https://img.icons8.com/?size=100&id=13800&format=png&color=000000" alt="location pin" />
                  <span className="location">{props.location}</span>
                <a href={props.googleMapsUrl}>View on Google Maps</a>
                <h2 className="entry-title">{props.title}</h2>
                <p className="trip-dates">{props.startDate} - {props.endDate}</p>
                <p className="entry-text">{props.description}</p> 
              </div>
            </article>
            
         </>
    )
}