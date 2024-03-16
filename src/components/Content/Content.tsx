
import { Box, Switch, SxProps, Typography, useTheme } from '@mui/material'
import React from 'react'
import { cardMediaType } from '../../interface/data.interface';
import { dataCardMedia, dataCardMediaOverview } from '../../utils/data';
import { CardMedia } from '..';
import { CardMediaOverview } from '../CardMediaOverview';

export interface styledApp {
    containerStyle: SxProps;
    topBg: SxProps;
    mainContainer: SxProps;
    header: SxProps;
    title: SxProps;
    subTitle: SxProps;
    mainMediaSection: SxProps;
    secondMediaSection: SxProps;
    todayCars: SxProps;
  }
  
  const appStyle: styledApp = {
    containerStyle:{
      //border:'1px solid red', 
        position:'relative',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        height:'100vh',
        margin:'0px',
        padding:'0px',
        '@media screen and (max-width: 440px)': {
            height:'auto',
        },
    },
    topBg:{
      //border:'1px solid red', 
      position:'absolute',
      width:'100%',
      height:'20%',
      margin:'0px',
      padding:'0px',
      top:0,
      left:0,
      '@media screen and (max-width: 440px)': {
        
      },
    },
    mainContainer:{
        //border:'1px solid red',
        zIndex:100,
        width:'80%',
        height:'95%',
        margin:'0px',
        padding:'0px',
        '@media screen and (max-width: 440px)': {
          
        },
    },
    header:{
        //border:'1px solid yellow',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        width:'100%',
        height:'15%',
        margin:'0px',
        padding:'0px',
    '@media screen and (max-width: 440px)': {
        
    },
    },
    title:{
        //border:'1px solid black',
        display:'flex',
  
        fontSize:'2rem',
        fontWeight:'700 !important',
        //fontFamily: rubikFontFamily + ' !important',
        '@media screen and (max-width: 880px)': {
          justifyContent:'center',
          textAlign:'center',
          fontSize:'2.5rem',
        },
      },
      subTitle:{
        //border:'1px solid black',
        display:'flex',
        fontWeight:'700 !important',
        maxWidth:'480px',
        color: 'gray',
        opacity:0.9,
        //fontFamily: rubikFontFamily + ' !important',
        '@media screen and (max-width: 880px)': {
          justifyContent:'center',
          textAlign:'center',
          marginLeft:'1rem',
          marginRight:'1rem',
        },
      },
      mainMediaSection:{
        //border:'1px solid yellow',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        width:'100%',
        height:'40%',
        margin:'0px',
        padding:'0px',
        '@media screen and (max-width: 440px)': {
             display:'flex',
             flexDirection:'column',
             height:'auto',
             gap:3
        },
      },
      secondMediaSection:{
        
        //border:'1px solid yellow',
        display:'flex',
        flexDirection:'column',
        justifyContent:'space-between',
        alignItems:'center',
        width:'100%',
        height:'35%',
        margin:'0px',
        padding:'0px',
        '@media screen and (max-width: 440px)': {
            display:'flex',
             flexDirection:'column',
             height:'auto',
        },
      },
      
      todayCars:{
        display:'flex',
        justifyContent:'space-between',
        paddding:'1rem',
        gap:2,
        flexWrap: 'wrap',
      }
      
  }

  export interface Props {
    toggleDarkMode:  () => void;
    darkMode: boolean;
  }

  const sumFollowerOrSubcribers = (cardMediaList: cardMediaType[]) => {
    return cardMediaList.reduce((suma, media) => suma + media.subscribersOrFollowers, 0);
  }

const Content:React.FC<Props> = ({toggleDarkMode, darkMode}) => {
    const theme = useTheme();
    
  return (
    <Box sx={appStyle.containerStyle}>
        
        <Box sx={{ ...appStyle.topBg, backgroundColor: theme.palette.primary.main}}>
            
        </Box>

        <Box sx={appStyle.mainContainer}>
            <Box sx={appStyle.header} >
                <Box sx={{display:'flex', flexDirection:'column'}}>
                    <Typography sx={appStyle.title}>Social Media Dashboard</Typography>
                    <Typography sx={appStyle.subTitle}>Total Followers: {sumFollowerOrSubcribers(dataCardMedia).toLocaleString().split('.').join(',')
                    } </Typography>
                </Box>
                <Switch checked={darkMode} onChange={toggleDarkMode} />
            </Box>

            <Box sx={appStyle.mainMediaSection} >
                {
                  dataCardMedia.map((card, index)=>{
                    return (
                        <CardMedia CardMediaList={card} key={index} />
                    )
                  })
                  
                }
            </Box>

            <Box sx={appStyle.secondMediaSection} >
            <Typography sx={appStyle.title}>Overview Today</Typography>
              
                <Box sx={appStyle.todayCars}>
                {
                  dataCardMediaOverview.map((card, index)=>{
                    return (
                        <CardMediaOverview CardMediaList={card} key={index} />
                    )
                  })
                  
                }
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default Content