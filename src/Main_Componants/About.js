import React from "react";
import './About.css';

const About = () => {
  return (
    <>
      <div className="container text-light">
        <div className="row text-center">
          <h1 className="">About ArtMart</h1>
          <h3>Bringing Art to Life, One Sketch at a Time</h3>
          <p style={{ fontSize: "larger", justifyContent: "baseline" }}>
            At ArtMart, we believe every piece of art has a story, and every
            artist deserves a platform to share their vision with the world.
            Founded in 2025, we've created a vibrant marketplace where artists
            and art enthusiasts come together to celebrate creativity in its
            purest form.
          </p>
        </div>
        <div className="row text-center">
          <h1 className="">Our Mission</h1>
          <h3>Bringing Art to Life, One Sketch at a Time</h3>
          <p style={{ fontSize: "larger", justifyContent: "baseline" }}>
            We're on a mission to democratize the art world by making original
            sketches and drawings accessible to everyone while ensuring artists
            receive fair compensation for their work. Our platform bridges the
            gap between talented artists and passionate collectors, creating
            meaningful connections through art.
          </p>
        </div>
        <div className="row text-center">
          <h1 className="">Our Mission</h1>
          <h3>Bringing Art to Life, One Sketch at a Time</h3>
          <p
            style={{
              fontSize: "larger",
              justifyContent: "baseline",
              textAlign: "left",
            }}
          >
            <b>Artist-First Approach: </b>We provide artists with tools and
            resources to showcase their work, set their own prices, and retain
            creative control. Our commission rates are among the most
            competitive in the industry.
            <br />
            <b>Quality Assurance:</b> Each artwork listed on our platform is
            verified for authenticity, ensuring buyers receive genuine, original
            pieces directly from the artists.
            <br />
            <b>Secure Transactions:</b> Our escrow-based payment system protects
            both buyers and sellers, releasing funds only when both parties are
            satisfied with the transaction.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
