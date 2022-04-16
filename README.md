# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

-Mobile

![Screenshot App](https://user-images.githubusercontent.com/10404257/150433203-a9ff7ac0-4a94-40ef-98ea-830c3049d888.png)

-Desktop

![desktopApp](https://user-images.githubusercontent.com/10404257/150433254-3370771e-1aa9-4102-8bfc-b2f2c8ba61f3.png)


Then crop/optimize/edit your image however you like, add it to your project, and update the file path in the image above.

### Links

- Solution URL: [Link](https://github.com/Rtf747/sign-up-form-component)
- Live Site URL: [Link](https://rtf747.github.io/sign-up-form-component/)

## My process

### Built with

- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

While building this little practice, I noticed a bug that react had when using google translate.

When google translate replaces the app's HTML tags with its translated tags, react doesn't find the references in the DOM for the tags it had created, thus causing the app to crash.

How do I solve it? Adding this little script to the top of my react app:

```html
<script>
    if (typeof Node === 'function' && Node.prototype) {
      const originalRemoveChild = Node.prototype.removeChild;
      Node.prototype.removeChild = function (child) {
        if (child.parentNode !== this) {
          if (console) {
            console.error('Cannot remove a child from a different parent', child, this);
          }
          return child;
        }
        return originalRemoveChild.apply(this, arguments);
      }

      const originalInsertBefore = Node.prototype.insertBefore;
      Node.prototype.insertBefore = function (newNode, referenceNode) {
        if (referenceNode && referenceNode.parentNode !== this) {
          if (console) {
            console.error('Cannot insert before a reference node from a different parent', referenceNode, this);
          }
          return newNode;
        }
        return originalInsertBefore.apply(this, arguments);
      }
    }
  </script>
```

Here is the link where I found the solution:

- [Here](https://github.com/facebook/react/issues/11538#issuecomment-417504600)

## Author

- Frontend Mentor - [@Rtf747](https://www.frontendmentor.io/profile/Rtf747)
