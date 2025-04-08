import styles from './TeacherLogin.module.css'
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const loginSchema = z.object({
    ni: z.string().length(7, { message: 'Insert a valid ni (length:7)' }),
    name: z.string().min(3, { message: 'Insert a valid name' }),
    email: z.string().email({ message: 'Insert a valid email' }),
    cellphone: z.string().regex(/^\(\d{2}\) \d{5}-\d{4}$/, { message: 'Insert a valid cellphone (XX) XXXXX-XXXX' }),
    birthDate: z.string().transform((value) => new Date(value)),
    hiringDate: z.string().transform((value) => new Date(value))
})

export function TeacherLogin() {
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(loginSchema)
    })

    function userAutenticate(data) {
        console.log(data)
    }

    return (
        <div className={styles.container}>
            <p className={styles.title}>Login</p>

            <form
                onSubmit={handleSubmit(userAutenticate)}
                className={styles.form}
            >
                <input
                    {...register('ni')}
                    placeholder='NI'
                    className={styles.field}
                />
                {errors.ni && (<p>{errors.ni.message}</p>)}
                <input
                    {...register('name')}
                    placeholder='Name'
                    className={styles.field}
                />
                {errors.name && (<p>{errors.name.message}</p>)}
                <input
                    {...register('email')}
                    placeholder='E-mail'
                    className={styles.field}
                />
                {errors.email && (<p>{errors.email.message}</p>)}
                <input
                    {...register('cellphone')}
                    placeholder='Cell phone'
                    className={styles.field}
                    />
                {errors.cellphone && (<p>{errors.cellphone.message}</p>)}
                <input
                    {...register('birthDate')}
                    placeholder='Birth date'
                    className={styles.field}
                    type='date'
                />
                {errors.birthDate && (<p>{errors.birthDate.message}</p>)}
                <input
                    {...register('hiringDate')}
                    placeholder='Hiring date'
                    className={styles.field}
                    type='date'
                />
                {errors.hiringDate && (<p>{errors.hiringDate.message}</p>)}
                <button
                    type='submit'
                    className={styles.button}
                >Login</button>
            </form>
        </div>
    );
}
