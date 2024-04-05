# SearchMovie App

Welcome to SearchMovie App! This is a simple React application designed to help you find information about movies, series, and episodes using the OMDB API.

## Overview

SearchMovie App allows users to search for movies, series, or episodes by entering keywords into the search bar. The application fetches data from the OMDB API and displays relevant information such as title, release year, plot, ratings, and more.

## Features

- **Search:** Enter keywords in the search bar to find movies, series, or episodes.
- **Responsive Design:** The application is designed to work seamlessly across different screen sizes and devices.

## Getting Started

To get started with SearchMovie App, follow these steps:

1. Clone the repository:

    ```bash
    git clone https://github.com/SiddharthDhirde/SearchMovie.git
    ```
    
2. Install dependencies:
    
    ```bash
    cd movie-finder-app
    npm install
    ```
    
3. Obtain an API key from OMDB:

    Visit [OMDB API](https://www.omdbapi.com/apikey.aspx) to obtain your API key.

4. Set up environment variables:

    Create a .env file in the root directory of the project and add your OMDB API key:
    ```bash
    REACT_APP_OMDB_API_KEY=your_api_key_here
    ```
    
5. Start the development server:

    ```bash
    npm start
    ```

6. Open your browser and navigate to http://localhost:3000 to view the application.


## Limitations
Please note that the OMDB API has certain limitations on fetching data, such as rate limits and restrictions on the number of requests per day. Make sure to review the [OMDB API documentation](https://www.omdbapi.com/) for more information on usage limits and guidelines.

## Technologies Used

- React
- OMDB API

## Contributing

Contributions are welcome! If you have any suggestions, feature requests, or bug reports, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE). See the LICENSE file for details.