import React from "react";
import "./style.css";

const MenuCard = ({ menuData }) => {
  // console.log(menuData);
  return (
    <>
      <section className="main-card--cointainer" key={1}> 
        {menuData.map((curElem) => {
            const { id, name, category, image, description,price } = curElem;
          return (
            <>
              <div className="card-container" key={id}>
                <div className="card" >
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{id}</span>
                    <div className="card-author subtle">{category}</div>
                    <h2 className="card-title">{name}</h2>
                    <span className="card-description subtle">{description} </span>
                    <div className="card-read">{price}</div>
                  </div>
                  <img src={image} alt="images" className="card-media" />
                  

                  <span className="card-tag subtle"> Order Now </span>
                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default MenuCard;
