# Cyber playground - workshop Prizma campus VTI izegem

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

## Overview

A mock website of a banking company that is poorly developed. There are multiple vulnerable comments / hints hidden in this page. It's your goal to find them and use them to gain acces to the admin account.

## Run playground

1. Clone the repository: `git clone https://github.com/mattjemattias/cyber.git`

2. Install the dependencies: `cd cyber & npm install`

3. Run the enviroment: `npm run dev`

## Hints in the project.

1. On the admin page there is a data-hint on the input fields.

    - Basically saying the username is admin. //TODO: make a social media page so they get the username from the social media page.
    - Refering to the robots.txt file.

2. On the robots.txt file there is a url: /keepthishidden

3. On the /keepthishidden url there is a hint refering to their localstorage where they will find the /topsecret page.

4. When loggin in with the wrong credentials, there should be a hint on what decrypting algoritm to use.

5. There is a /topsecret page. On that page there is a base64 decrypted password.
