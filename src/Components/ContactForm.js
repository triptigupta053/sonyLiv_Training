import React, { useState, useEffect } from "react";
export function ContactForm(callback, props) {

    const initialState = {
        name: "",
        email: "",
        comments: "",
    };

    const styles = {
        layout:{
            width:'100%',
            height:'100vh',
            display: 'flex',
            backgroundColor:'#e6e6ff',
            justifyContent:'center',
            alignItems:'center'
        },
        container: {
            width:'37%',
            maxWidth:'680 px',
            height: '75%',
            display: 'flex',
            backgroundColor:'#FFDAB9',
            flexDirection:'column',
            borderRadius: '20px',
            boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'
            
        },
        containerItems:{
            display:'flex',
            flexWrap: 'wrap',
            alignItems:'flex-start',
            justifyContent:'space-between',
            margin:'20px 20px 20px 20px'
        },

        inputItems:{
            display:'flex',
            flexWrap: 'wrap',
            paddingLeft:'25px',
            border:'1px',
            height:'25px',
            borderRadius:'3px',
            boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)'
        },

        textareaItems:{
            display:'flex',
            paddingLeft:'35px',
            border:'1px',
            height:'25px',
            borderRadius:'3px',
            boxShadow: '0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)'
        },

        buttonItems:{
            display:'flex',
            justifyContent:'space-evenly',
            marginTop:'50px'
        },

        button: {
                backgroundColor: '#6495ED',
                border: 'none',
                color: 'white',
                padding: '15px 32px',
                textAlign: 'center',
                textDecoration: 'none',
                display: 'inline-block',
                fontSize: '12px',
                borderRadius:'5px',
                boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2), 0 3px 10px 0 rgba(0,0,0,0.19)'
              
        },

        label: {
            textDecorationStyle: 'bold',
            paddingLeft:'40px'
        }

    };

        const [errors, setErrors] = useState({});
        const [isSubmitting, setIsSubmitting] = useState(false);

        const [{ name, email, comments }, setState] = useState(initialState);

        const clearState = () => {
            setState({ ...initialState });
        };

        const onChange = event => {
            const { name, value } = event.target;
            setState(prevState => ({ ...prevState, [name]: value }));
        };

        useEffect(() => {
            if (Object.keys(errors).length === 0 && isSubmitting) {
                callback();
            }
        }, [errors]);

        const Validate = () =>{
            if(!name){
                errors.name = "Name is Required";
            } 

            if (!email){
                errors.email = "Email is Required";

            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)){
                errors.email = "Invalid Email Address"
            }

            if(!comments){
                errors.comments = "Comments are Required";
            }
            return errors;
        }

        const handleSubmit = (event) => {
            event.preventDefault();
            setErrors(Validate());
            setIsSubmitting(true);
        }

        return (
            <form onSubmit={handleSubmit}>
                
                <div style={styles.layout}>
                    <div style={styles.container}>
                        <h2 style={{color:'#2F4F4F', display:'flex', justifyContent:'center', margin:'50px'}}>Contact Us !</h2>
                    <div style={styles.containerItems}>
                        <label style={styles.label}>
                            Name:
                        </label>
                            <div style={{paddingRight:'40px'}}>
                                <input style={styles.inputItems} value={name} name="name" placeholder='John' onChange={onChange} required="" />
                                {errors.name && <p style={{margin:'0px'}}>{errors.name}</p>}
                            </div>
                    </div>
                    

                    <div style={styles.containerItems}>
                        <label style={styles.label}>
                            Email:
                        </label>
                            <div style={{paddingRight:'40px'}}>
                                <input style={styles.inputItems} value={email} name="email" placeholder='Example@gmail.com'onChange={onChange} required="" />
                                {errors.email && <p style={{margin:'0px'}}>{errors.email}</p>}
                            </div>
                         
                    </div>
                   
                    <div style={styles.containerItems}>
                        <label style={styles.label}>
                            Comments:
                        </label>
                            <div style={{paddingRight:'40px'}}>
                                <textarea style={styles.textareaItems} value={comments} name="comments" onChange={onChange} required="" ></textarea>
                                {errors.comments && <p style={{margin:'0px'}}>{errors.comments}</p>}
                            </div>
                    </div> 
                    
                    <div style={styles.buttonItems}>
                        <input style={styles.button} type="submit" value="Submit" />
                        <input style={styles.button} type="button" value="Clear" onClick={clearState} />
                    </div>
                    </div>

                    
                </div>

            </form>
        );

}

export default ContactForm