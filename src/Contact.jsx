
export default function Contact(props){
    return(
        <article className="contact-card">
    <img 
        src={props.img}
        alt="Photo of Mr. Whiskerson"
    />
    <h3>{props.name}</h3>
    <div className="info-group">
        <img 
            src="https://img.icons8.com/?size=100&id=9729&format=png&color=000000" 
            alt="phone icon" 
        />
        <p>{props.phoneNo}</p>
    </div>
    <div className="info-group">
        <img 
            src="https://img.icons8.com/?size=100&id=86875&format=png&color=000000" 
            alt="mail icon"
        />
        <p>{props.email}</p>
    </div>
</article>
    )
}