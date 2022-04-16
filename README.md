# Rock-Paper-Scissors

## Scope, Goals and Description
Welcome to my Rock-Paper-Scissors game! 

This is a player vs computer game where, following the rules of the game, the user and computer can score points up to 10, before one or the other wins that round. 

This game is designed to be played by someone who wants to play a game but doesn't have the time to play something complex. Perhaps on a mobile phone when travelling on the subway/underground. It is also ideal for a younger audience This game is at a simple enough complexity that is can be played and enjoyed by anyone, as it is everyday by children everywhere. The game has many variations to it across the globe, swapping out the names of rock, paper and scissors for other words, or adding complexity by introducing other variables (Such as Rock, Paper, Scissors, Lizard, Spock!). For my game, I've opted to keep the traditional 3 variable rock, paper and scissors!

The goal of this website, beyond testing my Javascript abilities, is to make a well-tested and fully functioning basic game that combines functionality with clean design and colours. 

[Live Link here](robrowno.github.io/rock-paper-scissors/)

---
## Website across different platforms
![Responsiveness check](/assets/images/readme-images/responsiveness.png)

---
## Table of Contents
1. [Wireframe](#wireframe)
2. [UX Description](#ux-description)
3. [Technologies used](#technologies-used)
4. [Website Features](#website-features)
5. [Features to implement](#other-features-to-implement)
6. [Testing and Validation](#testing-and-validation)
7. [Bugs and Issues](#bugs-and-issues)
8. [Peer Reviews](#peer-reviews)
9. [Deployment](#deployment)
10. [Credits](#credits)
11. [Final Thoughts](#final-thoughts-for-pp2)


---
## Wireframe
I used Balsamiq to create my wireframes for this project. I took a mobile/tablet-first approach with this project, and as such, my wireframes reflect that. 

I first went about creating a wireframe for how I wanted my starting page to look, and when I was happy, I moved on to the game page sections for tablet and mobil respectively. 

### Starting Page

![Start page wireframe](assets/images/readme-images/start-page-wireframe.png)


### Game Page

![Game page wireframe](assets/images/readme-images/game-wireframe.png)

---
## UX Description

For this game, bright and bold colours were a must. However, I wanted to make sure that they kept the player's focus and didn't distract from the objective of the game!
I featured the follwing:

Colours:

- A radial gradient background featuring #fdbb2d, orange and aquamarine.
- Start-Game and Reset buttons in Green.
- All content boxes in Lightgreen.
- User and Computer score labels in Lightskyblue
- Score and Timer in #fff 
- All fonts and borders in Black. 

Layout:

- Start Page:
  - Game Rules 
  - Supporting Image 
  - Input field
  - Start Button

- Game Page:
  - Title/Return to Start Page
  - Player Choices bar
  - Username vs Computer bar
  - "Game Arena"
  - Win/Lose/Draw Banner following result
  - Another Username vs Comp bar displaying match score
  - Round score displayed beneath that
  - Reset game button


---

## Technologies used

- HTML5 - Used to structure my website
- CSS3 - Used to style my website
- JS - Used to provide logic to my website
- Github - The cloud based service for hosting repositories for over 73 million developers
- Git - Used to add, commit and push my changes to the server
- Balsamiq - Used to plan and create my wireframes for my projects
- Favicon.io - Used to source my favicon icons for my website
- Google Fonts - Used to source different fonts in my css file

---
## Website features

### Start-Page
An essential task for this website was to have to responsive displays that change upon clicking a button/div when the player is ready to play. 

By hiding the main page through surrounding it in a div in my html file, I was able to make this start page show by default and then hide that page when the player clicks 'start'. 

The Start-Page briefly describes the rules of the game of Rock, Paper, Scissors and tells the user how the scoring system works. An image provides visual feedback to the user as well to help cement the rules in their mind. When they feel they understand the rules of the game, then can enter a name/username and click 'start'. If they feel they need to go back to the start page to check over the rules or change their username, they can do so by clicking the title on the game page.

![Start-Page](/assets/images/readme-images/startpage-ss.png)

### Game-Page

Once the player has clicked start, the game page will appear. This is done by hiding the start page div in Javascript and revealing the main page div.
This is the full page on mobile: 

![Main-Page](/assets/images/readme-images/gamepage-ss.png)

### Choices Bar

The game features a choices bar with 3 options to select. Rock (Fist emoji 🤜), Paper (Open hand emoji ✋) and Scissors (Peace sign emoji ✌️). There is an event listener on each choice that will listen for a click and replicate in the arena section. 
Above the choices bar is the title, which when clicked on, takes the user back to the start page. There is a reminder of this on the start page as well. 

![Choices](/assets/images/readme-images/choices-ss.png)

### Game Arena

The arena is where the users choice and the random computer generated response will show. The user choice will show on the left and the computer choice on the right.

### Before choice:
![Before-Choice](/assets/images/readme-images/game-arena-ss.png)

### After Choice:
![After-Choice](/assets/images/readme-images/game-arena-result-ss.png)

### Banner displayed when player wins
![You Win!](/assets/images/readme-images/banner-win-ss.png)

### Banner displayed when player loses
![You Lose!](/assets/images/readme-images/banner-lose-ss.png)

### Banner displayed when player draws
![Draw](/assets/images/readme-images/banner-draw-ss.png)

### Score Tally Section: 
This section displays the user and computer in a bar with the match score in between, and the round score below that. The match score will increment as the game goes on until one of the players reaches 10. At which point, the round tally will go up by one and reset the match scores back to 0 to play another round. 

At the very bottom of the page is a green reset div/button, that has an event listener that when clicked on, will reset all the scores (match and round) to 0 to start the game over again from thew beginning. 

![Score Section](/assets/images/readme-images/scores-reset-ss.png)


### Round-Over Modal
This is the modal that displays when a round is won by either the player or the computer. Depending on which player wins the round, a different message will display. 

### Round-Win modal
![Round-Win Modal](/assets/images/readme-images/win-modal.png)

### Round-Lose modal
![Round-Lose Modal](/assets/images/readme-images/lose-modal.png)

---
## Other features to implement

Given more time to invest in the project, I would likely aim to implement the following features: 

- Either a countdown or count-up timer. Depending on which, there would either be a limited amount of time in which you have to win as many matches and rounds as you can, or in the case of counting up, the timer would serve just to show the user how long they've been playing.

- An extra pair of choices to replicate something akin to rock, paper, scissors, lizard, spock. This would add an extra layer of complexity to the game, and would be selectable as an option in-game, so the player could jump between 3 and 5 option versions of the game as they so desire.

- Some basic animation to the emojis to add some nice visual effects to the project. Perhaps an emoji can increase in size slightly for the winning player and decrease in size slightly for the losing player. 


---

## Testing and Validation

### Responsiveness Testing (Multi-Platform)

I began this project with a mobile first approach, with the goal of having a website that works fluently between a minimum width of 320px (such as a small mobile device) up to 1440px wide (such as a large laptop).

In order to do this, I tested my application on the following devices:
- Iphone 5
- Iphone 12
- Macbook Pro
- Using the responsiveness checker in dev tools to visualise no other devices. 

Test:
- Using deployed link, open the Rock Paper Scissors game on Iphone and Mac to test functions, check for bugs and unexpected styling issues. 
- Using dev tools on my computer, I opened the website through the same link and right clicked my mouse to bring up an options list that brought up the dev tools option. 
- If responsiveness on mobile and laptop is satisfactory, move to dev tools and select the preset widths above the website for mobile small, medium, large, tablet, laptop regular, large and large monitor. To further test, select the dimensions tab and select individual devices to visualise on acurate pixel sizes for various phones and tablets on the market right now. 


Expectation: Having used percentages and viewport width for a majority of the sizing on my project, and utilising flex and its associated properties, I worked hard to ensure that responsiveness targets were met early on. I expected the application to scale up and down in size as deemed necessary. Starting with a mobile first approach, I didn't expect any errors on small screens. 


Result: 
- 



### Accessibility Testing

For testing accesibility and performance, I used Lighthouse in Dev tools. 
Lighthouse runs an audit of your website and feeds back a set of scores for accessibility, performance and best practices among others. 

I can confirm that the website passed with great scores. See report below:

![Lighthouse Report](/assets/images/readme-images/lighthouse-score-ss.png)


### Feature/Functionality Testing

There are various events that occur on my project, so I had to compile a list of functionality testing to ensure I got exactly the right results each time.
This ranges from username inputs, to start/reset buttons and game buttons that trigger a visual and behind-the-scenes response. 




### Validation:

HTML Validation through [HTML-Validator](https://validator.w3.org/)

No warnings or errors.
![HTML PASS](/assets/images/readme-images/html-val-ss.png)

CSS Validation through [CSS-Validator](https://jigsaw.w3.org/css-validator/)

No warnings or errors.
![CSS PASS](/assets/images/readme-images/css-val-ss.png)

JS Validation through [JS-Validator](https://jshint.com/)

No warnings or errors.
![JS PASS](/assets/images/readme-images/js-val-ss.png)

---
## Bugs and Issues
I had several issues with this project. And thanks to some keen-eyed people who helped me troubleshoot and gave me a walkthrough on debugging, I was able to get past them. 

The first issue I had was that when I was trying to create a function for getting a result back from the computer, I was always getting a draw when I console.log'd the result. Turned out I wasn't specific enough in my targeting. I needed to use ".innerHTML" sooner than I thought in my code as before I found that out it was targetting a whole div. 

I also had issues with getting the username to display correctly when entered in the input field. It was pointed out to me that I should use ".value" in my code and "||" to default back to the standard 'User' placeholder if nothing is written in the input field. 

I put the debugger to good use when trying to see why my modals weren't being targetted as expected. Through getting to 10 points in-game and setting break points on the correct lines of code, I was able to work out why some elements weren't being targetted correctly and work on fixing it. I was suggested the idea of making the modal-outer transparent as a way to get around the issue of not being able to find a reliable way to 'stop' the game whilst the modal appears. 

Early on, the win/lose/draw banner wasn't displaying as I had intended through my css styling. I found out it was because I needed to set the style.display to 'block' in my js file for it to be interpretted as I wanted it to. 

---
## Peer reviews

---
## Deployment

---
## Credits

- Fonts imported from: [Google Fonts](https://fonts.google.com/specimen/Varela+Round?preview.text=Rock%20Paper%20Scissors!&preview.text_type=custom)
- Favicons imported from: [Favicon.io](https://favicon.io/emoji-favicons/oncoming-fist)
- Learned how to make colour gradient backgrounds on: [cssgradient.io](https://cssgradient.io/)
- Image for Rock, Paper, Scissors rules came from here: [RPS Rules image](https://andygrunwald.com/blog/playing-rockpaperscissors-with-500-people/)
- Responsiveness check from: [Am I Responsive?](http://ami.responsivedesign.is/)
- W3 Schools inspired my modal design: [W3 Schools](https://www.w3schools.com/howto/howto_css_modals.asp)


### Help from Peers and mentors

- A massive thanks to Danilo D'Auria for his superb help in getting me through some hurdles on my JS journey!
- Many thanks to Daisy McGirr, my mentor through this project, who gave me all the guidance and support required to steer me in the right direction.
- The London C.I Coding Community group. Always supporting which me with my questions and giving great advice. 


---
## Final Thoughts for PP2 

This project really challenged my understanding of Javascript and I certainly learned a lot through doing this project and from getting help from peers and mentors across the board. The project has certainly inspired me to continue developing my JS skills further and I expect I will do some side-projects to accomplish this. 

---

[Go Back To The Top](#rock-paper-scissors)