import  { useCallback, useState } from 'react';
import PanelHeader from 'Layout/panel/common/header';
import PanelSidebar from 'Layout/common/sideBar';

const PanelsLayout = (props: any) => {
  const [open, setOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <header className="panel-header">
        <PanelHeader open={handleOpen} />
      </header>
      <main className="main-panel">
        <div className="panel">
          <PanelSidebar
            items={props.items}
            open={open}
            close={handleClose}
            name="panel"
          />
          {props.children}
        </div>
      </main>
    </>
  );
};

export default PanelsLayout;
