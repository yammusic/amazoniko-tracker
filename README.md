# Amazóniko Tracker

![React](https://img.shields.io/badge/React-v18-deepskyblue?logo=react)
![Next.js](https://img.shields.io/badge/Next.js-v14-white?logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-v3-cyan?logo=Tailwind%20CSS)
![Typescript](https://img.shields.io/badge/Typescript-v5-blue?logo=typescript)

## Description

This is a web application developed using Next.js, aimed at managing collectors' data. The application allows users to view a list of collectors, see detailed information about each collector's collected materials, and visualize the collection routes on a map using Google Maps.

## Demo

- App: [https://amazoniko-tracker.vercel.app/](https://amazoniko-tracker.vercel.app/)
- Api docs: [https://amazoniko-tracker.vercel.app/api-doc](https://api-docs.amazoniko-tracker.vercel.app/api-doc)

## Functionalities

- **Data Listing**: Displays a list of collectors on the main page.
- **Detail View**: Shows detailed information about the materials collected by a collector on a specific date, including user name, collection date and time, address, phone number, and kilograms of material collected.
- **Map Integration**: Visualizes the collection routes on a map using Google Maps.
- **Responsive Design**: The application is styled using Tailwind CSS for a clean and responsive user interface.
- **API Integration**: Utilizes RESTful APIs and Server Actions for CRUD operations.

## API endpoints

* GET `/api/hello` -> Use for hello testing
* GET `/api/collectors` -> Use for getting all collectors
* GET `/api/collectors?id={id}` -> Use for getting a collector by ID
* POST `/api/collectors` -> Use for creating a collector
* PATCH `/api/collectors` -> Use for updating a collector
* DELETE `/api/collectors?id={id}` -> Use for deleting a collector by ID
* GET `/api/routes` -> Use for getting all collected routes
* GET `/api/routes?id={id}` -> Use for getting a collected route by ID
* POST `/api/routes` -> Use for creating a collected route
* PATCH `/api/routes` -> Use for updating a collected route
* DELETE `/api/routes?id={id}` -> Use for deleting a collected route by ID

## Architecture

This codebase follows the Hexa3 architecture, which is a combination of Hexagonal Architecture and Domain-Driven Design (DDD) principles. This architecture promotes a clean separation of concerns and a modular design, making the codebase more maintainable and scalable.

### Folder Structure

```bash
├── src
│   ├── app -> (contains routes pages and api)
│   ├── domain
│   │   ├── actions -> (contains server actions)
│   │   ├── constants -> (contains app constants)
│   │   ├── hooks -> (contains custom hooks)
│   │   ├── lib -> (contains library functions)
│   │   ├── polyfills -> (contains JS polyfills)
│   │   ├── prisma -> (contains Prisma schema)
│   │   └── providers -> (contains custom providers)
│   └── ui
│       ├── components -> (contains UI components)
│       ├── containers -> (contains UI containers)
│       ├── layouts -> (contains UI layouts)
│       └── styles -> (contains global CSS styles)
```

## Tech Stack

- [React](https://reactjs.dev/)
- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Material Tailwind](https://material-tailwind.com/)
- [React Google Maps](https://visgl.github.io/react-google-maps/)
- [Prisma](https://www.prisma.io/)
- [useHooks](https://github.com/uidotdev/usehooks)
- [Luxon](https://moment.github.io/luxon/)
- [React Icons](https://react-icons.github.io/react-icons/)
- [Next Swagger Doc](https://github.com/jellydn/next-swagger-doc)
- [Faker](https://fakerjs.dev/)
- [SASS](https://sass-lang.com/)
- [Eslint](https://eslint.org/)
- [Typescript](https://www.typescriptlang.org/)

## Run the app

First, install the dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

> **Note**
> If you want to run the production server:
>
> ```bash
> npm run build
> ```
>
> And then open the production build in the browser:
>
> ```bash
> npm run start
> ```

<!-- ## Run the tests

To run the tests, run the following command:

```bash
npm run test
``` -->

<!-- ## Limitations and Future Improvements

- **Offline Support**: Currently, the application does not support offline mode. Adding service workers could improve this.
- **Advanced Filtering**: Implementing more advanced filtering options for the data displayed. -->
