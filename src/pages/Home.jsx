import React from 'react';
    import Header from '../components/Header';
    import Hero from '../components/Hero';
    import About from '../components/About';
    import Experience from '../components/Experience';
    import Projects from '../components/Projects';
    import Contact from '../components/Contact';
    import Footer from '../components/Footer';
    import ScrollToTop from '../components/ScrollToTop';
import Education from '../components/Education';

    export default function Home() {
      return (
        <div className="min-h-screen">
          <Header />
          <main>
            <Hero />
            <About />
            <Experience />
            <Education />
            <Projects />
            <Contact />
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      );
    }