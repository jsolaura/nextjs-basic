"use client";
import styles from "@/styles/movie.module.css";
import Link from "next/link";
import React from "react";
import {usePathname} from "next/navigation";

const categories: string[] = ['videos', 'credits', 'similar'];

export default function MovieFilterCategory({ id }: { id: string }) {
    const pathname = usePathname();
    return (
        <div className={styles.categoriesContainer}>
            {categories.map(category => {
                const path = category === 'videos' ? `/movies/${id}` : `/movies/${id}/${category}`;
                return <Link prefetch key={category} href={path} className={pathname === path ? styles.active : ''}>{category}</Link>
            })}
        </div>
    );
 };
