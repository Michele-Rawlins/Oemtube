import React from 'react';
import headerPic from '../../../photos/Collage-for-home-screen-1.jpg';
import './Products.scss';
import { Link } from 'react-router-dom'
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

class Products extends React.Component {
  state = {
 DistributorAssemblies:{},
    flavicon: [],
  }

  render() {
    const { DistributorAssemblies } = this.state; 
   
    return (
        <div className="products">
          <div className="sidebar">
      <img className="column-3" src={headerPic}></img>
          <Link className="links-products"to='/distributor'>Distributor Assemblies</Link>
          <br></br>
          <Link className="links-products"to='/serpentine-helical-coils'>Serpentine & Helical Coils</Link>
          <br></br>
          <Link className="links-products"to='/strainers-accumulators'>Spun Copper Strainers & Accumulators</Link>
          <br></br>
          <Link className="links-products"to='/spun-copper-drier'>Spun Copper Driers</Link>
          <br></br>
          <Link className="links-products"to='/assembly-braze'>Assembly & Braze</Link>
          <br></br>
          <Link className="links-products"to='/tube-cut'>Tube Cut to Length</Link>          
          <br></br>
            
      </div>
         <div className="company-intro article">
        <p className="product-intro">OEM Tube is focused on providing high quality fabricated tubing to the HVAC and Refrigeration Industries.  We supply custom fabrication with copper, brass, aluminum and stainless steel.  Processes range from simple cut to length parts to complex brazed assemblies to fit your specific design requirements.  OEM Tube offers a high level of Quality and Customer Service . We believe in growth by investing in state of the art equipment, expanding our capabilities and supplier relationships globally. We are the source, you should consider first.</p>
      </div>
      </div>
    );

    }

  }
  
  export default Products;