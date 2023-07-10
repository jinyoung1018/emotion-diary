import {useNavigate} from "react-router-dom"
import { useContext, useRef, useState,useEffect } from "react";
import {DiaryDispatchContext} from './../App.js'

import MyHeader from "./MyHeader"
import MyButton from "./MyButton"
import EmotionItem from "./EmotionItem";

import { getStringDate } from "../util/date.js";

import { emotionList } from "../util/emotion.js";



const DiaryEditor = ({isEdit,originData}) =>{
    const [date,setDate] = useState(getStringDate(new Date()));
    const [emotion,setEmotion] = useState(3);
    const [content,setContent] = useState("");
    const contentRef = useRef();

    const {onCreate,onEdit,onRemove} = useContext(DiaryDispatchContext);
    const handleClickEmote = (emotion)=>{
        setEmotion(emotion);
    }

    const navigate = useNavigate();

    const handleSubmit = ()=>{
        console.log(date,content,emotion)
        if (content.length < 1){
            contentRef.current.focus();
            return;
        }

        if(window.confirm(isEdit? "일기를 수정하시겠습니까?": "새로운 일기를 작성하시겠습니까?")){
            if(!isEdit){
                onCreate(date,content,emotion);                
            }else{
                onEdit(originData.id,date, content,emotion)
            }
        }

        navigate('/',{replace: true});

    };

    const handleRemove= ()=>{
        if(window.confirm('정말 삭제하시겠습니까?')){
            onRemove(originData.id);
            navigate('/',{replace: true})
        }
    }


    useEffect(()=>{
        if(isEdit){
            setDate(getStringDate(new Date(parseInt(originData.date))));
            setEmotion(originData.emotion);
            setContent(originData.content);
        }
    },[isEdit,originData])

    return(
        <div className="DiaryEditor">
            <MyHeader headText={isEdit ? "일기 수정하기":"새 일기 쓰기"} 
            leftChild={<MyButton text={"< 뒤로가기"} onClick={()=> navigate(-1)}></MyButton>}
            rightChild={<MyButton text={'삭제하기'} type={'negative'} onClick={handleRemove}></MyButton>}
            ></MyHeader> 
            <div>
                <section>
                    <h4>오늘은 언제인가요?</h4>
                    <div className="input_box">
                        <input className="input_date" value={date} onChange={(e) => setDate(e.target.value)} type="date"></input>
                    </div>
                </section>  
                <section>
                    <h4>오늘의 감정</h4>
                    <div className="input_box emotion_list_wrapper">
                        {emotionList.map((it) => (
                        <EmotionItem 
                          key={it.emotion_id}
                          {...it} 
                          onClick={handleClickEmote}
                          isSelected={it.emotion_id === emotion}
                          ></EmotionItem>))}
                    </div>
                </section>  
                <section>
                    <h4>오늘의 일기</h4>
                    <div className="input_box text_wrapper">
                        <textarea 
                          placeholder="오늘은 어땠나요?"
                          ref={contentRef} 
                          value={content} 
                          onChange={(e)=>setContent(e.target.value)}
                          ></textarea>
                    </div>
                </section>
                <section>
                    <div className="control_box">
                        <MyButton text={'취소하기'} onClick={()=>navigate(-1)}></MyButton>
                        <MyButton text={'작성완료'} type={'positive'} onClick={handleSubmit}></MyButton>
                    </div>
                </section>
            </div>   
        </div>
    )
   
};

export default DiaryEditor;
