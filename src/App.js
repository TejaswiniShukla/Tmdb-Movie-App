import React,{useState,useEffect} from 'react';
import "./App.css"
import Show from './Components/Show/Show/Show';
import Home from './Components/Show/Home/Home';
import Nav from './Components/Show/Navbar/Nav';
import  Pagination  from '@mui/material/Pagination';
import { Routes ,Route} from 'react-router-dom';



const App = () => {
  const [movies, setmovies] = useState( null);
  const [page,setpage]=useState(1)

  const fetchapi=(page=1)=>{
    
    fetch(`https://api.themoviedb.org/3/trending/all/week?api_key=966dc00997ecc5fa4fc8a197583b7c59&page=${page}`)
    .then((res) => res.json()) 
    .then((data) =>{
      setpage(data.total_page)
      setmovies((data.results))

      
    })
  }
  useEffect(() => {
      if(!movies) fetchapi(); 

  },[movies]);
  
 const eventforpage=(e)=>{
   let pag=Number(e.target.innerText)
   fetchapi(pag)
  
 }
  

  return <div className='main'>
    <Nav/>
    <Routes>
          <Route path='/' element={<Home/>}/>
     
        
    </Routes>
   
   {!movies? <img src='https://flevix.com/wp-content/uploads/2020/01/Preloader-1.svg' />: <Show data={movies}/>}
   <div className='pagination'>
   <Pagination count={10}
      onChange={eventforpage}
   />
   </div>
    
 
  </div>;
};

export default App;










