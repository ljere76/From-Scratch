// import ky from "ky";
import { useEffect } from "react";
import axios from "axios";

const Form = () => {
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/search/movie?api_key=38dc88e4033a7e6df5f56a937b445323&query=code&language=fr-FR"
      )
      .then((response) => {
        console.log(response.data.results);
      });
  }, []);
  return (
    <div className="form-component">
      <div className="form-container">
        <form>
          <input
            type="text"
            name="search"
            placeholder="Entrez le titre d'un film"
          />
          <input type="submit" value="Rechercher" />
        </form>

        <div className="btn-sort-container">
          <div className="btn-sort" id="goodToBad">
            Top<span>➜</span>
          </div>
          <div className="btn-sort" id="badToGood">
            Flop<span>➜</span>
          </div>
        </div>
      </div>
      <div className="result">Resultat</div>
    </div>
  );
};

export default Form;
