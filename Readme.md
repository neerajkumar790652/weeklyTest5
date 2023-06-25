# React Application for Fetching and Displaying Posts

This React application periodically polls an API to fetch new posts and displays them in a table. The application uses the Hacker News Algolia API to fetch posts by date.

## Features

- Periodically fetches new posts every 10 seconds from the Hacker News Algolia API.
- Appends the newly fetched posts to the existing list of posts.
- Increases the page count in each subsequent API request to retrieve more posts.
- Displays the title, URL, created_at, and author of each post in a table.

## method and React Comcept 
 - In this project we use useState( ) hooks for making Posts and pages dynamically 
 - we use useEffect hooks also because in this project we use the sideEffect then sideEffect is handle by the useEffect() hooks in react and we use the async and await also used for better for response to fetch the data from api we use the fetch() method
 - for newpost we use the map function to iteration of array with object
 - to merge old post with newpost we use the spread operator
 - for every 10 sec fetchpost again we the setInterval function
 - for UI we use map function again to iteration of array and show the data comes from API into the Table 

### Implementation Details

The application is built using React and utilizes the fetch API to make HTTP requests to the Hacker News Algolia API. The useState hook is used to manage the state of the fetched posts and the page count. The useEffect hook is used to fetch posts on component mount and at intervals of 10 seconds. The fetched posts are displayed in a table using HTML's <table> element.
