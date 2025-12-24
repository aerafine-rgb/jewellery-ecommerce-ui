import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home">
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            {/* Uncomment later if needed */}
            {/* 
            <h1>
              Everyday Jewellery <br /> That Feels Like Luxury
            </h1>
            <p>Crafted in fine silver & gold — designed to shine every day.</p>
            <button className="hero-btn">Shop Collection</button>
            */}
          </div>
        </div>
      </section>

      {/* CATEGORY SECTION */}
      <section className="categories">
        <h2>Shop by Category</h2>

        <div className="category-grid">
          <div className="category-card">
            <img
              src="https://images.unsplash.com/photo-1606760227091-3dd870d97f1d"
              alt="Rings"
            />
            <span>Rings</span>
          </div>

          <div className="category-card">
            <img
              src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0"
              alt="Earrings"
            />
            <span>Earrings</span>
          </div>

          <div className="category-card">
            <img
              src="https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d"
              alt="Necklaces"
            />
            <span>Necklaces</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
