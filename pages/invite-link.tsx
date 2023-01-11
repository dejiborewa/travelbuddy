import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import InviteCard from "../components/inviteCard/inviteCard";
import Main from "../layout/main/main";
import Meta from "../templates/meta";

const InviteLink = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -5 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Meta>
        <title>Invite Link | TravelBuddy</title>
      </Meta>
      <Main>
        <div className="flex items-center gap-2">
          <Icon icon="uil:times" className="text-3xl cursor-pointer" />
          <span className="text-[16px]">Invite to trip</span>
        </div>
        <InviteCard
          heading="Create trip invite link"
          text="  Anyone with the link can join the journey and participate in voting
          for itineraries"
          rightComponent={
            <Icon
              icon="material-symbols:add-circle-outline"
              className="text-3xl"
            />
          }
        />
      </Main>
    </motion.div>
  );
};

export default InviteLink;
