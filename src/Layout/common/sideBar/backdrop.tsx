import PortalWrapper from 'Components/portal';
import { FC } from 'react';

interface Props {
  open: boolean;
  closeSidebar: () => void;
}

const backdrop = document.getElementById('backdrop-wrapper') as HTMLDivElement;

const Backdrop: FC<Props> = ({ open, closeSidebar }) => {
  return (
    <PortalWrapper component={backdrop}>
      <div
        className={open ? 'backdrop backdrop--open' : 'backdrop'}
        onClick={closeSidebar}
      />
    </PortalWrapper>
  );
};

export default Backdrop;
