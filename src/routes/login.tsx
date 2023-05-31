import { FC, useCallback, useEffect, useRef, useState } from 'preact/compat'
import {
  ActionFunction,
  Form,
  Link,
  redirect,
  useActionData
} from 'react-router-dom'
import { useAuth } from '../providers/AuthProvider'
import { Authenticate } from '../components/Authenticate'
import styles from './accounts.module.css'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'
import { Spinner } from '../components/Spinner'
import { FirebaseError } from 'firebase/app'

const Login: FC = () => {
  const actionData = useActionData()
  const [isLoading, setIsLoading] = useState(false)
  const form = useRef<HTMLFormElement | null>(null)

  const handleClick = useCallback(
    () => form.current?.checkValidity() && setIsLoading(true),
    [isLoading]
  )

  useEffect(() => {
    setIsLoading(false)
  }, [actionData])

  return (
    <div class={styles.container}>
      <div class={`container ${styles.formEl}`}>
        <div>NoxeTrade</div>
        <h3>Welcome back!</h3>
        <Form method="POST" ref={form}>
          <input
            class={actionData?.error?.code && styles.error}
            type="email"
            name="email"
            placeholder="Email"
            required
          />
          <div>
            <input
              class={actionData?.error?.code && styles.error}
              type="password"
              name="password"
              placeholder="Password"
              required
            />
            <p>{actionData?.error?.code}</p>
          </div>
          <button onClick={handleClick}>Log in</button>
        </Form>
        <p>
          don't have an account?{' '}
          <Link to="/signup" replace>
            Create account.
          </Link>
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
      <Login />
    </Authenticate>
  )
}

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData()
  const email = formData.get('email') as string
  const password = formData.get('password') as string

  try {
    await signInWithEmailAndPassword(auth, email, password)
  } catch (e) {
    let error = e as FirebaseError
    let code = error.code.replace('auth/', '').replace(/-/g, ' ')
    return { error: { code } }
  }
  return redirect('/home')
}
