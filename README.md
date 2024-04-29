## Steps to run the project

In the project directory, you can run:

### `npm install`

Installs a package and any dependencies it requires to run the app.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Functionality added in the project

- Created custom UI components for the app, using React JavaScript library for reusability.
- Display a list of movies sorted in descending order of popularity.
- Load a total of only 20 movies for each year.
- By default, when a user lands on the page, display a list of movies of the year
  2012
- Implemented smooth scrolling behavior to load more movies as the user scrolls in
  any direction i.e load movies of previous year when user scrolls up and load
  movies of next year when user scrolls down until the current year.

- Provided a filter UI that allows users to filter movies by genre.
- When a user selects one or more genres, the list should only display movies of
  the selected genres.
- Ensured smooth scrolling even when more and more movies are loaded in the
  DOM.
- Used TypeScript for enhanced type safety and code quality.
