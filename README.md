Angular Image Search Engine

A simple image search application built with Angular (v17+) that fetches images from the Unsplash API and displays them in a responsive grid layout.

Getting Started
Prerequisites

Node.js

Angular CLI

Installation
git clone https://github.com/chaitu4968/Angular_Webpage.git
cd Angular_Webpage
npm install

Run Locally
ng serve


Open http://localhost:4200 in your browser.

Architecture

Built using Angular Standalone Components

Component-based UI design

Dedicated service layer for Unsplash API integration

Clean separation between UI and API logic

Challenges

Handling empty search results and API errors

Managing pagination and application state

Solution: Implemented proper error handling and maintained pagination state to ensure a smooth user experience.

Features

Keyword-based image search

Responsive image grid

Load More / pagination

Basic error handling

Configuration

This project uses the Unsplash API.
Add your access key in the environment configuration file.
Do not commit API keys to public repositories.
