import { render } from 'preact/compat'
import App from './App'
import "./index.css"

render(<App />, document.getElementById('root') as HTMLDivElement)
