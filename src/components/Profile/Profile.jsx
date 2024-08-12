import css from "./Profile.module.css"
import Options from "../Options/Options"
export default function Profile({
    stats: { followers, views, likes } },
) {
    return (
        <div className={css.container}>
            <div className={css.Bloc}>
                <h1 className={css.title}>Sip Happens Café</h1>
                <p className={css.itemTextTag}>Please leave your feedback about our service by selecting one of the options below.</p>
            </div>
            <Options />
            <ul className={css.list}>
                <li className={css.item}>
                    <span className={css.itemText}>Followers</span>
                    <span className={css.itemTextdata}> <b>{followers}</b> </span>
                </li>
                <li className={css.item}>
                    <span className={css.itemText}>Views</span>
                    <span className={css.itemTextdata}><b>{views}</b></span>
                </li>
                <li className={css.item}>
                    <span className={css.itemText}>Likes</span>
                    <span className={css.itemTextdata} ><b>{likes}</b></span>
                </li >
            </ul>
        </div>
    );
}

