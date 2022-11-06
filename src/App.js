import { useEffect, useState } from "react";
import "./App.css";
import RepoCards from "./Components/RepoCards"
import PageNotFound from "./Components/errorPage"
import { Routes, Route, Link } from "react-router-dom";

// Profile Page
const Profile = () => {
  return (
    <section className="profile-container">
      <h1 className="intro-text">Welcome to my GitHub Profile!</h1>
      <p className="copy-text">
        Click the button below to explore my Repositories
      </p>
      <Link to="/apicall">
        <button className='view-users-button'>Click Me</button>
      </Link>
    </section>
  );
};

//Repositories page
function ApiCall() {
  //useState for the repositories and pages
  const [repo, setRepo] = useState([]);
  const [page, setPage] = useState(1);
  // const [reposPerPage] = useState(6)

  //Reusable API
  const ReusableAPI = () => {
    fetch("https://api.github.com/users/SamCares/repos")
      .then((response) => response.json())
      .then((data) => setRepo(data));
  };

  // const indexOfLastRepo = page * reposPerPage;
  // const indexOfFirstRepo = indexOfLastRepo - reposPerPage
  // const currentRepo = repo.slice(indexOfFirstRepo, indexOfLastRepo)

  useEffect(() => { ReusableAPI() }, []);

  //Pagination
  const Pagination = (val) => {
    setPage(val)
    ReusableAPI()
  }
  console.log(page);

  return (
    <section className='users-container'>

      <Link to="/">
        <button className='back-home'>Home</button>
      </Link>

      {repo.length === 0 && <h1 className='loader'>Please wait...</h1>}

      <div className='card-container'>
        {repo.map((user, i) => (
          <div key={i}>
            <RepoCards userData={user} />
          </div>
        ))}
      </div>

      <div className='pages'>
        <button className='btn' onClick={() => Pagination(page - 1)} disabled={page === 1}>prev</button>
        <button className={`${page === 1 ? 'active' : 'btn'}`} onClick={() => Pagination(1)} disabled={page === 1}>1</button>
        <button className={`${page === 2 ? 'active' : 'btn'}`} onClick={() => Pagination(2)} disabled={page === 2}>2</button>
        <button className={`${page === 3 ? 'active' : 'btn'}`} onClick={() => Pagination(3)} disabled={page === 3}>3</button>
        <button className={`${page === 4 ? 'active' : 'btn'}`} onClick={() => Pagination(4)} disabled={page === 4}>4</button>
        <button className={`${page === 5 ? 'active' : 'btn'}`} onClick={() => Pagination(5)} disabled={page === 5}>5</button>
        <button className={`${page === 6 ? 'active' : 'btn'}`} onClick={() => Pagination(6)} disabled={page === 6}>6</button>
        <button className={`${page === 7 ? 'active' : 'btn'}`} onClick={() => Pagination(7)} disabled={page === 7}>7</button>
        <button className={`${page === 8 ? 'active' : 'btn'}`} onClick={() => Pagination(8)} disabled={page === 8}>8</button>
        <button className='btn' onClick={() => Pagination(page + 1)} disabled={page === 8}>next</button>
      </div>
    </section>
  );
};

function App() {
  return (
    <section className="parent-container">
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/" element={<ApiCall />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </section>
  );
}

export default App;
