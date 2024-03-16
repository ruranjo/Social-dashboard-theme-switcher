import { Box, Card, SxProps, Typography, useTheme  } from '@mui/material';
import React from 'react'
import { cardMediaOverviewType } from '../../interface/data.interface';
import { brightRed, limeGreen } from '../../styles/variables';

export interface Props {
    CardMediaList: cardMediaOverviewType;
}

export interface styledCardMedia {
    containerStyle: SxProps;
    cardContent: SxProps;
    iconUserContainer: SxProps;
    average: SxProps;
    title: SxProps;
    subTitle: SxProps;
    mainMediaSection: SxProps;
  }
  
  const cardMediaStyle: styledCardMedia= {
    containerStyle:{ 
        minWidth: 275,
        '@media screen and (max-width: 880px)': {
          minWidth: 300,
          maxWidth: 400,
        },

    },
    cardContent:{
      display:'flex',
      flexDirection:'column',
      
      padding:'1rem',
      //border:'1px solid red',
      '@media screen and (max-width: 440px)': {
        
      },
    },
    iconUserContainer:{
      //border:'1px solid blue',
      display:'flex',
      gap:1,
      alignItems:'center',
      justifyContent:'space-between',
      'img':{
        width:'1.5rem',
        height:'1.5rem',
      },
      '@media screen and (max-width: 440px)': {
        'img':{
          width:'1rem',
          height:'1rem',
        },
      },
    },
    
    

    average:{
        //border:'1px solid yellow',
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        
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
        opacity:0.6,
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
            
        },
      }
  }

  const formatNumber = (number: number): string | "Error: Please enter a valid number." => {
    if (typeof number !== 'number') {
      return "Error: Please enter a valid number.";
    }
  
    if (number >= 1000000) {
      return (number / 1000000).toFixed(1) + 'm';
    } else if (number >= 10000) {
      return (number / 1000).toFixed(1) + 'k';
    } else {
      return number.toString();
    }
  };


const CardMediaOverviewOverview:React.FC<Props> = ({CardMediaList}) => {
  const theme = useTheme();
    return (
      
    <Box sx={{...cardMediaStyle.containerStyle, borderTop: '5px solid '+CardMediaList.averageUpDown} }>
        <Card sx={{ backgroundColor: theme.palette.info.main}} variant="outlined">
          <Box sx={cardMediaStyle.cardContent}>
            <Box sx={cardMediaStyle.iconUserContainer}>
              <Typography sx={cardMediaStyle.subTitle}>{CardMediaList.typeOverview}</Typography>
              <img src={CardMediaList.icon} alt={CardMediaList.typeOverview} />
            </Box>

            
            <Box sx={cardMediaStyle.average}>
            <Typography sx={cardMediaStyle.title}>{formatNumber(CardMediaList.gainToday)}</Typography>
              <Typography sx={{ ...cardMediaStyle.title, fontSize:'1rem', color: (CardMediaList.averageUpDown > 0) ?  limeGreen : brightRed }}>
              {(CardMediaList.averageUpDown > 0) ?  '↑' : '↓'} {Math.abs(CardMediaList.averageUpDown)} today
              </Typography>
            </Box>

          </Box>
            
        </Card>
    </Box>
    );
}

export default CardMediaOverviewOverview


