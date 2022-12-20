import { FaFacebookSquare, FaWhatsappSquare, FaInstagramSquare} from "react-icons/fa";

import styles from "./Footer.module.css";
function Footer() {

    const date = new Date();

    return (
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li className={styles.facebook}><FaFacebookSquare/></li>
                <li className={styles.whatsapp}><FaWhatsappSquare/></li>
                <li className={styles.instagram}><FaInstagramSquare/></li>
            </ul>
            <p className={styles.copy_right}>
                <span>Costs </span>
                &copy;{date.getFullYear()}
            </p>
        </footer>
    )
}

export default Footer