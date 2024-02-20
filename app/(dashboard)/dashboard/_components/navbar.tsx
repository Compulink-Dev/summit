"use client";
import { usePathname } from "next/navigation";
import styles from "./navbar.module.css";
import {
    MdNotifications,
    MdOutlineChat,
    MdPublic,
    MdSearch,
} from "react-icons/md";
import { useState } from "react";

const Navbar = () => {
    const pathname = usePathname();
    const [showSearch, setShoeSearch] = useState(true)

    return (
        <div className={styles.container}>
            <div className={` text-xs ${styles.title}`}>{pathname.split("/").pop()}</div>
            <div className={styles.menu}>
                <div className={`${styles.search}`}>
                    <MdSearch className="text-slate-400" />
                    <input type="text" placeholder="Search..." className={styles.input} />
                </div>
                <div className={styles.icons}>
                    <MdOutlineChat size={20} />
                    <MdNotifications size={20} />
                    <MdPublic size={20} />
                </div>
            </div>
        </div>
    );
};

export default Navbar;