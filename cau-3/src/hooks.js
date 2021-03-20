import { useState, useEffect } from 'react';

export const useEmailValidate = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState(false);
    
    useEffect(() => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(re.test(email)) setError(false);
        else setError(true);
    }, [email]);

    return [email, setEmail, error];
}

function isPasswordValidate(password) {
    let haveNumber = false;
    let haveUpperCase = false;
    let haveLowerCase = false;
    
    if(password && password.length) {
        for(let i = 0; i < password.length; i++) {
            let number = parseInt(password[i]);
            if(!isNaN(number)) haveNumber = true;
            if(isNaN(number) && password[i] === password[i].toLowerCase())
                haveLowerCase = true;
            if(isNaN(number) && password[i] === password[i].toUpperCase())
                haveUpperCase = true;
        }
        return haveNumber && haveUpperCase && haveLowerCase && password.length > 5;
    }

    return false;
}

export const usePasswordValidate = () => {
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    useEffect(() => {
        const validate = !isPasswordValidate(password);
        setError(validate);
    }, [password]);

    return [password, setPassword, error];
}