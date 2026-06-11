# Simon Game

A simple browser-based Simon memory game built with HTML, CSS, and JavaScript. The game shows a growing sequence of colored buttons, and the player must repeat the sequence correctly to move to the next level.

## Play this here

https://simonsgame2.netlify.app/

## Features

- Starts when the player presses any key
- Generates a random color sequence each round
- Increases the level after every correct sequence
- Highlights buttons with a flash animation
- Shows the final score after a wrong move
- Resets the game so the player can start again

## Tech Stack

- HTML
- CSS
- JavaScript

## How to Play

1. Open the game in a browser.
2. Press any key to start.
3. Watch the button that flashes.
4. Click the buttons in the same order as the game sequence.
5. Each level adds one new color to the sequence.
6. If you click the wrong button, the game ends and your score is shown.
7. Press any key to restart.

## Project Structure

```text
Simon Game/
|-- index.html
|-- style.css
|-- app.js
`-- README.md
```

## Getting Started

No installation is required.

Clone the repository:

```bash
git clone <repository-url>
```

Open the project folder and launch `index.html` in your browser.

## Files Overview

- `index.html` contains the game layout and color buttons.
- `style.css` styles the page, buttons, colors, and flash effect.
- `app.js` handles game logic, random sequence generation, user clicks, level progression, and reset behavior.

## Future Improvements

- Add sound effects for each color
- Add a highest score tracker
- Improve mobile responsiveness
- Add a start button for touch-only devices
- Add smoother animations
