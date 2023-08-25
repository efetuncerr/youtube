import "./watch.scss";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import video2 from "../../img/video2.mp4"

export default function Watch() {
  return (
    <div className="watch">
      <div className="back">
        <ArrowBackIcon />
        Home
      </div>
      <video className ="video" autoPlay progress controls src={video2}></video>
    </div>
  );
}
