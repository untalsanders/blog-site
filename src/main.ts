import './app.css'
import { mount } from 'svelte'
import App from './App.svelte'

const root = document.getElementById('app')
const app = mount(App, {
    target: root!,
})

export default app
