import Swal from 'sweetalert2';
import { useMutation } from '@apollo/client';
import { ADD_FRIEND } from '../../utils/mutations';

function FriendButton({ currentProfile }) {
  const [addFriend] = useMutation(ADD_FRIEND);
  const handleClickCurrent = async userId => {
    console.log(userId);
    try {
      const mutationResponse = await addFriend({
        variables: { id: userId },
      });
      if (mutationResponse) {
        Swal.fire({
          icon: 'success',
          title: 'Friend added succesfully!',
        });
      }
    } catch (e) {
      console.error(e);
      Swal.fire({
        icon: 'error',
        title: 'Something went wrong',
        text: e.text,
      });
    }
  };
  return (
    <button
      onClick={() => handleClickCurrent(currentProfile.userId)}
      className="connect bg-blue-400 rounded-full text-sm font-semibold text-gray-700 bottom-0 absolute max-w-prose"
    >
      Add to friends
    </button>
  );
}

export default FriendButton;
