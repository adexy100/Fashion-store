import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { type } from "../../variables";

const Sidebar = () => {
  return (
    <Wrapper>
      <nav id="sidebar">
        <ul className="list-unstyled components">
          <li>
            <Link to="/dashboard">
              <i className="fa fa-tachometer"></i> Dashboard
            </Link>
          </li>

          <li>
            <a
              href="#productSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              className="dropdown-toggle"
            >
              <i className="fa fa-product-hunt"></i> Products
            </a>
            <ul className="collapse list-unstyled" id="productSubmenu">
              <li>
                <Link to="/admin/products">
                  <i className="fa fa-clipboard"></i> All
                </Link>
              </li>

              <li>
                <Link to="/admin/product">
                  <i className="fa fa-plus"></i> Create
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link to="/admin/orders">
              <i className="fa fa-shopping-basket"></i> Orders
            </Link>
          </li>

          <li>
            <Link to="/admin/users">
              <i className="fa fa-users"></i> Users
            </Link>
          </li>
          <li>
            <Link to="/admin/category">
              <i className="fa fa-hashtag"></i> Category
            </Link>
          </li>
          <li>
            <Link to="/admin/sub-category">
              <i className="fa fa-hashtag"></i> Sub-Category
            </Link>
          </li>
          <li>
            <Link to="/admin/users">
              <i className="fa fa-hashtag"></i> Collections
            </Link>
          </li>

          <li>
            <Link to="/admin/reviews">
              <i className="fa fa-star"></i> Reviews
            </Link>
          </li>
        </ul>
      </nav>
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: stretch;
  min-height: 100vh;
  font-weight: normal;
  font-family: ${type.RUBIK};

  margin-top: 0;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 10;

  #sidebar {
    min-width: 100%;
    max-width: 100%;
    background: #232f3e;
    color: #fff;
    transition: all 0.3s;
  }
  #sidebar.active {
    margin-left: -200px;
  }

  #sidebar .sidebar-header {
    padding: 20px;
    background: #232f3e;
  }
  #sidebar ul.components {
    padding: 5px 0px;
    border-bottom: 1px solid #232f3e;
  }

  #sidebar ul li a {
    padding: 10px;
    font-size: 1.8em;
    display: block;
    color: white;
    text-decoration: none;
  }
  #sidebar ul li a:hover {
    color: #232f3e;
    background: #fff;
  }

  #sidebar ul li a i {
    margin-right: 0.3rem;
  }

  #sidebar ul li.active > a,
  a[aria-expanded="true"] {
    color: #fff;
    background: #232f3e;
  }

  a[data-toggle="collapse"] {
    position: relative;
  }
  .dropdown-toggle::after {
    display: block;
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }
  ul ul a {
    font-size: 1rem !important;
    padding-left: 30px !important;
    background: #232f3e;
  }

  ul.CTAs {
    padding: 20px;
  }

  ul.CTAs a {
    text-align: center;
    font-size: 0.9em !important;
    display: block;
    border-radius: 5px;
    margin-bottom: 5px;
  }
`;

export default Sidebar;
