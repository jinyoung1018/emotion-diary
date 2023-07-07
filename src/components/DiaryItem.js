import { useNavigate } from "react-router-dom";
import MyButton from "./MyButton";

const DiaryItem = ({id, emotion,content,date}) => {

    const navigate = useNavigate();

    const strDate = new Date(parseInt(date)).toLocaleDateString(); //밀리세컨즈를 년 월 일로 전환

    const goDetail = () =>{
        navigate(`/diary/${id}`)
    }

    const goEdit = () =>{
        navigate(`/edit/${id}`)
    }

    return <div className="DiaryItem">
        <div className={["emotion_img_wrapper", `emotion_img_wrapper_${emotion}`].join(" ")} onClick={goDetail}>
            <img src={process.env.PUBLIC_URL + `assets/emotion${emotion}.png`}></img>  
            {/* process.env.PUBLIC_URL public 디렉토리의 주소 */}
        </div>
        <div className="info_wrapper" onClick={goDetail}>
            <div className="diary_date">{strDate}</div>
            <div className="diary_content_preview">{content.slice(0,25)}</div>
        </div>
        <div className="btn_wrapper" onClick={goDetail}>
            <MyButton text={"수정하기"}></MyButton>
        </div>

    </div>;
};

export default DiaryItem;