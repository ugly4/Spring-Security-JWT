import React from "react";
import HeaderMainPage from "../components/HeaderMainPage";
import Content from "../components/Content";

const MainPage = () => {
    return(
        
		<div style={{display:"flex", flexDirection:'column'}}>
			<HeaderMainPage/>
      <Content/>      

		</div>
        
    );
}

export default MainPage;