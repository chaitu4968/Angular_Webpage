# Angular Image Search Engine

A simple image search application built with **Angular (v17+)** that fetches images from the Unsplash API and displays them in a responsive grid layout.

---

## Table of Contents

1. [Getting Started](#getting-started)
2. [Prerequisites](#prerequisites)
3. [Installation](#installation)
4. [Run Locally](#run-locally)
5. [Architecture](#architecture)
6. [Challenges](#challenges)
7. [Features](#features)
8. [Configuration](#configuration)

---

## Getting Started

This project allows you to search for images using keywords via the Unsplash API. It is built to provide a seamless, responsive interface with smooth pagination and error handling.

---

## Prerequisites

Before starting, ensure that you have the following installed on your system:

- [Node.js](https://nodejs.org/) (latest version recommended)
- [Angular CLI](https://angular.io/cli) (v17 or higher)

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/chaitu4968/Angular_Webpage.git
   ```

2. Navigate into the project directory:
   ```bash
   cd Angular_Webpage
   ```

3. Install project dependencies:
   ```bash
   npm install
   ```

---

## Run Locally

To run the project locally:

1. Start the development server:
   ```bash
   ng serve
   ```

2. Open your browser and navigate to:
   ```
   http://localhost:4200
   ```

---

## Architecture

The project is architected with the following principles:

- Built using **Angular Standalone Components**
- **Component-based UI design** for better maintainability
- A **dedicated service layer** for Unsplash API integration
- **Clean separation** between UI and API logic

---

## Challenges

While building this application, the following challenges were addressed:

1. **Handling empty search results and API errors**
   - Implemented proper error handlers to manage scenarios with no search results or API failures.

2. **Managing pagination and application state**
   - Maintained pagination state effectively to ensure a smooth user experience when loading more images.

---

## Features

- **Keyword-based image search**: Type a keyword to fetch relevant images.
- **Responsive image grid**: Ensures great user experience across devices.
- **Load More / Pagination**: Browse more results with a "Load More" button.
- **Basic error handling**: Gracefully handles API and user input errors.

---

## Configuration

This project uses the Unsplash API for fetching images. **Before running the project**, add your Unsplash API access key:

1. Locate the environment configuration file (e.g., `environments/environment.ts` or similar).
2. Add your Unsplash API key there:
   ```typescript
   export const environment = {
     production: false,
     unsplashAccessKey: 'your_access_key_here'
   };
   ```

