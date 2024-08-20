import React from "react";
import ListIcon from '@mui/icons-material/List';
import AddTaskIcon from '@mui/icons-material/AddTask';
import NavItem from "./NavItem/NavItem";

interface NavItemType {
    id: number;
    label: string;
    link: string;
    icon: React.ReactNode;
}

const NavList = () => {
    const navItems: NavItemType[] = [
        {id: 1, label: "タスク一覧", link: "/", icon: <ListIcon className="size-5"/>},
        {id: 2, label: "タスク追加", link: "/add", icon: <AddTaskIcon className="size-5" />}
    ]
  return (
    <div className="flex ">
        {navItems.map((navItem) => (
            <NavItem key={navItem.id} label={navItem.label} link={navItem.link} icon={navItem.icon}/>
        ))}
    </div>
  )
}

export default NavList