import {useCallback, useState} from 'react';
import PanelSidebar from "Layout/common/sideBar";
import Header from "Layout/main/header";
import Footer from "Layout/main/footer";
import {MainItems} from "Layout/main/links";

const MainLayout = (props: any) => {

    const [open, setOpen] = useState(false);

    const handleOpen = useCallback(() => {
        setOpen(true)
    }, []);

    const handleClose = () => {
        setOpen(false)
    };



    return (
        <>
            <header className="header">
                    <Header open={handleOpen}/>
            </header>
            <main className="main_container">
                <PanelSidebar items={MainItems} open={open}
                              close={handleClose} name="main"/>
                {props.children}
            </main>
            <Footer/>
            <div className="main_bg"/>
        </>
    );
};

export default MainLayout;