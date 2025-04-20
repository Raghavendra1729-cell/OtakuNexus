# Otaku Nexus

## Overview
Otaku Nexus is an anime discovery platform that helps users find, track, and get recommendations for anime. Built with React and Vite, this application connects to the Jikan API to provide a comprehensive anime browsing experience.

## Table of Contents
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [API Integration](#api-integration)
- [Screenshots](#screenshots)
- [Future Enhancements](#future-enhancements)
- [Contributing](#contributing)
- [License](#license)

## Features

### Navigation
The application uses React Router DOM for navigation between three main components:
- Home
- MyList
- Recommendations


![Uploading Screenshot 2025-04-20 at 11.13.32 AM.png…]()





### Home Page
The Home page consists of four main components:

1. **Sliding Top Anime**
   - Displays spotlight anime that automatically slides every 4 seconds
   - Uses Jikan API to fetch top 25 spotlight anime
   - Implementation: Created a custom slider with useEffect and setTimeout

2. **Search Bar**
   - Features debounce search that activates 500ms after user input
   - Shows top 5 search results instantly
   - Implementation: Built with useState and useEffect for debounce functionality

3. **Explore More Anime**
   - Displays top 25 anime in card format
   - Implementation: Created AnimeCard components to display data from Jikan page API

4. **Pagination**
   - Navigate through multiple pages of anime listings
   - Implementation: Custom pagination component with page navigation controls

### MyList Page
- Stores liked anime using React Context
- Features search functionality to filter saved anime
- Includes delete feature to remove anime from favorites
- Implementation: Used Context API to manage state across components

### Recommendations Page
- Generates anime recommendations based on user's top 3 favorite anime
- Uses Jikan recommendation API for intelligent suggestions
- Implementation: Analyzes user preferences through Context and fetches tailored recommendations

## Tech Stack
- **Frontend**: React.js
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **State Management**: React Context API
- **Styling**: Tailwind CSS
- **API**: Jikan API (Unofficial MyAnimeList API)

## Implementation Details

### Context API Integration
- Created a FavContext to manage favorite anime across components
- The context stores anime favorites and provides functions to add/remove items
- Used throughout the application to maintain consistent state

### API Integration
- Connected to Jikan API for anime data fetching
- Implemented API calls for:
  - Top anime listings
  - Search functionality
  - Anime details
  - Recommendation engine

### Responsive Design
- Implemented with Tailwind CSS
- Responsive layout that works on desktop and mobile devices
- Custom styling for cards, navigation, and search components

## File Structure
```
otaku-nexus/
├── src/
│   ├── Components/
│   │   └── Navbar.jsx
│   ├── Context/
│   ├── Pages/
│   │   ├── AiRecom/
│   │   │   └── AiRecom.jsx
│   │   ├── FavPage/
│   │   │   └── FavPage.jsx
│   │   └── HomePage/
│   │       ├── Home.jsx
│   │       ├── ListAnime.jsx
│   │       ├── Searchbar.jsx
│   │       └── Sliding.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
└── ...
```

## Component Details

### Navbar Component
- Provides navigation between different sections of the app
- Uses React Router's Link and NavLink for routing
- Styled with Tailwind CSS for responsive design

### Home Components
- **Sliding Component**: Implements automatic carousel for featured anime
- **Search Component**: Provides real-time search with debounce to limit API calls
- **ListAnime Component**: Displays anime cards with essential information
- **Pagination**: Enables browsing through extensive anime collections

### FavPage Component
- Displays user's favorite anime collection
- Implements search functionality within favorites
- Provides remove functionality to delete items from favorites

### AiRecom Component
- Analyzes user's favorite anime to generate recommendations
- Connects to Jikan API to fetch similar anime based on user preferences
- Displays recommendations with relevant information

## Installation & Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/otaku-nexus.git
cd otaku-nexus
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server with Vite:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:5174
```

## Usage Guide

### Finding Anime
1. Use the Home page to browse through popular anime
2. Utilize the search bar for specific titles
3. Browse through pages using the pagination controls

### Managing Favorites
1. Click the heart icon on any anime card to add it to your favorites
2. Visit the MyList page to view all your favorites
3. Use the search function to find specific favorites
4. Remove unwanted anime from your list with the delete button

### Getting Recommendations
1. Add at least one anime to your favorites
2. Visit the Recommendations page
3. The system will analyze your top favorites and suggest similar anime
4. Add recommended anime to your favorites directly from the recommendations page

## Future Enhancements
- User authentication system
- Watch history tracking
- Episode progress tracking
- Seasonal anime calendar
- Community ratings and reviews
- Enhanced recommendation algorithm
- Watch-together features

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License
This project is licensed under the MIT License - see the LICENSE file for details.

---

Developed with ❤️ by [Your Name]
