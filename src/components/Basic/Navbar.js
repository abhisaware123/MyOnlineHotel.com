import React from 'react';

const Navbar = ({filterItems,uniqueMenu,Menu,setMenuData}) => {
    console.log(uniqueMenu);
    
  return(
      <>
          <nav className="navbar" key={1}>
                <div className="btn-group">
                    {
                        uniqueMenu.map((curElement)=>{
                            const {catogary}=curElement;
                            return( 
                                <>
                                    <button className="btn-group__item" onClick={()=>filterItems(curElement)}>{curElement}</button>
                                </>
                            )
                        })
                    }
                </div>

            </nav>
      </>
    );
};

export default Navbar;
