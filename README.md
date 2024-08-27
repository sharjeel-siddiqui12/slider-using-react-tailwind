# Slider Using React and Tailwind CSS

## Description
This project is a simple implementation of a slider component using React and Tailwind CSS. The slider allows users to navigate through a set of images or content by dragging or clicking on navigation buttons.

## Features
- Responsive design
- Smooth sliding animation
- Customizable slide content
- Support for touch events
- Keyboard navigation

## Installation
1. Clone the repository: `git clone https://github.com/sharjeel-siddiqui12/slider-using-react-tailwind.git`
2. Navigate to the project directory: `cd slider-using-react-tailwind`
3. Install dependencies: `npm install`

## Usage
1. Import the Slider component into your React application:
```jsx
import Slider from './Slider';

function App() {
    return (
        <div className="App">
            <Slider>
                {/* Add your slide content here */}
            </Slider>
        </div>
    );
}

export default App;
```
2. Customize the slide content by adding your own components or images inside the Slider component.

## Configuration
The Slider component accepts the following props:

- `slidesToShow` (number): The number of slides to show at a time. Default: 1.
- `autoplay` (boolean): Enable automatic slide transition. Default: false.
- `autoplayInterval` (number): The interval between slide transitions in milliseconds. Default: 3000.
- `infinite` (boolean): Enable infinite looping of slides. Default: true.

Example usage:
```jsx
<Slider slidesToShow={3} autoplay infinite>
    {/* Add your slide content here */}
</Slider>
```

## Contributing
Contributions are welcome! If you have any ideas, suggestions, or bug reports, please open an issue or submit a pull request.


## Screenshots

<img align="center" alt="readme_image" src="src/assets/mainSS.png" />
<img align="center" alt="readme_image" src="src/assets/mainSS1.png" />


## License
This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for more information.
