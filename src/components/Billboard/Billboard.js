import BillboardPhoto from '../../assets/billboard.webp'
import BillboardTitle from '../../assets/billboard-title.webp'
import s from './Billboard.module.css'

const Billboard = () => {
    return (
        <div className={s.Billboard}>
            <div className={s.BillboardContainer}>
                <img className={s.BillboardPhoto} src={BillboardPhoto} alt='' />
                <div className={s.BillboardInfo}>
                    <img src={BillboardTitle} alt='' />
                    <p>Çeşitli disiplinlerde çalışan en yenilikçi tasarımcıların zihnine adım atın ve tasarımın günlük hayatın her yönünü nasıl etkilediğini öğrenin.</p>
                    <div className={s.BillboardButtons}>
                        <a href='/'>
                            <button className={s.BillboardPlayLink}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="Hawkins-Icon Hawkins-Icon-Standard"><path d="M4 2.69127C4 1.93067 4.81547 1.44851 5.48192 1.81506L22.4069 11.1238C23.0977 11.5037 23.0977 12.4963 22.4069 12.8762L5.48192 22.1849C4.81546 22.5515 4 22.0693 4 21.3087V2.69127Z" fill="currentColor"></path></svg>
                                <span>Oynat</span>
                            </button>
                        </a>
                        <button className={s.BillboardInfoButton}>
                            <svg width="24" height="24" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M0 16C0 7.16429 7.16429 0 16 0C24.8357 0 32 7.16429 32 16C32 24.8357 24.8357 32 16 32C7.16429 32 0 24.8357 0 16ZM2.71429 16C2.71429 23.3357 8.66429 29.2857 16 29.2857C23.3357 29.2857 29.2857 23.3357 29.2857 16C29.2857 8.66429 23.3357 2.71429 16 2.71429C8.66429 2.71429 2.71429 8.66429 2.71429 16ZM14.7878 10.9265C14.4663 10.605 14.2857 10.1689 14.2857 9.71429C14.2857 9.25963 14.4663 8.82359 14.7878 8.5021C15.1093 8.18061 15.5453 8 16 8C16.4547 8 16.8907 8.18061 17.2122 8.5021C17.5337 8.82359 17.7143 9.25963 17.7143 9.71429C17.7143 10.1689 17.5337 10.605 17.2122 10.9265C16.8907 11.248 16.4547 11.4286 16 11.4286C15.5453 11.4286 15.1093 11.248 14.7878 10.9265ZM14.8571 14C14.8571 13.8429 14.9857 13.7143 15.1429 13.7143H16.8571C17.0143 13.7143 17.1429 13.8429 17.1429 14V23.7143C17.1429 23.8714 17.0143 24 16.8571 24H15.1429C14.9857 24 14.8571 23.8714 14.8571 23.7143V14Z" fill="white" /></svg>
                            <span>Daha Fazla Bilgi</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Billboard;