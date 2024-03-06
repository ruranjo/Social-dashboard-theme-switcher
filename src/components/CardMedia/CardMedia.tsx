import { Box, Card, SxProps, Typography, useTheme  } from '@mui/material';
import React from 'react'
import { cardMediaType } from '../../interface/data.interface';
import { brightRed, limeGreen } from '../../styles/variables';

export interface Props {
    CardMediaList: cardMediaType;
}

export interface styledCardMedia {
    containerStyle: SxProps;
    cardContent: SxProps;
    iconUserContainer: SxProps;
    mainNumber: SxProps;
    average: SxProps;
    title: SxProps;
    subTitle: SxProps;
    mainMediaSection: SxProps;
  }
  
  const cardMediaStyle: styledCardMedia= {
    containerStyle:{ 
        minWidth: 275,

    },
    cardContent:{
      display:'flex',
      flexDirection:'column',
      paddingTop:'1rem',
      paddingBottom:'1rem',
      //border:'1px solid red',
    },
    iconUserContainer:{
      //border:'1px solid blue',
      display:'flex',
      gap:1,
      alignItems:'center',
      justifyContent:'center',
      'img':{
        width:'1.5rem',
        height:'1.5rem',
      },
      '@media screen and (max-width: 440px)': {
        
      },
    },
    
    mainNumber:{
      display:'flex',
      flexDirection:'column',
      gap:1,
      alignItems:'center',
      justifyContent:'center',
        '@media screen and (max-width: 440px)': {
          
        },
    },

    average:{
        //border:'1px solid yellow',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        
    '@media screen and (max-width: 440px)': {
        
    },
    },
    title:{
        //border:'1px solid black',
        display:'flex',
        fontSize:'1rem',
        
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


const CardMedia:React.FC<Props> = ({CardMediaList}) => {
  const theme = useTheme();
    return (
      
    <Box sx={{...cardMediaStyle.containerStyle, borderTop: '5px solid '+CardMediaList.color} }>
        <Card sx={{ backgroundColor: theme.palette.info.main}} variant="outlined">
          <Box sx={cardMediaStyle.cardContent}>
            <Box sx={cardMediaStyle.iconUserContainer}>
              <img src={CardMediaList.icon} alt="" />
              <Typography sx={cardMediaStyle.title}>{CardMediaList.username}</Typography>
            </Box>

            <Box sx={cardMediaStyle.mainNumber}>
              <Typography sx={{ ...cardMediaStyle.title, fontSize:'3rem' }}>{formatNumber(CardMediaList.subscribersOrFollowers)}</Typography>
              <Typography sx={cardMediaStyle.subTitle}>{CardMediaList.typeOfFollowingOrSubcriber === 'Following'? 'FOLLOWERS':'SUBSCRIBERS'} </Typography>
            </Box>

            <Box sx={cardMediaStyle.average}>
              
              <Typography sx={{ ...cardMediaStyle.title, fontSize:'1rem', color: (CardMediaList.averageUpDown > 0) ?  limeGreen : brightRed }}>
              {(CardMediaList.averageUpDown > 0) ?  '↑' : '↓'} {Math.abs(CardMediaList.averageUpDown)} today
              </Typography>
            </Box>

          </Box>
            
        </Card>
    </Box>
    );
}

export default CardMedia


/*
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Word of the Day
      </Typography>
      <Typography variant="h5" component="div">
        be{bull}nev{bull}o{bull}lent
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective
      </Typography>
      <Typography variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Learn More</Button>
    </CardActions>
  </React.Fragment>
);

export default function OutlinedCard() {
 
}
*/