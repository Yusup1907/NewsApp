# News App Documentation

## Table of Contents
1. [Introduction](#introduction)
2. [Getting Started](#getting-started)
3. [Running the App](#running-the-app)
4. [Troubleshooting](#troubleshooting)
5. [Additional Resources](#additional-resources)

## Introduction
This documentation provides a step-by-step guide to develop and run a news app using Expo and `react-native-web`. The app will display news categories, sources, and articles from the NewsAPI.

## Getting Started
### Prerequisites
- Node.js and npm installed on your computer.

### Step 1: Create the Project
1. Open a terminal and run:
`npm install -g expo-cli`
`expo init NewsApp`
2. Choose a template, e.g., "blank" or "tabs".

### Step 2: Install Dependencies
1. Navigate to the project directory:
`cd NewsApp`

2. Install required dependencies:
`npm install axios @react-navigation/native @react-navigation/native-stack`


### Step 3: Implement Screens
1. Create screen components for category listing, news sources, news articles, and web view.

### Step 4: Set Up Navigation
1. Create a navigation component (`Navigation.js`) to manage screen navigation.

## Running the App
### Step 1: Run on Emulator (Mobile)
1. To run on Android emulator:
`npm run android`

2. To run on iOS simulator:
`npm run ios`


### Step 2: Run on Browser (Web)
1. Install `react-native-web`:
`npm install react-native-web`

2. Update the `"web"` script in `package.json`:
```json
"web": "expo start --web"

### Run on Web
`npm run web`

