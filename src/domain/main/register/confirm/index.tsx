import { useHistory, useParams } from 'react-router';
import { useMutationQuery } from 'hooks/useMutationQuery';
import { confirmEmail } from 'Services/shortlink';

const ConfirmEmail = () => {
  const { token }: { token: string } = useParams();
  const history = useHistory();

  const confirm = useMutationQuery<null, string>(confirmEmail);

  confirm.restQuery.mutate(token, {
    onSuccess: () => {
      history.replace('/user/login');
    },
  });

  return null;
};

export default ConfirmEmail;
