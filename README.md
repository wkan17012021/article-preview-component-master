# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

The markup and styling initially wasn't too time consuming as it appeared to be box model and flex design. This took about an hour and a half to make the first draft for both screen sizes. However, i hadn't worked on any project before that required this button toggling the css effect before so i knew that this is where more of the time would be spent on.

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

## My process

1. Identify the number of sections required: parent wrapper, image container, parent text container with nested divs for the text, avatar details and the hidden / active content.
2. Include additional wrappers to cater for layout change in the desktop version.
3. Use listener on the share icon with 'click' event to trigger showing the hidden content in combination with z-indexes to ensure the share icon is always on top allowing for this perception of a toggle effect.
4. Use someone else's code to style up the hidden content.

### Built with

- HTML5 markup
- SCSS
- Flexbox
- Mobile-first workflow

### What I learned

- How to implement a common but effective pop-up effect using basic JS (didn't know about the toggle: active state) and knowledge of a combination of css properties: height, z-index, absolute positioning, ::after to create the popup polygon trailing from the share icon (this worked in Drougnov's code but not mine).

### Continued development

- Continue to integrate plain JS into style changes, get familiar with using toggle: active state.
- Continue to practice using absolute positioning (the share content is not responsive).
- Continue to learn how ::before and ::after pseudo-elements are implemented.

### Useful resources

- https://www.frontendmentor.io/solutions/mobile-first-responsive-article-preview-component-SMr2xzLb6

## Author

- the dogue 🐕

## Acknowledgments

- BIPLOB BARUA @Drougnov - for his/her solution to the JS and share content section of this challenge.
