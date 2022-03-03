function App() {
   return (
      <div>
         <Tweet 
            username="Jgarre"
            user="Jason Garrett"
            date={new Date().toDateString()}
            message="This is my first tweet!"
         />
         <Tweet 
            username="Cgarrett83"
            user="Crystal Garrett"
            date={new Date().toDateString()}
            message="I love this new tweeting system!"
         />
         <Tweet 
            username="batgav0509"
            user="Gavin Garrett"
            date={new Date().toDateString()}
            message="I am batman!"
         />
      </div>
   );  
}

ReactDOM.render(<App/>, document.getElementById("root"));