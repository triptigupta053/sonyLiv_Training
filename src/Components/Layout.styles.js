import { createUseStyles } from 'react-jss';
import BreakingDownBarriersFitness from './../images/BreakingDownBarriersFitness.jpg';
import fitness2 from './../images/fitness2.jpg';
import swimming from './../images/swimming.jpg';
import quotes3 from './../images/quotes3.webp';
import swimmimgback from './../images/swimmimgback.jpg';
import swimmingEmpty from './../images/swimmingEmpty.jpg';
import gridImage1 from './../images/gridImage1.jpg';
import gridimages2 from './../images/gridimages2.jpg';
import gridImage6 from './../images/gridImage6.webp';
import gridImage7 from './../images/gridImage7.webp';
import gridImage8 from './../images/gridImage8.jpg';

const useStyles = createUseStyles({
    
    layout: {
        width:'100% ',
        height: '100vh',
        overflow: 'auto',
    },

    headerSection: {
      width: '100%',
      height: '8%',
      //backgroundColor: '#F0FFFF',

      '& span': {
        marginLeft:"10%",
        fontSize: 27,
        fontWeight: '600',
        color:'#696969'
      }
    },

    headingSection: {
        width: '100%',
        height: '55%',
        //backgroundColor: '#F0FFFF',
        display:'flex',
        justifyContent:'space-evenly',
    },

    headingContent: {
      display: 'flex',
      width: '50%',
      height: '100%',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'start',
      position:'relative',

      '& p': {
        marginLeft: '25%',
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: 60,
        fontWeight: 180,
        margin: '0px'
      },
      '& section': {
        marginTop: '5px',
        marginLeft: '25%',
        display:'flex',
        flexDirection: 'column',
      },
      '& span': {
        fontWeight: 530,
        fontSize: 12,
        fontFamily: '"Arial",serif'
      },
      
    },

    headingStripe:{
      border:"2px",
      width:'15vh',
      height:'2vh',
      backgroundColor:"#FFD700",
      zIndex: 2,
      marginTop:'2%',
      marginLeft: '92%',
    },

    headingImage :{
      width: '50%',
      height: '150%',
      backgroundImage: `url(${BreakingDownBarriersFitness})`,
      backgroundPosition: "center",
      backgroundRepeat:"no-repeat",
      backgroundSize: "cover",
      zIndex: 0
    },

    contentSection: {
      width: '100%',
      height: '220%',
      backgroundColor: '#000000',
    },

    contentDescription1: {
      width: '50%',
      height: '16%',
      display:'flex',
      position:'relative',
      justifyContent:'space-evenly',
      '& div': {
        display:'flex',
        width: '50%',
        height:'100%',
        '& p': {
          justifyContent:'flex-start',
          marginTop: '10%',
          marginLeft: '5%',
          marginRight: '2.5%' ,
          color: 'white',
          fontStyle: 'italic'
          
        }
      },
      '& section': {
        width:'2vh',
        height:'32vh',
        backgroundColor:"#FFD700",
        marginTop:'30%',
        marginRight: '4%'
        
      }
    },

    contentDescriptionQuote:{
      width:'100%',
      height:'50%',
      justifyContent:'flex-end',
      position: 'relative',
      display:'flex',
    },

    quoteContainer:{
      width: '80%',
      height: '100%',
      backgroundColor:'white',
      marginTop: '-8%'
    },

    quoteSectionWrapper:{
      display:'flex',
      flexDirection:'row',
      width:'100%',
      height:'30%',
      marginTop: '12%',
      '& div':{
        height:'100%',
      }
    },

    quoteImageContainer:{
      width:'35%',
      height: '100%',
      backgroundColor: '#000000',
      display:'flex',
      '& div':{
        width: '100%',
        height: '110%',
        marginTop: '-20%',
        marginLeft: '-15%',
        backgroundImage: `url(${swimming})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        zIndex: 4
      }
    },

    quoteDescriptionWrapper:{
      width:'55%', 
      '& section':{
        border:"2px",
        width:'97%',
        height:'2vh',
        backgroundColor:"#FFD700",
        zIndex: 2,
        marginTop:'5%',
        marginLeft: '3%',
      }
    },

    quoteWrapper:{
      display:"flex",
      flexDirection:'row',
      justifyContent:'flex-start',
      '& div':{
        display:'flex'
      }
    },

    quote:{
      width:'70%',
      marginLeft: '3%',
      marginBottom:'-10%',
      display:'flex',
      '& p':{
        flexWrap:'wrap',
        fontFamily: '"Arial",serif',
        fontWeight: 550,
        fontStyle:'italic'
      }
    },

    quoteImage:{
      width:'30%',
      height:'50%',
      backgroundImage: `url(${quotes3})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },

    contentDescriptionImage :{
      width:'40%',
      height: '90%',
      marginTop:'5%',
      marginLeft:'5%',
      zIndex: '3',
      backgroundImage: `url(${fitness2})`,
      backgroundPosition: "center",
      backgroundRepeat:"no-repeat",
      backgroundSize: "cover",
    },

    contentDescription2Wrapper:{
      width:'100%',
      height:'40%',
      display:'flex',
      flexDirection:'row',
    },

    contentDescription2 : {
      width:'50%',
      height: '100%',
      display:'flex',
      flexDirection:'column',
      backgroundColor:'white',
      '& section': {
        width:'50%',
        height: '25%',
        marginTop: '10%',
        marginLeft: '15%',
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: 50,
        fontWeight: 180,
      },
    },

  descriptionDetails: {
    display: 'flex',
    width: '100%',
    height: '50%',
    '& div': {
      display: 'flex',
      width: '50%',
      height: '100%',
      '& p': {
        justifyContent: 'flex-start',
        flexWrap: 'wrap',
        marginLeft: '5%',
        marginRight: '2.5%',
        color: 'black',
        fontStyle: 'italic',
        fontWeight:'400',
        '& section': {
          border:"2px",
          width:'12vh',
          height:'1vh',
          margin:'0px',
          backgroundColor:"#FFD700",
        }
      }
    }
  },

  missionWrapper:{
    width:'100%',
    height: '49%',
    //backgroundColor:'white',
    marginTop:'4%',
    display:'flex',
    flexDirection:'row',
    '& div':{
      height:'100%',
    }
  },

  missionImageLeft:{
    width:'42%',
    marginLeft:'-12%',
    backgroundImage: `url(${swimmimgback})`,
    backgroundPosition: "center",
    backgroundRepeat:"no-repeat",
    backgroundSize: "cover",
    zIndex:4
  },
  missionImageRight:{
    width:'30%',
    backgroundImage: `url(${swimmingEmpty})`,
    backgroundPosition: "center",
    backgroundRepeat:"no-repeat",
    backgroundSize: "cover",
  },
  missionContentWrapper:{
    width:'40%',
    backgroundColor:'white',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    '& section':{
      fontFamily: '"Times New Roman", Times, serif',
        fontSize: 40,
        fontWeight: 180,
        marginTop:'8%'
    },
    '& div':{
      marginLeft:'10%',
      marginRight:'10%',
      marginTop: '2%',
      fontWeight: 450,
      fontStyle:'italic',
      '& p':{
        marginBottom:'0px'
      },
      '& section':{
        border:"2px",
        width:'12vh',
        height:'1vh',
        margin:'0px',
        backgroundColor:"#FFD700",
      }
    }
  },

  readMore:{
    fontWeight:'bold',
    marginTop: '2px'
  },

    gridSection: {
      width: '100',
      height: '140%',
      backgroundColor: '#FFD700',
      display:'flex',
      alignItems:'center',
      justifyContent:'center'
    },

    gridContainer:{
      width:'80%',
      height: '80%',
      display:'flex',
      flexDirection:'column'
      //backgroundColor:'red'
    },

    gridRow1:{
      width:'100%',
      height:'30%',
      display:'flex',
      flexDirection:'row',
      position:'relative'
    },

    gridRow1Column1:{
      width:'25%',
      height:'190%',
      backgroundImage: `url(${gridImage1})`,
      backgroundPosition: "center",
      backgroundRepeat:"no-repeat",
      backgroundSize: "cover",
      marginRight:'1vh'
    },
    gridRow1Column2:{
      height:'100%',
      width:'75%',
      backgroundImage: `url(${gridimages2})`,
      backgroundPosition: "center",
      backgroundRepeat:"no-repeat",
      backgroundSize: "cover",
    },

    gridRow2:{
      marginLeft:'41vh',
      marginTop:'1vh',
      width:'74.5%',
      height:'26%',
      position:'relative',
      display:'flex',
      flexDirection:'row',
    },

    
    gridRow2Column1:{
      width:'49%',
      height:'100%',
      backgroundColor:'#333333',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      '& div':{
        width:'80%',
        height:'85%',
        display:'flex',
        flexDirection:'column',
        '& p':{
          color:'white',
          flexWrap:'wrap',
          fontFamily: '"Times New Roman", Times, serif',
          fontSize: 45,
          fontWeight: 180,
          margin:'0px'
        },
        '& span':{
          color:'white',
        },
        '& section':{
          width: '12vh',
          height: '1vh',
          backgroundColor: '#FFD700'
        }
      },
      
    },

    gridRow2Column2:{
      width:'50%',
      height:'265%',
      marginLeft:'1vh',
      backgroundColor:'blue',
      backgroundImage: `url(${gridImage6})`,
      backgroundPosition: "center",
      backgroundRepeat:"no-repeat",
      backgroundSize: "cover",
    },

    gridRow3:{
     width:'62%',
     height:'42%',
     marginTop:'1vh',
     display:'flex',
     flowDirection:'row'
    },

    gridRow3Column1:{
      width:'41%',
      height:'100%',
      backgroundImage: `url(${gridImage7})`,
      backgroundPosition: "center",
      backgroundRepeat:"no-repeat",
      backgroundSize: "cover",
    },

    gridRow3Column2:{
      width:'60%',
      height:'100%',
      marginLeft: '1vh',
      backgroundImage: `url(${gridImage8})`,
      backgroundPosition: "center",
      backgroundRepeat:"no-repeat",
      backgroundSize: "cover",
    },

    contactSection:{
      width: '100',
      height: '60%',
      backgroundColor: '#F0FFFF',
    },

    contactSectionRow:{
      width:'100%',
      height:'100%',
      '& div':{
        height:'100%',
      }
    },

    contactSectionColumn1:{
      width:'20%',
      backgroundColor:'black',
      display:'flex',
    },

    footerSection: {
      width: '100%',
      height: '8%',
      backgroundColor: '#808080'
    },
  
  })

export default useStyles;
