# Travel Journal

A React application that displays a collection of travel entries with locations, dates, descriptions, and images.

## 🌐 Demo

🔗 **Live Demo:** [travel_journal](https://traveljournal0.netlify.app/)

---
## Description

Travel Journal is a simple and elegant web application that showcases travel experiences. Each entry includes a location with Google Maps link, travel dates, description, and accompanying image. 

## Features

- Display multiple travel entries
- Location with Google Maps integration
- Travel dates for each entry
- Descriptive text for experiences
- Image gallery
- Responsive layout
- Clean and modern design

## Installation
```bash
npm install react react-dom
```

## Project Structure
```

src/
├── components/
│   ├── Header.jsx
│   └── Entry.jsx
├── App.jsx
├── data.js
├── index.css
└── styles.css
```

## Data Structure

The `data.js` file should export an array of travel entry objects:
```javascript
[
  {
    id: 1,
    img: "image-url",
    title: "Location Name",
    country: "Country",
    googleMapsLink: "maps-url",
    dates: "Date Range",
    text: "Description"
  }
]
```

## Components

### App.jsx

Main component that imports data and renders header and entry list.

### Header.jsx

Displays the application header/title.

### Entry.jsx

Individual travel entry component displaying location details, dates, and description.

## Usage

The app automatically maps through the travel data and creates entry components using the spread operator to pass all properties as props.

## Technologies

- React
- JavaScript ES6+
- CSS3

## Customization

Add new travel entries by updating the `data.js` file with new entry objects following the required structure.

## Browser Support

Requires modern browser with ES6+ support.

## License

Available for educational and personal use.
