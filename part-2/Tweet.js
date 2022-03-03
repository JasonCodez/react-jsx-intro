function Tweet(props) {
   return (
      <div className="tweet">
         <span>@{props.username}</span>
         <span className="username">{props.user}</span>
         <span className="date">{props.date}</span>
         <p>{props.message}</p>
      </div>  
   );
}