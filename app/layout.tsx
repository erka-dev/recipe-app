// "import" brings in the global CSS file so styles apply to every single page
import "./globals.css";
// "import" brings in your custom Header component so it stays visible as you navigate
import Header from "./components/Header";

// "export const metadata" defines information about the site that isn't visible on the page
// This is used by browsers for the tab title and by Google for search results (SEO)
export const metadata = {
  title: "ErkutCooks - Recipes & Spanish", // The text that appears on the browser tab
  description: "A personal project to manage recipes and Spanish lessons", // The "snippet" shown in search results
};

// "export default function RootLayout" is the top-level container for your whole app
// "{ children }: { children: React.ReactNode }" is technical talk for: 
// "Whatever page the user is currently looking at, put it inside this layout."
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <html> and <body> are the standard building blocks of any website
    <html lang="en">
      <body style={{ margin: 0, padding: 0, backgroundColor: '#fff' }}>
        {/* We place the <Header /> here so it stays at the top of every page */}
        <Header />

        {/* "children" represents the content of whichever page is active (Home, Recipes, etc.) */}
        {/* By placing it here, the page content appears right below the Header */}
        {children}
      </body>
    </html>
  );
}