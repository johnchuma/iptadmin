import React, { createContext, useEffect, useState } from 'react'
import { getWatchedTiktokVideos, getWatchedVideos, getWatchedYoutubeVideos } from '../controller/video_controller';
import { getInvitedUsers } from '../controller/auth_controller';
export const DataContext = createContext(null)
const DataProvider = ({children}) => {
    const [invitedUsers, setInvitedUsers] = useState(null);
    const [loaded, setLoaded] = useState(0);

    const [watchedYoutubeVideos, setWatchedYoutubeVideos] = useState([]);
    const [watchedTiktokVideos, setWatchedTiktokVideos] = useState([]);
    const [level1Earnings, setLevel1Earnings] = useState(0);
    const [level2Earnings, setLevel2Earnings] = useState(0);
    const [level3Earnings, setLevel3Earnings] = useState(0);
    const [youtubeEarnings, setYoutubeEarnings] = useState(0);
    const [tiktokEarnings, setTiktokEarnings] = useState(0);



    
    



   useEffect(() => {
    getInvitedUsers().then((response)=>{
        if(response){
            console.log(response)
            setInvitedUsers(response)
            setLevel1Earnings(response.level1.length * 6000);
            setLevel2Earnings(response.level2.length * 3000);
            setLevel3Earnings(response.level3.length * 2000);
        }
       
   
    })
    getWatchedYoutubeVideos().then((response)=>{
        if(response){
            setWatchedYoutubeVideos(response)
            setYoutubeEarnings(watchedYoutubeVideos.length * 600);
        }
        
    })
    getWatchedTiktokVideos().then((response)=>{
        if(response){
            setWatchedTiktokVideos(response)
            setTiktokEarnings(watchedTiktokVideos.length * 400);
        }
    })
   }, [loaded]);
    return (
        <DataContext.Provider value={{invitedUsers,setLoaded, level1Earnings,level2Earnings,level3Earnings,youtubeEarnings,tiktokEarnings}}>
            {children}
        </DataContext.Provider>
        
    )
}

export default DataProvider
