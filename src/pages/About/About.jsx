/* eslint-disable react/no-unescaped-entities */

import { useEffect, useState } from "react";
import Testimonial from "./Testimonial";
import Service from "./Service";

const servicesData = [
  {
    icon: "/images/icon-design.svg",
    title: "Web design",
    description:
      "The most modern and high-quality design made at a professional level.",
  },
  {
    icon: "/images/icon-dev.svg",
    title: "Web development",
    description: "High-quality development of sites at the professional level.",
  },

  {
    icon: "/images/icon-photo.svg",
    title: "Photography",
    description:
      "I make high-quality photos of any category at a professional level.",
  },
];

const About = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    fetch("testimonials.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTestimonials(data);
      });
  }, []);
  return (
    <article className="about  active" data-page="about">
      <header>
        <h2 className="h2 article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          Hi, I'm Shubham Kanaskar, a passionate Full Stack Web Developer. I
          completed my Master of Computer Application degree in September 2023
          and have since been immersed in MERN stack projects, honing my skills
          and mastering the fundamentals. My journey in web development has been
          exciting, and I'm eager to continue exploring and creating innovative
          solutions in this dynamic field.
        </p>

        <p>
          My job is to build your website so that it is functional and
          user-friendly but at the same time attractive. Moreover, I add
          personal touch to your product and make sure that is eye-catching and
          easy to use. My aim is to bring across your message and identity in
          the most creative way. I created web design for many famous brand
          companies.
        </p>
      </section>

      {/* <!--
      - service
    --> */}

      <section className="service">
        <h3 className="h3 service-title">What i'm doing</h3>

        <ul className="service-list">
          {servicesData.map((service, index) => (
            <Service
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </ul>
      </section>
    </article>
  );
};

export default About;
