import { Header } from "./components/Header"
import { Post } from "./Post"

import './global.css'

export function App() {
  return (
    <div>
        <Header />
        <Post author="Fredson Chaves" content="loren"/>
        <Post author="Ana Luiza" content="Novo post"/>
    </div>
  )
}