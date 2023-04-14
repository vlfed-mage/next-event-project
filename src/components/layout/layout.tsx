import styles from '@/styles/home.module.css';

import { ChildrenProps } from '@/global/types';
import MainHeader from '@/components/layout/main-header';

const Layout = ({ children }: ChildrenProps) => {
    return (
        <>
            <MainHeader />
            <main className={styles.main}>{children}</main>
        </>
    );
};

export default Layout;
