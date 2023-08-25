import "./listitem.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useState } from "react";
import video from "../../img/video.mp4"

function ListItem({index}) {

  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src="https://i.ibb.co/NxBqHSK/p15317367-b-h8-aa.jpg" alt="" />
      {isHovered && (
        <>
      <video src={video} autoPlay={true} loop></video>
      <div className="itemInfo">
        <div className="icons">
          <PlayArrowIcon className="icon" />
          <AddIcon className="icon"/>
          <FavoriteBorderIcon className="icon"/>
        </div>
        <div className="itemInfoTop">
          <span>1 hour 14mins</span>
          <span className="limit">+16</span>
          <span>2016</span>
        </div>
        <div className="desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
          harum perferendis ipsa quod accusamus, error asperiores praesentium
          ratione tenetur assumenda facere expedita dolores corrupti minus
          voluptate minima culpa a sed!
        </div>
        <div className="genre">Action</div>
      </div></>
      )}
    </div>
  );
}

export default ListItem;
