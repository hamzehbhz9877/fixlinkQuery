import { FC } from 'react';

interface Props {
  text: string;
}

const NotificationHtml: FC<Props> = ({ text }) => {
  return (
    <div
      className="html-text"
      dangerouslySetInnerHTML={{ __html: text }}
    />
  );
};

export default NotificationHtml;
