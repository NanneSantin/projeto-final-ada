import { Field, Form, FormikHelpers, FormikProvider, useFormik } from 'formik';
import { useEffect, useState } from 'react';
import * as Yup from 'yup';
import { adviceApi, client } from '../../network/api';
import styles from './Forms.module.css';

interface IFormValues {
    email: string,
    password: string,
    name: string,
    acceptTerms: boolean
}

export default function Forms() {
    const [showRegister, setShowRegister] = useState<Boolean>(false);
    const [advice, setAdvice] = useState<String>('');

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Digite um email válido').required('O email é obrigatório'),
        password: Yup.string().required('A senha é obrigatória'),
        name: showRegister ? Yup.string().required('O nome é obrigatório') : Yup.string(),
        acceptTerms: showRegister ? Yup.boolean().oneOf([true], 'Você precisa concordar com os termos') : Yup.boolean(),
    });

    const handleSubmit = async (values: IFormValues, actions: FormikHelpers<IFormValues>) => {
        try {
            if (showRegister) {

                const userExist = await client.get(`/users?email=${values.email}`);

                if (userExist.data.length > 0) {
                    alert('E-mail já cadastrado!');
                    return
                }

                await client.post('/users', values);
                console.log('Usuário cadastrado com sucesso!');
                alert('Usuário cadastrado!')
            } else {
                const userExist = (await client.get(`/users?email=${values.email}`)).data;
                const validatePassword = values.password === userExist[0].password;

                if (userExist.length < 1 || !validatePassword) {
                    alert('Usuário ou senha inválido!')
                    return
                }

                console.log('Usuário logado com sucesso');
                alert('Usuário logado!')
            }
        } catch (error) {
            console.error('Erro ao cadastrar usuário:', error)
        } finally {
            actions.setSubmitting(false);
        }
    }

    useEffect(() => {
        const fetchAdvice = async () => {
            try {
                const response = await adviceApi.get('/advice');
                setAdvice(response.data.slip.advice);
            } catch (error) {
                console.error('Erro ao obter conselho:', error);
            }
        };

        if (!showRegister) {
            fetchAdvice();
        }
    }, [showRegister]);

    const form = useFormik<IFormValues>({
        initialValues: {
            email: '',
            password: '',
            acceptTerms: false,
            name: ''
        },
        validationSchema,
        onSubmit: handleSubmit
    })

    return (
        <>
            <FormikProvider value={form}>
                <Form className={styles.container_form}>
                    {showRegister && (<>
                        <label htmlFor='name'>Nome:</label>
                        <Field className={styles.field_input} placeholder='Digite seu nome completo' name='name' type='text' />
                    </>
                    )}
                    <label htmlFor='email'>Email:</label>
                    <Field className={styles.field_input} placeholder='exemplo@email.com' name='email' type='email' />

                    <label htmlFor='password'>Senha:</label>
                    <Field className={styles.field_input} name='password' type='password' />

                    {showRegister && (
                        <span className={styles.termos}>
                            <label>
                                <Field className={styles.termos_checkbox} type='checkbox' name='acceptTerms' />
                                Você concorda com os nossos Termos, Política de Privacidade e Políticas de Cookies?
                            </label>
                        </span>
                    )}

                    <div className={styles.container_btn}>
                        {showRegister && (
                            <>
                                <button className={styles.btn_main} type='submit'>
                                    Cadastrar
                                </button>
                                <button className={styles.btn_other} type='button' onClick={() => setShowRegister(false)}>Login</button>
                            </>
                        )}

                        {!showRegister && (
                            <>
                                <button className={styles.btn_main} type='submit'>Login</button>
                                <button className={styles.btn_other} type='button' onClick={() => setShowRegister(true)}>
                                    Registrar-se
                                </button>
                            </>
                        )}
                    </div>
                </Form>
            </FormikProvider>
            {!showRegister && (
                <span className={styles.advice}>
                    <p>{advice}</p>
                </span>
            )}
        </>
    )
}