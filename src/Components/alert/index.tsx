import {useEffect, useRef, useState} from 'preact/compat';
import {alert} from 'Context/alert';

const Alert = ({
  id,
  message,
  type,
  remove,
  timeout,
  showProgress,
}: alert & {
  remove: (id: string) => void;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const animationAlert = useRef<any>(0);
  const alert = useRef<any>(0);
  const animationDuration = useRef<any>(null);

  const [state, setState] = useState(false);

  useEffect(() => {
    if (ref.current) {
      ref.current.style.animationDuration = timeout + 's';
      animationDuration.current = parseInt(
        getComputedStyle(ref.current).animationDuration
      );
    }
    handleRemove(timeout);
    return () => handleRemoveAlert();
  }, []);

  const handleRemoveAlertFocusEnd = () => {
    alert.current = setTimeout(() => {
      remove(id);
    }, animationDuration.current * 100);
  };

  const handleRemoveAlert = () => {
    clearInterval(animationAlert.current);
    clearInterval(alert.current);
  };

  const handleRemove = (alertAnimationTimer: number) => {
    animationAlert.current = setTimeout(() => {
      setState(true);
      handleRemoveAlertFocusEnd();
    }, alertAnimationTimer * 1000);
  };

  const handleDelete = () => {
    setState(true);
    handleRemoveAlertFocusEnd();
  };

  return (
    <div
      className={`alert--show ${state && 'alert--hide'}`}
      onClick={handleDelete}
    >
      <div className={`alert__wrapper alert__wrapper--${type}`}>
        <div className={`alert-${id}`}>
          <p>{message}</p>
          {showProgress && <div className="alert__animate" ref={ref} />}
        </div>
      </div>
    </div>
  );
};

export default Alert;
