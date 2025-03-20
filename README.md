# Recipe Finder App

This is a Recipe Finder application built with Next.js and Tailwind CSS. It allows users to search for recipes based on various criteria such as query, cuisine, and maximum ready time.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/recipe-finder-app.git
   cd recipe-finder-app
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env.local` file in the root directory and add your Spoonacular API key:

   ```env
   API_KEY=your_spoonacular_api_key
   ```

### Running the Development Server

To start the development server, run:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

### Building for Production

To build the application for production, run:

```bash
npm run build
# or
yarn build
```

### Running in Production Mode

To run the application in production mode, run:

```bash
npm run start
# or
yarn start
```

## Technologies Used

- [Next.js](https://nextjs.org/) - The React Framework for Production
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework

## Project Structure

- `src/` - Contains the source code for the application
  - `app/` - Contains the main application components and pages
  - `components/` - Contains reusable components
  - `styles/` - Contains global styles

## License

This project is licensed under the MIT License.
