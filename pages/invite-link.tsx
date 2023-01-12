import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import InviteCard from "../components/inviteCard/inviteCard";
import Main from "../layout/main/main";
import Meta from "../templates/meta";
import styles from "../components/inviteCard/inviteCard.module.scss";
import MenuBar from "../components/menubar/menubar";
import Spiral from "../public/icons/spiral";

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
        <div className={styles.top}>
          <Icon icon="material-symbols:search" className="text-3xl" />
          <input
            className={styles.put}
            type="text"
            placeholder="Name,Email,Username"
          />
        </div>
        <hr className={styles.hr} />
        <InviteCard
          heading="Unique group link is ready"
          text=" Share it with your travel buddies so that you can plan everything
          together"
          rightComponent={<Icon icon="radix-icons:copy" className="text-3xl" />}
          leftComponent={
            <Icon icon="mdi:share-variant-outline" className="text-3xl" />
          }
        />
        <div className={styles.buddy}>
          <Icon icon="material-symbols:person-2-outline" className="text-2xl" />
          <p>Travel Buddies</p>
        </div>

        <div className={styles.list}>
          <div className={styles.admin}>
            <p className={styles.name}>MK</p>
            <div>
              <p>Maria</p>
              <p className={styles.mail}>@mariatheexplorer</p>
            </div>

            <p>Admin</p>
          </div>
          <div className={styles.admin}>
            <p className={styles.name2}>SJ</p>
            <div>
              <p>Sarah</p>
              <p className={styles.mail}>@sarahtheexplorer</p>
            </div>
            <div>
              <p>Admin</p>
            </div>
          </div>

          <div className={styles.spiral}>
            {Spiral}

            <p>Traveling together is a real fun</p>
          </div>
        </div>

        <div className="-mx-[1.5em] absolute bottom-0 w-full">
          <MenuBar />
        </div>
      </Main>
    </motion.div>
  );
};

export default InviteLink;
