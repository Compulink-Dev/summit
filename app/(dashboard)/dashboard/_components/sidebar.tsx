import Image from "next/image";
import styles from "./sidebar.module.css";
import {
    MdDashboard,
    MdInfo,
    MdEvent,
    MdAnalytics,
    MdAttachMoney,
    MdOutlineSettings,
    MdHelpCenter,
    MdLogout,
    MdPeople,
    MdOutlineSpeaker
} from "react-icons/md";
import { FaHandshake } from 'react-icons/fa6'
// import { auth, signOut } from "@/app/auth";
import MenuLink from "./menulink";

const menuItems = [
    {
        title: "Pages",
        list: [
            {
                title: "Dashboard",
                path: "/dashboard",
                icon: <MdDashboard />,
            },
            {
                title: "About",
                path: "/dashboard/about",
                icon: <MdInfo />,
            },
            {
                title: "Events",
                path: "/dashboard/events",
                icon: <MdEvent />,
            },
            {
                title: "Speakers",
                path: "/dashboard/speakers",
                icon: <MdOutlineSpeaker />,
            },
            {
                title: "Sponsors",
                path: "/dashboard/sponsors",
                icon: <FaHandshake />,
            },

        ],
    },
    {
        title: "Analytics",
        list: [
            {
                title: "Reports",
                path: "/dashboard/reports",
                icon: <MdAnalytics />,
            },

            {
                title: "Revenue",
                path: "/dashboard/revenue",
                icon: <MdAttachMoney />,
            },
            {
                title: "Visitors",
                path: "/dashboard/visitors",
                icon: <MdPeople />,
            },
        ],
    },
    {
        title: "User",
        list: [
            {
                title: "Settings",
                path: "/dashboard/settings",
                icon: <MdOutlineSettings />,
            },
            {
                title: "Help",
                path: "/dashboard/help",
                icon: <MdHelpCenter />,
            },
        ],
    },
];

const Sidebar = async () => {
    //   const { user } = await auth();
    return (
        <div className={styles.container}>
            <div className={styles.user}>
                <Image
                    className={styles.userImage}
                    src={"/favicon.png"}
                    alt=""
                    width="40"
                    height="40"
                />
                <div className={styles.userDetail}>
                    <span className={styles.username}>{"Lloyd"}</span>
                    <span className={styles.userTitle}>Administrator</span>
                </div>
            </div>
            <ul className={styles.list}>
                {menuItems.map((cat) => (
                    <li key={cat.title}>
                        <span className={styles.cat}>{cat.title}</span>
                        {cat.list.map((item) => (
                            <MenuLink item={item} key={item.title} />
                        ))}
                    </li>
                ))}
            </ul>
            <form
                action={async () => {
                    "use server";
                    //   await signOut();
                }}
            >
                <button className={styles.logout}>
                    <MdLogout />
                    Logout
                </button>
            </form>
        </div>
    );
};

export default Sidebar;