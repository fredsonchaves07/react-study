import styles from './Post.module.css'

export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img 
                        className={styles.avatar}
                        src="https://github.com/fredsonchaves07.png" 
                    />
                    <div className={styles.authorInfo}>
                        <strong>Fredson Chaves</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title="11 de maio as 08:13h" dateTime="2022-05-11 08:13:30">Publicado há 1h</time>
            </header>
            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
                <p>👉<a href="">jane.design/doctorcare</a></p>              
                s<p><a href="">#novoprojeto #nlw #rocketseat</a></p>
            </div>
        </article>
    )
}