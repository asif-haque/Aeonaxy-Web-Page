import Courses from "./sections/Courses";
import Navbar from "./sections/Navbar";
import Streak from "./sections/Streak";
import FeaturedLearningPaths from "./sections/FeaturedLearningPaths";

function App() {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main className="py-5 px-3 md:px-10 lg:py-10 lg:px-32">
        {/* As no routing is needed for the assignment, directly jumping to the structure of the home page */}
        <Streak />
        <Courses />
        <FeaturedLearningPaths />
      </main>
    </div>
  );
}

export default App;
