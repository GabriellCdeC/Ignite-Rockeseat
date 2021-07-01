import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import styles from './style.module.scss'
import { signIn, useSession, signOut } from 'next-auth/client'

export function SingInButton () {
    const [session] = useSession()
        
    return session ? (
        <button type="button" className={styles.singInButton} onClick={() => signOut()}>
            <FaGithub color="#04d361" />
            {session.user.name}
            <FiX color="#737380" className={styles.closeIcon} />
        </button>

        ) : (
                <button type="button" className={styles.singInButton} onClick={() => signIn('github')} > 
                    <FaGithub color="#eba417" />
                    Sing in with GitHub
                </button>
            )
}