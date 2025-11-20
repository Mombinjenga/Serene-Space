import { defineConfig } from "vite"; // Importing the defineConfig function from Vite
import react from "@vitejs/plugin-react-swc"; // Importing the React plugin for Vite
import path from "path"; // Importing Node.js path module for resolving paths

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::", // Setting the server to listen on all IPv6 addresses
    port: 8080, // Defining the port on which the server will run
  },
  plugins: [
    react(), // Using the React plugin for Vite to handle React files
    // You can conditionally add other plugins here
  ].filter(Boolean), // Filtering out any falsey values from the plugins array
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // Setting up a path alias so '@' points to the src directory
    },
  },
}));