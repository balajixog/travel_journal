// import Header from "./components/Header"
// import Entry from "./components/Entry"
// import Contact from "./Contact"
// import './styles.css';

// export default function App(){
//     return(
//        <div className="contacts">
//        <Contact 
//        img="https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?uid=R157617185&ga=GA1.1.583639479.1742050592&semt=ais_items_boosted&w=740"
//        name="Mr. Whiskerson"
//        phoneNo="(123) 456-7890"
//        email="mr.whiskaz@catnap.meow"
//        />
//        <Contact
//        img="https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?uid=R157617185&ga=GA1.1.583639479.1742050592&semt=ais_items_boosted&w=740"
//        name="rin"
//        phoneNo="(123) 456-7890"
//        email="mr.whiskaz@catnap.meow"
//        />
//        <Contact
//        img="https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?uid=R157617185&ga=GA1.1.583639479.1742050592&semt=ais_items_boosted&w=740"
//        name="Alen"
//        phoneNo="(123) 45690"
//        email="mr.whiskaz@catp.meow"
//        />
//        <Contact
//          img="https://img.freepik.com/free-photo/waist-up-portrait-handsome-serious-unshaven-male-keeps-hands-together-dressed-dark-blue-shirt-has-talk-with-interlocutor-stands-against-white-wall-self-confident-man-freelancer_273609-16320.jpg?uid=R157617185&ga=GA1.1.583639479.1742050592&semt=ais_items_boosted&w=740"
//          name="John Doe"
//         phoneNo="(123) 456-7890"
//         email="john.doe@example.com"
//        />
//        </div>
//     )
// } 
 import Header from "./components/Header"
 import Entry from "./components/Entry"
 import './index.css';
import data from "./data.js";

 const entries = data.map((item) => {
    return (
        <Entry 
            key={item.id}
            {...item} // Spread operator to pass all properties of the item object as props
            // img={item.img}   
        />
    );
});
 export default function App(){
    return(
        <>
        <Header />
        <div className="journal">
            {entries}
        </div>
       </>
    )
  }