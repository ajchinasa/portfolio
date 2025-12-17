import Hero from "./Hero";
import Body from "./Body";
import Footer from "./Footer";

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col bg-[#17130d]">
      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center pt-20 sm:pt-24 px-4 sm:px-6">
        <div className="w-full max-w-6xl">
          <Hero />
        </div>

        <div className="w-full max-w-6xl mt-12 sm:mt-20">
          <Body />
        </div>
      </main>

      {/* Footer */}
      <footer className="px-4 sm:px-6 py-10 sm:py-14">
        <Footer />
      </footer>
    </div>
  );
};

export default Projects;
