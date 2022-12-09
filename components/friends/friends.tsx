import Image from 'next/image';
import { friendList } from '../../utils/contants';

const Friends = () => {
  return (
    <div className="flex justify-center my-4">
      {friendList.map((friend, index) => (
        <figure key={index}>
          <Image
            src={friend.image}
            alt={friend.label}
            className="block rounded-full"
          />
        </figure>
      ))}
    </div>
  );
};

export default Friends;
