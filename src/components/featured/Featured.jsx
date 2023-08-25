import "./featured.scss";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

const Featured = ({type}) => {
  return (
    <div className="featured">
        {type && (
            <div className="category">

                <span>{type ==="movie" ? "Movies" : "Series"}</span>
                <select name="genre" id="genre">
                    <option>Genre</option>
                    <option value="adventure">Adventure</option>
                    <option value="comedy">Comedy</option>
                    <option value="crime">Crime</option>
                    <option value="fantasy">Fantasy</option>
                    <option value="historical">Historical</option>
                    <option value="horror">Horror</option>
                    <option value="romance">Romance</option>
                    <option value="sci-fi">Sci-fi</option>
                    <option value="thriller">Thriller</option>
                    <option value="western">Western</option>
                    <option value="animation">Animation</option>
                    <option value="drama">Drama</option>
                    <option value="documentary">Documentary</option>
                </select>
            </div>
        )}
      <img
        src="https://i.ibb.co/Y2kgScJ/74403c87074bdbcdf5e2bf9ab8c0968c.jpg"
        alt=""
      />
      <div className="info">
        <img src="https://i.ibb.co/BNNvcVr/64112.png" alt="" />
        <span className="desc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut fugit
          mollitia quas explicabo, asperiores reiciendis pariatur blanditiis
          excepturi incidunt recusandae tempore alias voluptas quae nostrum!
          Vitae doloremque deleniti iusto obcaecati.
        </span>
        <div className="buttons">
<button className="play">
<PlayArrowIcon/>
<span>Play</span>
</button>
<button className="more">
    <HelpOutlineIcon/>
    <span>Info</span>
</button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
