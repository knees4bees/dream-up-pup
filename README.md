<h1 align="left">Dream Up Pup 🐾</h1>

[![Build Status](https://travis-ci.com/knees4bees/dream-up-pup.svg?branch=main)](https://travis-ci.com/knees4bees/dream-up-pup)

<p>
   <a href="https://dream-up-pup.herokuapp.com"><strong>Explore the app »</strong></a>
</p>

![image](https://user-images.githubusercontent.com/72777671/116177743-98fc9d80-a6d1-11eb-81e4-149a81319dea.png)



## Table of Contents

* [About the Project](#about-the-project)
* [Installation](#installation)
* [Functionality](#functionality)
* [Learning Goals](#learning-goals)
* [Future Iterations](#future-iterations)
* [Technologies Used](#technologies-used)
* [Contributors](#contributors)
* [Contact](#contact)


## About the Project

Dream Up Pup is a whimsical app designed for people who need to unwind but don't have much time to do so ... and they love dogs. It fetches ~~toys~~ data from the Dog API [(view documentation)](https://dog.ceo/dog-api/), first to populate a list of breeds on the landing page, and then to retrieve ~~toys~~ three random images of the selected breed. Users are given space to enter a title and three captions to create a very short story, which is then nicely displayed in a format suitable for sharing with friends.

View the deployed site on Heroku: [Dream Up Pup](https://dream-up-pup.herokuapp.com)

## Installation

1. Clone this repo to your local machine with `git clone <your SSH Key>`.
2. Navigate into this directory with `cd dream-up-pup`.
3. Run `npm install`.
4. Run `npm start` to see the app running locally on `http://localhost:3000`.
5. Run `npm run cyptest` to open Cypress and run the tests in `dream_up_pup_spec.js`.


## Functionality
* [Landing Page](#landing-page)
* [Create Story](#create-story)
* [View Story](#view-story)
* [Responsive Design](#responsive-design)
* [Accessibility](#accessibility)
* [Error Handling](#error-handling)
* [Loading Screen](#loading-screen)

#### Landing Page 
When a user visits the site they are welcomed with an invitation to choose a dog breed from a dropdown list and a fun, customized icon of a dog peeking out above a book. 

![image](https://user-images.githubusercontent.com/72777671/116176201-f8a57980-a6ce-11eb-9839-74f254e85f41.png)

#### Create Story
When a user chooses a dog breed and clicks on the "Write story" button, they are taken to a new page with three random images of the breed they selected and space for them to add a title for their story and a caption for each image:

![image](https://user-images.githubusercontent.com/72777671/116176639-b3ce1280-a6cf-11eb-9de5-6d702bba809f.png)

The user can add their own text to match each picture:

![image](https://user-images.githubusercontent.com/72777671/116176673-c7797900-a6cf-11eb-9c4b-99bc6ad41c5d.png)

#### View Story
When a user clicks on a the "Create story" button, they are shown a panel with all three images and their text together, suitable for sharing with friends:

![image](https://user-images.githubusercontent.com/72777671/116176787-fc85cb80-a6cf-11eb-84fe-a239a367491f.png)

#### Responsive Design
 - The app is fully responsive across all screen sizes. Viewed on an iPhone 6/7/8:

![image](https://user-images.githubusercontent.com/72777671/116175894-6604da80-a6ce-11eb-8f98-faeaee35ffb6.png)
![image](https://user-images.githubusercontent.com/72777671/116176939-33f47800-a6d0-11eb-94a5-8a22c8bdbc44.png)

#### Accessibility 
Accessibility was a consideration throughout the development of this app. Dream Up Pup earned a score of 100% using the Lighthouse audit tool, and the WAVE Web Accessibility Evaluation Tools shows zero errors and zero contrast errors. 

![accessibility](https://user-images.githubusercontent.com/72777671/116175597-d7905900-a6cd-11eb-8124-a85ac3da498c.png)

#### Error Handling
To help prevent user frustration, network request errors and bad URLs are handled gracefully, with a message displayed to the user.

#### Loading Screen
When the app is retrieving data, a message appears on the screen to say the data is being fetched. 🐾 

## Learning Goals
Increase fluency with:
- React
- React Router
- asynchronous JavaScript
- end-to-end testing with Cypress
- user personas
- best practices for UI/UX 

## Future Iterations
- Add save-to-shelf functionality.
- User can choose how many pictures to include in their story.

## Technologies Used
- ![React](https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB)
- ![ReactRouter](https://camo.githubusercontent.com/4f9d20f3a284d2f6634282f61f82a62e99ee9906537dc9859decfdc9efbb51ec/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f52656163745f526f757465722d4341343234353f7374796c653d666f722d7468652d6261646765266c6f676f3d72656163742d726f75746572266c6f676f436f6c6f723d7768697465)
- ![JavaScript](https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
- ![HTML5](https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white)
- ![CSS3](https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white)
- ![Webpack](https://img.shields.io/badge/webpack%20-%238DD6F9.svg?&style=for-the-badge&logo=webpack&logoColor=black)
- ![Cypress](https://img.shields.io/badge/cypress%20-%2317202C.svg?&style=for-the-badge&logo=cypress&logoColor=white)
- [![Travis CI](https://img.shields.io/travis/73VW/TechnicalReport.svg?style=for-the-badge&label=Travis+CI)

## Contributors
* [Katie B](https://github.com/knees4bees) - Application Creator
* Doghouse and pawprint icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>. Dog-above-book icon created using dog icon from <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> and book icon from <a href="https://www.flaticon.com/authors/good-ware" title="Good Ware">Good Ware</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a>

## Contact
[<img src="https://img.shields.io/badge/LinkedIn-Katie--B-informational?style=for-the-badge&labelColor=black&logo=linkedin&logoColor=0077b5&&color=0077b5"/>][linkedin]
[<img src="https://img.shields.io/badge/Github-KatieB-informational?style=for-the-badge&labelColor=black&logo=github&color=8B0BD5"/>][github]

<!-- Personal Definitions  -->
[linkedin]: https://www.linkedin.com/in/katie-b-dev/
[github]: https://github.com/knees4bees
