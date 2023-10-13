import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { MovieData } from '../movieData.ts';
import styles from "./MoviePosterModal.module.css";

interface Props {
    movieData: MovieData;
    setVisibleModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MoviePosterModal({ movieData, setVisibleModal }: Props) {
    return (
        <Portal>
            <div className={styles.dim} />
            <div className={styles.container}>
                <div onClick={() => setVisibleModal(false)}>x</div>
                {movieData.title}
            </div>
        </Portal>
    )
}


interface PortalProps {
    portalId?: string;
    children?: React.ReactNode;
}

const Portal = ({ portalId = 'portal', children }: PortalProps) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    return mounted ? createPortal(children, document.getElementById(portalId) as HTMLElement) : null;
};
