import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className="about-section container">
            <h2 className="mt-5">About Us</h2>
            <div className="row ">
            <div className="col-md-4  ">
            <div className="first-cart p-2 mt-2">
              
              <p>Hello. Our agency has been present for over 20 years. We make the best for all our customers.</p>
              
            </div>
          </div>
            <div className="col-md-4 ">
            <div className="first-cart p-2 mt-2">
              
              <p>It is simply dummy text of the printing and typesetting industry. It has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and.</p>
              
            </div>
          </div>
            <div className="col-md-4  ">
            <div className="first-cart p-2 mt-2">
              
              <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of travelling is that it has many benifits a more-or-less</p>
              
            </div>
          </div>

            </div>
            <div className="row">
          <div className="col-md-6">
            <div className="about-image">
              <img className="w-100" src="https://triper.dexignlab.com/xhtml/images/blog/grid/pic3.jpg" alt="" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="about-right-section text-start p-4">
             
              <h2 className="mt-5">Explore All The Corners <br />Of The World With Us</h2>
              <p>
                Pair large text with an image to give focus to your chosen
                product, collection, or blog post. Add details on availability,
                style, or even provide a review. Even if you can't afford to
                travel the world, you can take your children to the museum, zoo
                or local park. And don't be afraid to take them to grown-up
                spots. Eating out in a restaurant teaches children how to be
                quiet and polite and gives them the pleasure of knowing you
                trust them to behave.
              </p>
            </div>
          </div>
        </div>
        </div>
    );
};

export default AboutUs;