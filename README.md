# Interactive Poll Widget

This project is an interactive poll widget built using React. It includes a fun and animated Pac-Man themed poll component. The widget can handle multiple sets of questions and options, and allows users to vote using both mouse clicks and keyboard navigation.

## Features

- Display a simple poll with configurable questions and options.
- Handle multiple sets of questions.
- Save and display votes for each question independently.
- Animated Pac-Man theme for voting.
- Keyboard and mouse interaction for voting.
- Votes are saved in local storage.
- Lightweight and easily embeddable into HTML pages.

## Getting Started

These instructions will help you set up the project on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/devapurva/poll-widget.git
    ```

2. Navigate to the project directory:

    ```bash
    cd poll-widget
    ```

3. Install the dependencies:

    ```bash
    npm install
    ```

4. Start the development server:

    ```bash
    npm start
    ```

    The application will be available at `http://localhost:3000`.

### Building for Production

To create a production build of the project, run:

```bash
npm run build
```

The production-ready files will be in the build directory.

## Embedding the Widget

To embed the poll widget in an HTML page, follow these steps:

1. Build the project as described above.
    ```bash
    npm run build
    ```

2. Copy the contents of the build directory to your web server.

3. Include the following script in your HTML page:
    ```bash
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Poll Widget Test</title>
    </head>
    <body>
      <div id="poll-widget-container"></div>
      <script src="/static/js/main.js"></script>
      <script>
        const questions = [
          {
            question: 'How do you feel today?',
            options: ['Brilliant! I have so much energy', 'Always can be worse.', 'Please, end my misery.'],
          },
          {
            question: 'How do you like the Opinary test?',
            options: ['It was great and so challenging.', 'Not bad, but you can improve.', 'It was a nightmare, never again.'],
          },
        ];
    
        mountWidget('poll-widget-container', questions, 'pacman');
      </script>
    </body>
    </html>
   ```

## Configuration

You can configure the questions and options by modifying the questions array in the script tag of your HTML page.

## Testing

To run the unit tests, use the following command:

```bash
npm test
```

The tests are written using Jest and React Testing Library.

## Documentation

The main components of the project are:

1. `Poll.tsx`: The main poll component that handles multiple questions and options.
2. `PacmanPoll.tsx`: The Pac-Man themed poll component.
3. `index.tsx`: The entry point of the application.
4. `index.css`: The main stylesheet.
5. `assets`: Directory containing the images used for the Pac-Man animation.

## License

This project is licensed under the MIT License.

## Author

Apurva Wadekar
