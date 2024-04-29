
# Weather Application

This is a weather application built with React and uses the OpenWeatherMap API to fetch weather data. It provides current weather conditions, including temperature, humidity, wind speed, and a visual representation of the weather, based on the given location.

## Features

- Search for weather by city name
- Display current weather conditions with a dynamic image representing the weather type
- Provide humidity and wind speed information
- Responsive design for various devices
- Uses OpenWeatherMap API for weather data

## Project Structure

- **App.jsx**: The main component that coordinates the weather data fetching and renders other components.
- **SearchBar.jsx**: Component for entering a city name and triggering the search.
- **Climate.jsx**: Component that displays the temperature, place name, weather description, and a corresponding weather image.
- **WindSpeed.jsx**: Component that shows the wind speed.
- **Humidity.jsx**: Component that shows the humidity.
- **Tile.jsx**: An additional component to display other information or design elements.
- **assets/images**: Directory containing the images used to represent various weather conditions.

## Getting Started

To run the project locally, follow these steps:

### Prerequisites

- Node.js and npm
- An API key from [OpenWeatherMap](https://openweathermap.org/)
- VS Code

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/weather-app.git
   cd weather-app
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up your environment variables**:

   - Create a `.env` file in the root directory.
   - Add your OpenWeatherMap API key:

     ```bash
     REACT_APP_OPENWEATHER_API_KEY=your_api_key_here
     ```

### Running the App

To run the app in development mode:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your web browser. The app will automatically reload if you make any changes to the code.

### Building for Production

To build the app for production:

```bash
npm run build
```

The output will be in the `build/` directory.

## Known Issues and Troubleshooting

- If you get a "City not found" error, make sure you entered the correct city name and spelled it correctly.
- If you encounter any other errors, check the console output for details.

## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

1. Fork the repository.
2. Create a new branch for your changes.
3. Commit your changes and push to your branch.
4. Submit a pull request.

## Acknowledgements

Special thanks to [OpenWeatherMap](https://openweathermap.org/) for providing the weather data.
