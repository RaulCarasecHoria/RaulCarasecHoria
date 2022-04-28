import "./startingMenu.css";


function StartingMenu() {
  return (
    
    <div className="Menu">
        	<ul id="Optiuni">
  
<li><a href="#">  Play </a></li>
<li><a href="#"> Options </a></li>
<li><a href="#"> Credits </a></li>
<li><a href="#">  Exit </a></li>


</ul>

<p style={{
       fontSize: "10px",
       position: "fixed",    
       textAlign: "center", 
       bottom: "0px", 
       width: "100%",
       }}>
    <b>Game made by HCC Company inc.</b>
    </p>



    </div>

    
  );
}

export default StartingMenu;
