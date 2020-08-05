# Category Tree App

This is an exercise app which renders a category tree data structure and enables the user to add new nodes interactively.

## Getting Started

To run the development server:

```bash
npm run dev
# or
yarn dev
```

To run the production server:

```bash
npm run start
# or
yarn start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Background

### Project structure overview

- **pages** - routing setup
- **public** - public assets
- **src** - main app folder
  - **components** - folder containing both container and pure components (may be split up into functional domains when the app will grow)
  - **constants** - collections of constants
  - **helpers** - handy helper methods
  - **models** - entities' interfaces
  - **state**: directory of data stores, managers
  - **styles**: global SCSS styles and variables

### Stack

- **TypeScript**
- **React.js** + **Next.js**
- **React Hooks** for local state management
- **CSS Modules** for local SCSS
- **Jest** for testing
- **react-hook-form** for form validation
- **ESLint** for linting
- **Prettier** for code auto-formatting - no trivial code styling debates 🙏
