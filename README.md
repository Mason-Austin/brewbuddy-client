# BrewBuddy

This application simplifies the management of homemade brews while also providing access to a wide range of brews crafted by other users.


## About the User <!-- This is a scaled down user persona -->
- The target audience for this application primarily consists of homebrewing enthusiasts who seek seamless management of their brewing endeavors. These users are individuals dedicated to crafting their own alcoholic beverages and desire a user-friendly solution to         streamline the organization of their homebrews.
- This app streamlines the management of brewing batches, enabling users to effortlessly document and replicate their previous brews. It also serves as a platform for users to draw inspiration from each other's brews when crafting new recipes.

## Features <!-- List your app features using bullets! Do NOT use a paragraph. No one will read that! -->
- Create brews with personalized details including name, description, image, stage, and categories.
- Access individual brew logs for each brew, allowing users to create, delete, and edit logs as required.
- Explore a variety of brews crafted by other users within the community.

## To get the App setup

1. Set up a [Firebase](https://firebase.google.com/) project with just Authentication - Here's how: [Firebase Setup & Authentication](https://www.loom.com/share/163ffe1539bb482196efa713ed6231e9)

2. Clone BrewBuddy-Client to your local machine
``` bash
git@github.com:Mason-Austin/brewbuddy-client.git
```

2. Move into directory
``` bash
cd BrewBuddy-Client
```

3. Once in BrewBuddy's code, create a .env file at the root of the project and paste the following keys into the .env file:
``` bash
NEXT_PUBLIC_FIREBASE_API_KEY=""
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=""
NEXT_PUBLIC_DATABASE_URL=http://localhost:8000 

```

4. The last portion of the Firebase walkthrough from step 1 highlights where to find the values to put in the empty strings in the code snippet of step 4. From Firebase, copy the values and paste them into the empty strings of the respective keys located in the .env file.

5. Be in the root directory and from your command line, run
``` bash
npm install or npm i
```
6. Now from your command line, run
``` bash
npm run prepare
```
7. To start the app, run
``` bash
npm run dev
```
8. Click http://localhost:3000 in the terminal to open the browser
9. Make sure the sever side is setup as well. Enjoy!
## Relevant Links <!-- Link to all the things that are required outside of the ones that have their own section -->
- [Wireframes](https://www.figma.com/file/sDoylO5F3Bj4uGVKj9uiEZ/BrewBuddy?type=whiteboard&node-id=0-1&t=C0d58Pbr9NtLLnBS-0)
- [ERD](https://dbdiagram.io/d/Brew-Buddy-65cab807ac844320aeff0b4c)
- [Project Board](https://github.com/users/Mason-Austin/projects/5)
- [BrewBuddy-Server](https://github.com/Mason-Austin/brewbuddy-server)

<!-- ## Project Screenshots These can be inside of your project. Look at the repos from class and see how the images are included in the readme <img width="1148" alt="Your Alt" src="your-link.png"> -->

## Contributors
- [Mason Austin](https://github.com/Mason-Austin)
