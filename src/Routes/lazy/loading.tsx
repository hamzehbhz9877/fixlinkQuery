import { FC, useEffect } from 'preact/compat';
import LinearProgress from 'Components/progress';

const AsyncLoading: FC = (): JSX.Element | null => {
  useEffect(() => {
    const progress = LinearProgress();
    progress.start();
    return () => {
      progress.done();
    };
  }, []);
  return null;
};

export default AsyncLoading;
