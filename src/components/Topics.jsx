import { getTopics } from "./api";
import {useEffect, useState} from "react";
import { Link } from "react-router-dom";

export default function Topics() {
    const [topics, setTopics] = useState([])
    useEffect(()=>{
        getTopics().then((topicData) => {
            setTopics(topicData)
        })
    }, [])
    console.log(topics)
    return (
        <>
        {topics.map((topic)=>{
        return (
            <li key={topic.slug}>
            <Link to={`/topics/${topic.slug}`}>{topic.slug}</Link> 
            </li>)
        })}
        </>
        )
    }

    //dynamic topics that change every update