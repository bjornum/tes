# Vue 3 Template

<!-- Status of Project --->
[![Active Development](https://img.shields.io/badge/Maintenance%20Level-Actively%20Developed-brightgreen.svg)](https://gist.github.com/cheerfulstoic/d107229326a01ff0f333a1d3476e068d)

<!-- Languages, framwork and libraries used + hosting --->
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)
![Netlify](https://img.shields.io/badge/netlify-%23000000.svg?style=for-the-badge&logo=netlify&logoColor=#00C7B7)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![DaisyUI](https://img.shields.io/badge/daisyui-5A0EF8?style=for-the-badge&logo=daisyui&logoColor=white)

***

<br>
<br>
<br>

<!-- Project Description --->
<p> An re-usable template project, used to quickly set up new project pages. </p>
<p> With a few minor changed, you will have an unique project created. </p>
<p> Fully customisable for the partners need. </p>

<br>
<br>

<!-- Modules --->
<h2 align="center"> Project Features </h2>
<p> i18n Language module implemented </p>
<p> Environment setup and Documented </p>
<p> News Module </p>
<p> RSS Module (not completed) </p>
<p> MOOC Module (Not Completed) </p>
<p> Training Module (Not Completed) </p>
<p> More Info </p>
<p> More Info </p>
<p> More Info </p>
<p> More Info </p>


<!-- Project Details --->
<h2 align="center">Project Details</h2>

Live page: ######

Hosted at: #####

Tenant id: <strong>None Connected</strong>

Last Updated: *05-06-2023*

<br>
<br>
<br>
<br>

<!-- How to Get and Run the Project --->
<h2 align="center">Get and Run the Project</h2>

### Clone the Project

```sh
git clone ########
```

### Remove Origin

```sh
git remote remove origin
```

### Install all dependensies and set up project

```sh
npm install
```
### Compile and run the Localhost server

```sh
npm run serve
```

### Compile and Minify for Production

```sh
npm run build
```
<br>
<br>
<br>

<!-- Setting Up the Project --->
<h2 align="center">Setting up the Project</h2>
1. Go to the lang.en.json file, and define the settings of the Project.
- If to show Logo or just project text in the navbar.

2. Find or create a .env file. The project will use from this to display:
  - TenantID
  - Base URL
  - API Key
Keys used are displayed below, but will leave the values due to safety reasons.
These data are within other projects, or should be stored safely somewhere.

```sh
VITE_API_KEY=########
VITE_BASE_URL=https://app.followup.prios.no/api/
VITE_TENANT_ID=000
```

3. Update Netlify Variables.
Should contain the same Keys given, with the values.  

4. Update Project Logo
To make sure it are displayed correctly at all sections, simply replace the file named projectLogo.png with the one of your choice.
Rename the new file to this, and all should be good to go.
The new logo will now be displayed within the Navbar, Sidebar and Footer.
You find this file within ###########

5. Update i18n of the project.
Go into the english locale, and simply update atleast the general key values here, to match the new project.
This will affect the entire page, and display new data at all important places.

6. Change the project favicon.
You need to generate the favicon by yourself.
Good link for this, are placing project logo and run it through this page: https://www.favicon-generator.org/
Place the new favicon within the public folder, and good to go.
If having issues with it showing, placing a simple  . within here, can help.  (weird fix, but it works).

7. Change the Page Theme
Changing the colour theme of the page globally, to instantly make the project unique.
- More INFO coming.


.....




<br>
<br>
<br>

<!-- Project Details --->
<h2 align="center">ChangeLog / Other</h2>
<p>05/06/2023: Updated README, planning the template issues further. </p>
<p>05/06/2023: News Module now get data from API, displays it into clickable cards, opening a modale</p>

<br/>
<br/>

![hippo](https://media3.giphy.com/media/aUovxH8Vf9qDu/giphy.gif)
