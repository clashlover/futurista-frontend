import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import React from "react";
import About from "../../components/About/about";
import Attendance from "../../components/Attandance/attendance";
import CopyRight from "../../components/Copy-Right/copyRight";
import Discussion from "../../components/Discussion/discussion";
import Expectation from "../../components/Expectation/expectation";
import Footer from "../../components/Footer/footer";
import HomeHeader from "../../components/Home-Heading/homeHeader";
import Industries from "../../components/Industries/industries";
import InputModal from "../../components/Modal/modal";
import Navbar from "../../components/Navbar/navbar";
import Questions from "../../components/Questions/questions";
import Speakers from "../../components/Speakers/speakers";
import Sponsors from "../../components/Sponsors/sponsors";
import Topic from "../../components/Topic/topic";
import Webinar from "../../components/Webinar/webinar";
import "./home.scss";

const Home = () => {
  return (
    <div className="main-container">
      <InputModal />
      <section id="home">
        <Navbar />
        <HomeHeader />
      </section>
      <section id="about">
        <About />
        <Expectation />
      </section>
      <section id="webinars">
        <Webinar />
      </section>
      <section id="discussion">
        <Discussion />
        <Topic />
        <Industries />
        <Attendance />
        <Speakers />
        <Sponsors />
        <Questions />
      </section>
      <section id="footer">
        <Footer />
      </section>
      <CopyRight />
    </div>
  );
};

export default Home;
