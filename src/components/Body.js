
import ResturentCard from "./ResturentCard";
import resObj from "../utils/mockData"; 
 




console.log(resObj+ "iuguy")






const Body = () => {
  return (
    <div className="body">
      <div className="search-container">
   
     <form className="search-form" action="#" method="get">
      <input type="text" placeholder="Search..." />
      <button type="submit">🔍</button>
     </form>
     </div>

      <div className="res-contener">
    

      {
      resObj && resObj.map((resturent) => (
  <ResturentCard key={resturent.info.id} resData={resturent} />
))
}

      </div>

  <div className="filter-container">
  <button className="filter-btn" onClick={() =>{
   const resObj = resObj.filter((res) => res.info.avgRating > 4.2 );
    console.log(resObj);
  } }>Top Restaurant</button>
</div>

    </div>
  );
};
export default Body;