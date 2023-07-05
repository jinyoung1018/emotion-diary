import { useContext, useEffect, useState } from "react";
import MyHeader from "../components/MyHeader";
import MyButton from "../components/MyButton";
import { DiaryStateContext } from "../App";

const Home = () =>{

    const diaryList = useContext(DiaryStateContext);

    const [data,setData] = useState([]);  
    const [curDate,setCurDtate] = useState(new Date()); //날짜를 저장하는 스테이트
    const headText = `${curDate.getFullYear()}년 ${curDate.getMonth() + 1}`;

    useEffect(()=> {

        if(diaryList.length >= 1){

        const firstDay = new Date(
            curDate.getFullYear(),
            curDate.getMonth(),
            1
        ).getTime();

        const lastDay = new Date(
            curDate.getFullYear(),
            curDate.getMonth() + 1,
            0
        ).getTime();

       setData(diaryList.filter((it)=> firstDay<= it.date && it.date <= lastDay));
    }
    }, [diaryList, curDate]);

    useEffect(()=>{
        console.log(data);
    },[data])

    const increaseMonth = () =>{
        setCurDtate(new Date(curDate.getFullYear(),curDate.getMonth() + 1, curDate.getDate()))
    };

    const decreaseMonth = () =>{
        setCurDtate(new Date(curDate.getFullYear(), curDate.getMonth() - 1, curDate.getDate()))
    };


    return (
    <div>
        <MyHeader headText={headText}
        leftChild={<MyButton text={"<"} onClick={decreaseMonth}></MyButton>}
        rightChild={<MyButton text={">"} onClick={increaseMonth}></MyButton>}
        ></MyHeader>
        
    </div>
    );
};

export default Home;