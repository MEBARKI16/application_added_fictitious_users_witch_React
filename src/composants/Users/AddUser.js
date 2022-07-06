import React, { useState } from 'react';
import Card from '../UI/Card';
import classes from './AddUser.module.css'
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const AddUser = (props) => {
    const [username,setusername] = useState('');
    const [age,setage] = useState(''); 
    const [error, seterror] = useState();
    const recupdata = (event) => {
        event.preventDefault();
        if(username.trim().length === 0 || age.trim().length === 0) {
            seterror(
                {
                    title : "Invalid input",
                    message : "Please enter a valid name and age (non-empty values)."
                }
            );
            return;
        }
        if(+age < 0) {
            seterror(
                {
                    title : "Invalid age",
                    message : "Please enter a valid age (> 0)."
                }
            );
            return;
        }
        props.onAddUser(username,age);
        setusername('');
        setage('');
    }
    const reset = () =>
    {
        seterror(null);
    }
   
    const entredusername = (event) => {
        setusername(event.target.value);
    }
    const entredage = (event) => {
        setage(event.target.value);
    }
return (
    <div>
   {error && <ErrorModal title={error.title}  message={error.message} onConfirm={reset}/>}
<Card className={classes.input}>
        <form onSubmit={recupdata}>
        
                <label htmlFor='username'>Username : </label>
                <input id='username' type='text' value={username} onChange={entredusername}/>
                <label htmlFor='age'>Age (Years) : </label>
                <input id='age' type='number' value={age} onChange={entredage}/>
                 <Button type='submit'>Add User</Button>
        </form>
        </Card></div>
    )
};

export default AddUser;