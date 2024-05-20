import React, { useState } from "react";
import NavBar from "./navbar/NavBar";
import Main from "./main-session";

export default function HomePage() {

	const [nav, setNav] = useState(false);

  const handleNav = () =>{
    setNav(!nav);
  }

  const closeNav = () =>{
   if(nav){
     setNav(false);
   }
  }

	return (
		<div>
			<NavBar nav={nav} handleNav={handleNav} />
      <Main nav={nav} handleNav={handleNav} closeNav={closeNav} />
		</div>
	)
}