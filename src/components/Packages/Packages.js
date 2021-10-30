import React from 'react';

const Packages = () => {
    return (
        <div className="container">
            <h2 className="mt-5 mb-3 text-warning">Best Holiday Packages</h2>
            <div className="row row-cols-1 row-cols-md-4 g-4">
                    
          
                <div className="col">
                <div className="card h-100">
                <img src="https://triper.dexignlab.com/xhtml/images/gallery/img4.jpg"className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h4>Weekdays in Australia</h4>
                        <p>Peelamedu, Cbe, Australia</p>
                        <p> No of Days: 2    People: 1</p>
                        <h5>$323</h5>
                </div>
                <div className="card-footer bg-secondary">
                    <button className= "btn btn-warning ">View Details</button>
                </div>
                </div>
                    </div>
                <div className="col">
                <div className="card h-100">
                <img src="https://triper.dexignlab.com/xhtml/images/gallery/img3.jpg"className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h4>Weekdays in India</h4>
                        <p>Peelamedu, Cbe,India</p>
                        <p> No of Days: 2    People: 1</p>
                        <h5>$423</h5>
                </div>
                <div className="card-footer bg-secondary">
                    <button className= "btn btn-warning ">View Details</button>
                </div>
                </div>
                    </div>
                <div className="col">
                <div className="card h-100">
                <img src="https://triper.dexignlab.com/xhtml/images/gallery/img5.jpg"className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h4>Weekdays in South America</h4>
                        <p>Peelamedu, Cbe, South America</p>
                        <p> No of Days: 2    People: 1</p>
                        <h5>$523</h5>
                </div>
                <div className="card-footer bg-secondary">
                    <button className= "btn btn-warning ">View Details</button>
                </div>
                </div>
                    </div>
                <div className="col">
                <div className="card h-100">
                <img src="https://triper.dexignlab.com/xhtml/images/gallery/img6.jpg"className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h4>Weekdays in Philippines</h4>
                        <p>Peelamedu, Cbe, Philippines</p>
                        <p> No of Days: 2    People: 1</p>
                        <h5>$523</h5>
                </div>
                <div className="card-footer bg-secondary">
                    <button className= "btn btn-warning ">View Details</button>
                </div>
                </div>
                    </div>

            </div>
            
        </div>
    );
};

export default Packages;