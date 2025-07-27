import React from 'react'
import './Video.css'
import PlayVideo from '../../Components/PlayVideo/PlayVideo'
import Recommended from '../../Components/Recommended/Recommended'
import { useParams } from 'react-router-dom';


const Video = () => {

//  const [videoId, categoryId] = useParams();
const params = useParams();
console.log(params); // check if values are missing or undefined

const { categoryId, videoId } = params;

  return (
    <div className='play-container'>
      <PlayVideo videoId={videoId} />
      <Recommended categoryId={categoryId} />
      
    </div>
  )
}

export default Video
