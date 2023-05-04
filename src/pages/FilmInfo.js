import { useParams } from "react-router-dom";
import { filmsList } from "../helpers/filmsList";
import "./filmInfo.css";
const FilmInfo = () => {
  const { id } = useParams();
  const film = filmsList[id];
  return (
    <div className="filmInfo">
      <img className="filmImg" src={film.url} alt="" />
      <div className="filmTitle">{film.title}</div>
      <table className="filmTable">
        <tr>
          <td>
            <b>limit:</b>
          </td>
          <td>{film.child}</td>
        </tr>
        <tr>
          <td>
            <b>year:</b>
          </td>
          <td>{film.year}</td>
        </tr>
        <tr>
          <td>
            <b>director:</b>
          </td>
          <td width={"100%"}> {film.director}</td>
        </tr>
        <tr>
          <td>
            <b>genre:</b>
          </td>
          <td width={"100%"}> {film.genre}</td>
        </tr>
        <tr>
          <td>
            <b>starring:</b>
          </td>
          <td width={"100%"}> {film.starring}</td>
        </tr>
      </table>
      <p className="filmDescription">{film.description}</p>
    </div>
  );
};

export default FilmInfo;
