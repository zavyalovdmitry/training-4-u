import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import Card from 'react-bootstrap/Card';

import { selectError, selectIsLoading } from './selectors'
import { authorize } from './actions';

import './styles.scss'

export const Auth = () => {
   const dispatch = useDispatch()

   const isLoading = useSelector(selectIsLoading)
   const error = useSelector(selectError)

   const [email, setEmail] = useState("")
   const handleChangeEmail = useCallback((e) => {
      setEmail(e.target.value);
   }, [])

   const [password, setPassword] = useState("")
   const handleChangePassword = useCallback((e) => {
      setPassword(e.target.value);
   }, [])

   const handleSubmit = useCallback((event) => {
      event.preventDefault();
      dispatch(authorize({ email, password }))
   }, [email, password, dispatch])

   return (
      <Card className="auth__card" body>
         <Card.Title>
            Войдите или зарегистрируйтесь
         </Card.Title>
         <Form className="auth__form" onSubmit={handleSubmit} >
            <Form.Control
               type="email"
               name="email"
               size="lg"
               placeholder="Введите почту"
               value={email}
               onChange={handleChangeEmail}
               disabled={isLoading}
            />
            <Form.Control
               type="password"
               name="password"
               size="lg"
               placeholder="Введите или придумайте пароль"
               value={password}
               onChange={handleChangePassword}
               disabled={isLoading}
            />

            {!!error && (
               <Alert variant="danger">
                  {error.message}
               </Alert>
            )}

            <Button
               variant="primary"
               type="submit"
               size="lg"
               block
               disabled={isLoading}
            >
               {isLoading ? <Spinner animation="border" /> : "Далее"}
            </Button>

            {/* <Button
               className="auth__reset-btn"
               variant="link"
               type="button"
               href="#"
            >
               Забыли пароль?
            </Button> */}

            <Form.Text muted>
               Используйте логин user@test.com, пароль 123456, чтобы попробовать приложение
            </Form.Text>
         </Form >
      </Card>
   )
}