import React, { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/navbar.css";


export const Navbar = (props) => {
  const { store, actions } = useContext(Context);
  const [showHover, setShowHover] = useState(-1);

  return (
    <nav className="navbar navbar-light bg-light mb-3" style={{backgroundColor:"white"}}>
        <Link to="/">
          <img src={"https://w7.pngwing.com/pngs/4/136/png-transparent-star-wars-anakin-skywalker-logo-star-wars-text-number-desktop-wallpaper.png"} alt="Star Wars" style={{maxHeight:100, maxWidth:100}}/>
        </Link>

      <div className="dropdown ml-auto">
        <button
          className="btn btn-warning dropdown-toggle me-5 favorites"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false">
          <h5>Favorites</h5>
          <div
            className="bg bg-warning "
            style={{
              width: "30px",
              textAlign: "center",
              borderRadius: "15px",
            }}>
            <span>
              <strong>{store.favorites.length}</strong>
            </span>
          </div>
        </button>
        <ul className="dropdown-menu bg bg-warning">
          {store.favorites.length > 0 ? (
            store.favorites.map((item, index) => {
              return (
                <div>
                  <li
                    className="dropdown-item d-flex fw-bold"
                    key={index}
                    onMouseEnter={() => setShowHover(index)}
                    onMouseLeave={() => setShowHover(-1)}>
                    {item}
                    <div
                      className="deleteButton fw-bold"
                      onClick={(e) => {
                        actions.deleteItem(index);
                        e.stopPropagation();
                      }}>
                      <span
                        className="ms-4 bg bg-danger rounded-pill"
                        type="button">
                        {showHover == index ? (
                          <div style={{ width: "40px", textAlign: "center" }}>
                            <i class="fa fa-times"></i>
                          </div>
                        ) : (
                          ""
                        )}
                      </span>
                    </div>
                  </li>
                </div>
              );
            })
          ) : (
            <p className="emptyList fw-bold">No favorites yet</p>
          )}
        </ul>
      </div>
    </nav>
  );
};