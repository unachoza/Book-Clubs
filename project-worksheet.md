# Project Overview

## Project Schedule

This schedule will be used to keep track of your progress throughout the week and align with our expectations.  

You are **responsible** for scheduling time with your squad to seek approval for each deliverable by the end of the corresponding day, excluding `Saturday` and `Sunday`.

|  Day | Deliverable | Status
|---|---| ---|
|Day 1| Project Description /Wireframes / Priority Matrix | Incomplete
|Day 2| API Search and Render Results | Incomplete
|Day 3| Book Club Form | Incomplete
|Day 4| Pseudocode / actual code | Incomplete
|Day 5| Initial Clickable Model  | Incomplete
|Day 6| N/A| Incomplete
|Day 7| N/A | Incomplete
|Day 8| N/A | Incomplete
|Day 9| MVP | Incomplete
|Day 10| Present | Incomplete



## Project Description

I'm creating an app that will allow users to create books clubs for the books they are reading.

https://res.cloudinary.com/dh41vh9dx/image/upload/v1542662672/Image_uploaded_from_iOS_1.jpg

## Wireframes
https://res.cloudinary.com/dh41vh9dx/image/upload/v1542662674/Image_uploaded_from_iOS.jpg

## Priority Matrix

https://res.cloudinary.com/dh41vh9dx/image/upload/v1542662672/Image_uploaded_from_iOS_3.jpg

### MVP/PostMVP - 5min

The functionality will then be divided into two separate lists: MPV and PostMVP.  Carefully decided what is placed into your MVP as the client will expect this functionality to be implemented upon project completion.  

#### MVP 

- Search Books
- Google Books API
- Search Results
- Book Single
- Create Book Club Form
- Save to Database
- Navigation Bar

#### PostMVP 

- User Login
- Create Profile
- Map location of Meetings
- Search by Genre
- Comments on Books 
- Book Club Questions

## React Architectural Design

https://res.cloudinary.com/dh41vh9dx/image/upload/v1542662673/Image_uploaded_from_iOS_2.jpg

## ERD 

https://res.cloudinary.com/dh41vh9dx/image/upload/v1542664594/Screen_Shot_2018-11-19_at_4.55.29_PM.png

## Functional Components

Based on the initial logic defined in the previous sections try and breakdown the logic further into stateless/stateful components. 

| Component | Description | 
| --- | --- |  
| App | highest level component. Has login logic that is passed down | 
| SignIn  | Stateful Component and form   | 
| Create Account | Stateful component with form to allow user to make account and stores this data in database | 
| Profile Page | Renders user profile, stateless | 
| Search | Stateful component that makes API call to Google Books | 
| Results | Renders and maps over results of call, stateless | 
| Book Single | Renders Book, stateless  | 
| Book Club Form | Create Book Club Form, stateful |
| Book Club Singe | Renders Book Club  | 
| Book Club Edit Form| Edit Book Club Form, statefu | 

## Time Frames


| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Wire Framing and App Design | H | 6hrs| 6hrs | 6hrs |
| Creating Database | H | 6hrs| X | X|
| Search call Parsing API data | H | 4hrs| X | X|
| Rendering Search Results | H | 3hrs| X | X|
| Book Single | H | 3hrs| X | X|
| Book Club Form  | H | 3hrs| X | X|
| Book Club Single | H | 4hrs| X | X |
| Book Club Edit Form  | H | 3hrs| X | X|
| Navigation Bar | M | 4hrs| X | X|
| NPM Packages| M | 4hrs| X | X|
| All the CSS | M | 8hrs | X | X|
| CRUD Functionality | H | 5hrs| X | X|
| Experimenting | L | 2hrs | X | X|
| Total | N/A | 45 | X | X |

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| Create Login | L | 3hrs | X | X|
| Create Profile Form | L | 2hrs | X | X|
| Profile Singe | L | 4hrs | X | X|
| Meeting Location Map | L | 4hrs | X | X|
| Search By Genre| L | 2hrs | X | X|
| Comment on Books | L | 4hrs | X | X|
| Add Book Club Questions| L | 3hrs | X | X|
| CSS Animations | L | 6hrs| X | X|
 Total | N/A | 25 | X | X |




## Helper Functions
Helper functions should be generic enought that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

| Function | Description | 
| --- | :---: |  
| Capitalize | This will capitalize the first letter in a string of text | 
| Search
| Favorites
| Toggle 
| Map 

## Additional Libraries / Dependencies
    "axios": "^0.18.0",
    "body-scroll-lock": "^2.5.10",
    "react": "^16.6.0",
    "react-dom": "^16.6.0",
    "react-scripts": "^2

## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

```
function reverse(string) {
    // here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  

 Fake user login became a real user login with Authentication functionality. Kozak made a lot of progress with this. 

## Issues and Resolutions
Time Management. increased communications. Work duplication. verion control. 

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier          

**RESOLUTION**: Missing comma after first object in sources {} object