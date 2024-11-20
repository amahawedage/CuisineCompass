import '../styles/HomePage.css'

export default function HomePage() {
  return (
    <div className="homepage">
      {/* Header Section */}
      <header className="header-section text-center" style={{ backgroundImage: "url('src/images/HomeBanner.jpg')", height: '425px' }}>

        <div className="hero">
          <h1>Discover Sri Lankan Cuisine for UAE Travellers</h1>
          <p>Your culinary compass for authentic flavors</p>
          <button className="btn btn-dark">Start Exploring</button>
        </div>
      </header>
      <br></br>
      {/* How It Works Section */}

      {/* How It Works Section */}
      <section className="how-it-works text-center">
        <h2>How It Works</h2>
        <div className="row justify-content-center">
          <div className="col-md-3">
            <div className="card">
              <img src="src/images/Icons/MealPreferance.png" alt="Set Preferences" style={{ width: '3cm', height: '3cm', display: 'block', margin: '0 auto' }} />
              <h5>Set Preferences</h5>
              <button className="btn btn-outline-dark" onClick={() => navigate('/preferences')} >Get Started</button>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img src="src/images/Icons/LocationSearch.png" alt="Search Restaurants" style={{ width: '3cm', height: '3cm', display: 'block', margin: '0 auto' }} />
              <h5>Search Restaurants</h5>
              <button className="btn btn-outline-dark">Get Started</button>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img src="src/images/Icons/MapExplore.png" alt="Explore the Map" style={{ width: '3cm', height: '3cm', display: 'block', margin: '0 auto' }} />
              <h5>Explore the Map</h5>
              <button className="btn btn-outline-dark">Get Started</button>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img src="src/images/Icons/TableBooking.png" alt="Book a Table" style={{ width: '3cm', height: '3cm', display: 'block', margin: '0 auto' }} />
              <h5>Book a Table</h5>
              <button className="btn btn-outline-dark">Get Started</button>
            </div>
          </div>
        </div>
      </section>


      {/* Featured Dishes Section */}
      <section className="featured-dishes text-center">
        <h2>Featured Dishes</h2>
        <div className="row justify-content-center">
          <div className="col-md-3">
            <div className="dish-card">
              <img 
                src="src/images/FeaturedDishes/KottuRotti.jpg" 
                alt="Kottu Roti" 
                className="dish-image" 
                style={{ width: '100%', height: 'auto', borderRadius: '8px' }} 
              />
              <h5>Kottu Roti</h5>
            </div>
          </div>

          <div className="col-md-3">
            <div className="dish-card">
              <img 
                src="src/images/FeaturedDishes/StringHoppers.jpg" 
                alt="String Hoppers" 
                className="dish-image" 
                style={{ width: '100%', height: 'auto', borderRadius: '8px' }} 
              />
              <h5>String Hoppers</h5>
            </div>
          </div>

          <div className="col-md-3">
            <div className="dish-card">
              <img 
                src="src/images/FeaturedDishes/Hoppers.jpg" 
                alt="Hoppers" 
                className="dish-image" 
                style={{ width: '100%', height: 'auto', borderRadius: '8px' }} 
              />
              <h5>Hoppers</h5>
            </div>
          </div>

          
        </div>
      </section>


{/* Featured Restaurents Section */}
<section className="featured-dishes text-center">
        <h2>Featured Restaurents</h2>
        <div className="row justify-content-center">
          <div className="col-md-3">
            <div className="dish-card">
              <img 
                src="src/images/FeaturedRestaurents/restaurant-interior.jpg" 
                alt="Shang Palace, Shangri-La" 
                className="dish-image" 
                style={{ width: '100%', height: 'auto', borderRadius: '8px' }} 
              />
              <h5>Shang Palace, Shangri-La</h5>
            </div>
          </div>

          <div className="col-md-3">
            <div className="dish-card">
              <img 
                src="src/images/FeaturedRestaurents/main-area-with-action.jpg" 
                alt="Indian Ocean Pavilion" 
                className="dish-image" 
                style={{ width: '100%', height: 'auto', borderRadius: '8px' }} 
              />
              <h5>Indian Ocean Pavilion</h5>
            </div>
          </div>

          <div className="col-md-3">
            <div className="dish-card">
              <img 
                src="src/images/FeaturedRestaurents/food-terminals.jpg" 
                alt="Central Restaurant" 
                className="dish-image" 
                style={{ width: '100%', height: 'auto', borderRadius: '8px' }} 
              />
              <h5>Central Restaurant</h5>
            </div>
          </div>

          
        </div>
      </section>


      {/* Call to Action Section */}
      <section className="cta text-center">
        <h2>Ready to Embark on a Culinary Journey?</h2>
        <p>
          Join Cuisine Compass today and discover the best of Sri Lankan cuisine in UAE.
        </p>
        <button className="btn btn-primary">Join Now</button>
      </section>
    </div>
  );
}
