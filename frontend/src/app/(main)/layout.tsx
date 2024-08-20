import HeaderMenu from "@/components/HeaderMenu/HeaderMenu";

const MainLayout = ({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <div className="flex flex-col h-screen">
            <HeaderMenu />
            <main className="h-screen">{children}</main>
        </div>
    )
};

export default MainLayout;