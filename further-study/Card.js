function Card(props) {
   return (
      <div className="card-container">
         <div>
            <h3><b>{props.name}</b></h3>
            <span><i>{props.company}</i></span>
         </div>
         <hr></hr>
         <p>{props.about}</p> 
     </div>
   );
}