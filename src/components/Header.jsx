import {Link, NavLink} from 'react-router-dom';


function Header() {
  return (
//     <header className='header'>
// <div className='header-container'>
//     <h1 className='logo'> AeraFine</h1>

//     <nav className='nav-links'>
      
//       <NavLink to ="/">Home</NavLink>
//         <NavLink to ="/products">Products</NavLink> 
//         <NavLink to ="/cart">Cart</NavLink>         
                                     
//         </nav>

// </div>
//   </header>

<>
{/* Top Info Bar */}
<div className="top-bar">
  <span>🎁 Gift Certificates</span>
  <span>Register & get ₹1,500 bonus</span>
  <span>🚚 Delivery & Payment</span>
</div>

{/* Main Header */}
<header className="main-header">
  <div className="header-inner">
    <div className="logo">AERAFINE</div>

    <div className="search-box">
      <input type="text" placeholder="Search for silver/gold... " />
      <span className="search-icon">🔍</span>
    </div>

    <div className="header-icons">

    <div className="icon-box">
    <span className="icon">🏬</span>
    <span className="icon-label">Stores</span>
  </div>
    <div className="icon-box">
    <span className="icon">👤</span>
    <span className="icon-label">Account</span>
  </div>

  <div className="icon-box">
    <span className="icon">♡</span>
    <span className="icon-label">Wishlist</span>
  </div>

  <div className="icon-box">
    <span className="icon">🛒</span>
    <span className="icon-label">Cart</span>
  </div>

      {/*  stores - right now we dont have stores, account, wishlist, cart */}
    </div>
  </div>
</header>

{/* Category Nav */}
<nav className="category-nav">
  <NavLink to="/">New Arrivals</NavLink>
  <NavLink to="/products">Best Seller</NavLink>
  <NavLink to="/">Fine Silver</NavLink>
  <NavLink to="/">Gold</NavLink>
  <NavLink to="/">Gifting</NavLink>
  <NavLink to="/">About Us</NavLink>
</nav>
</>


  )
}

export default Header