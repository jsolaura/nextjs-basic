import styles from "@/styles/movie-common-list.module.css";
import {ReactNode} from "react";
import Link from "next/link";

interface ICardProps {
    id?: number | string;
    keyId: string;
    src: string | null | undefined;
    title: string;
    subTitle: string;
    children?: ReactNode;
    alt?: string;
}

export default function MovieListCard({ id, keyId, title, subTitle, children, src, alt }: ICardProps) {
    const Content = () => (
        <>
            <img src={src ? src : '/images/not-found.jpg'} alt={alt ? alt : subTitle}/>
            <h5>{title}</h5>
        </>
    )
    return (
        <div key={`${keyId}-${title}`} className={`${styles.creditList} ${children ? styles.pHight : ''}`}>
            {id ?
                <Link prefetch href={`/movies/${id}`}>
                    <Content />
                </Link>
                : <Content />
            }
            <p>{subTitle}</p>
            {children && children}
        </div>
    );
 };
