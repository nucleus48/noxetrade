import { FC, useCallback, useEffect, useRef, useState } from 'preact/compat'
import {
  ActionFunction,
  Form,
  Link,
  json,
  redirect,
  useActionData
} from 'react-router-dom'
import { Authenticate } from '../components/Authenticate'
import { useAuth } from '../providers/AuthProvider'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from '../firebase'
import styles from './accounts.module.css'
import { Spinner } from '../components/Spinner'
import { FirebaseError } from 'firebase/app'

const Signup: FC = () => {
  const actionData = useActionData()
  const [isLoading, setIsLoading] = useState(false)
  const form = useRef<HTMLFormElement | null>(null)

  const handleClick = useCallback(
    () => form.current?.checkValidity() && setIsLoading(true),
    [isLoading]
  )

  useEffect(() => setIsLoading(false), [actionData])

  return (
    <div class={styles.container}>
      <div class={`container ${styles.formEl}`}>
        <div>NoxeTrade</div>
        <h3>Create Account</h3>
        <Form method="POST">
          <input required name="full-name" placeholder="Full Name" />
          <input required name="email" type="email" placeholder="Email" />
          <input
            class={actionData?.error?.code && styles.error}
            name="password"
            type="password"
            placeholder="Password"
            required
          />
          <div>
            <input
              class={actionData?.error?.code && styles.error}
              name="confirm-password"
              type="password"
              placeholder="Confirm Password"
              required
            />
            <p>{actionData?.error?.code}</p>
          </div>
          <button onClick={handleClick}>Signup</button>
        </Form>
        <p>
          already have an account? <Link to="/login" replace>Log in.</Link>
        </p>
      </div>
      {isLoading && <Spinner />}
    </div>
  )
}

export const Component: FC = () => {
  const { user } = useAuth()
  return (
    <Authenticate predicate={() => !user} redirect="/home">
      <Signup />
    </Authenticate>
  )
}

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData()
  const fullName = formData.get('full-name') as string
  const email = formData.get('email') as string
  const password = formData.get('password') as string
  const confirmPassword = formData.get('confirm-password')

  if (password === confirmPassword) {
    try {
      await createUserWithEmailAndPassword(auth, email, password)
      await updateProfile(auth.currentUser!, { displayName: fullName })
      return redirect('/home')
    } catch (e) {
      const error = e as FirebaseError
      if (error.code === 'auth/email-already-in-use') return redirect('/login')
      return json({ error: error }, { status: 400 })
    }
  }
  return json({ error: { code: 'password mismatch' } }, { status: 400 })
}
