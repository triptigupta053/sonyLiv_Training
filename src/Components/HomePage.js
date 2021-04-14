import React from "react";
import useStyles from './Layout.styles';

export function HomePage(props) {

    const classes = useStyles();

    return (
       <div className ={classes.layout }>
           <div className = {classes.headerSection}>
                <span>
                    logo
                </span>
           </div>
           <div className = {classes.headingSection}>
               
                <div className={classes.headingContent}>
                    <div className={classes.headingStripe}>

                    </div>
                    <p>Start Your</p>
                    <p>Fitness Today</p>
                    <section>
                        <span>
                            8 MONTHS UNLIMITED GYM, POOL AND
                    </span>
                        <span>
                            FITNESS CLASSES FROM JUST 82P PER DAY!
                    </span>
                    </section>

                </div>
               <div className= {classes.headingImage}>
                        
               </div>
               
           </div>
           <div className = {classes.contentSection}>
               <div className= {classes.contentDescription1}>
                   <div>
                        <p>
                            Our Gym is a welocimg and inspiring facility - from over 35 studio classes a week to our highly qualified and friendly fitness coaches,
                            energising studio classes to bespoke interactive lighting  design.
                       </p>
                       
                   </div>
                   <div>
                        <p>
                            The Gym caters to all fitness goals - from taking steps to leading healthy, well balanced lifestyle to competing to a high level in your sport.
                            Our members enjoy free training programms.
                       </p>
                       
                   </div>
                    <section></section>

               </div>
                <div className={classes.contentDescription2Wrapper}>
                    <div className={classes.contentDescription2}>
                        <section>
                            For you. For now.
                            For life.
                    </section>
                        <div className={classes.descriptionDetails}>
                            <div>
                                <p>
                                    Our Gym is a welocimg and inspiring facility - from over 35 studio classes a week to our highly qualified and friendly fitness coaches,
                                    energising studio classes to bespoke interactive lighting  design. Our Gym is a no for profit organization, with a constitution.Sport is one
                                    of the four organization on the campus which recieves annual allocation of student services and amenities fee. The objective of sport are to promote and provide
                                    a diverse and exciting range of professionally provided training.
                       </p>

                            </div>
                            <div>
                                <p>
                                    The Gym caters to all fitness goals - from taking steps to leading healthy, well balanced lifestyle to competing to a high level in your sport.
                                    Our members enjoy free training programms.Our Gym is a no for profit organization, with a constitution.Sport is one
                                    of the four organization on the campus which recieves annual allocation of student services and amenities fee.
                                <br></br>
                                    <span className={classes.readMore}>read more</span>
                                    <section></section>
                                </p>

                            </div>
                        </div>


                    </div>
                     <div className={classes.contentDescriptionImage}>
                    </div>
                </div>
                
                <div className={classes.contentDescriptionQuote}>
                    <div className={classes.quoteContainer}>
                        <div className={classes.quoteSectionWrapper}>
                            <div className={classes.quoteImageContainer}>
                                <div>

                                </div>

                            </div>
                            <div className = {classes.quoteDescriptionWrapper}>
                                <section>

                                </section>
                                <div className= {classes.quoteWrapper}>
                                    <div className ={classes.quote}>
                                        <p>
                                            "I love the place! I go everyday and I think that it has good equipment. The personnel are all great and helpful!"
                                            <br></br>
                                            <br></br>
                                            -Mary Blancas
                                        </p>
                                    </div>
                                    <div className = {classes.quoteImage}>
                                        
                                    </div>
                                </div>
                                
                            </div>

                        </div>
                        <div className={classes.missionWrapper}>
                            <div className={classes.missionImageLeft}></div>
                            <div className={classes.missionContentWrapper}>
                                <section>
                                    Our Mission
                                </section>
                                <div>
                                    The Gym caters to all fitness goals - from taking steps to leading healthy, well balanced lifestyle to competing to a high level in your sport.
                                    Our members enjoy free training programms.Our Gym is a no for profit organization, with a constitution.Sport is one
                                    of the four organization on the campus which recieves annual allocation of student services and amenities fee.
                                    <p className={classes.readMore}>
                                    read more
                                    </p>
                                    <section>

                                    </section>
                                </div>
                                
                            </div>
                            <div className={classes.missionImageRight}></div>

                        </div>
                    </div>
                    

                </div>
                

           </div>
           <div className = {classes.gridSection}>
               <div className={classes.gridContainer}>
                   <div className={classes.gridRow1}>
                       <div className={classes.gridRow1Column1}>

                       </div>
                       <div className={classes.gridRow1Column2}>

                       </div>
                   </div>
                   <div className={classes.gridRow2}>
                       <div className={classes.gridRow2Column1}>
                            <div>
                                <p>Fitness </p>
                                <p>Classes</p>
                                <span className={classes.readMore}>view more</span>
                                    <section></section>
                            </div>
                       </div>
                       <div className={classes.gridRow2Column2}>

                       </div>
                   </div>
                   <div className={classes.gridRow3}>
                       <div className={classes.gridRow3Column1}>

                       </div>
                       <div className={classes.gridRow3Column2}>

                       </div>
                   </div>

               </div>

           </div>
           <div>

           </div>
           <div className = {classes.contactSection}>
                <div className={classes.contactSectionRow}>
                    <div className={classes.contactSectionColumn1}>
                        <div>
                            
                        </div>

                    </div>
                    <div>

                    </div>
                </div>
               
           </div>
           <div className = {classes.footerSection}>
               

           </div>
          
       </div>
    );
}

export default HomePage;