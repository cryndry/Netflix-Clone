import s from './FooterLinks.module.css'

const FooterLinks = () => {
    const links = {
        "Sesli Betimleme": "https://netflix.com/browse/audio-description",
        "Yardım Merkezi": "https://help.netflix.com/",
        "Hediye Kartları": "https://netflix.com/redeem",
        "Medya Merkezi": "https://media.netflix.com/",
        "Yatırımcı İlişkileri": "http://ir.netflix.com/",
        "İş İmkanları": "https://jobs.netflix.com/",
        "Kullanım Koşulları": "https://help.netflix.com/legal/termsofuse",
        "Gizlilik": "https://help.netflix.com/legal/privacy",
        "Yasal Hükümler": "https://help.netflix.com/legal/notices",
        "Çerez Tercihleri": "https://netflix.com/Cookies",
        "Kurumsal Bilgiler": "https://help.netflix.com/legal/corpinfo",
        "Bize Ulaşın": "https://help.netflix.com/contactus"
    }

    return (
        <ul className={s.FooterLinkItems}>
            { Object.keys(links).map(link => (
                <li className={s.FooterLinkWrapper} key={links[link]}>
                    <a className={s.FooterLinkItem} href={links[link]}> {link} </a>
                </li>
            )) }
        </ul>
    )
}

export default FooterLinks