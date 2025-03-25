import styles from './Login.module.css'
import { useRef, useState } from 'react';

export function Login() {
    const checkboxRef = useRef(null);
    const [error, setError] = useState('');

    const formSubmitHandler = (e) => {
        e.preventDefault();
        
        if (checkboxRef.current.checked) {
            setError('You must agree to the terms and conditions to proceed.');
            return;
        }

        setError('');
        alert('Login successful');
    };

    return (
        <div className={styles.container}>
            <p className={styles.title}>Login</p>

            <form className={styles.form} onSubmit={formSubmitHandler}>
                <input placeholder='E-mail' className={styles.field} />
                <input placeholder='Password' className={styles.field} type='password' />
                <button type='submit' className={styles.button}>Login</button>
                <p>Do u agree with the term and conditions?</p>
                <div className={styles.terms_conditions}>
                    <input
                        type='checkbox'
                        id='terms_condition'
                        name='terms_condition'
                        ref={checkboxRef}
                    />
                    <label htmlFor='terms_condition' className={styles.terms}>
                        I do not agree to the terms and conditions
                    </label>
                </div>
                
                {error && <p className={styles.error}>{error}</p>}
            </form>
        </div>
    );
}
