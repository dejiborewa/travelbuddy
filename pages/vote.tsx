import { Icon } from "@iconify/react";
import { useState } from "react";
import { useRouter } from "next/router";
import Like from "../components/actions/like";
import Travel from "../components/travel/travel";
import { visit } from "../utils/contants";
import styles from "../components/travel/travel.module.scss";
import Loader from "../public/icons/loader";
import Main from "../layout/main/main";
import Button from "../components/buttons/button";

const Vote = () => {
  const [modal, setModal] = useState(false);
  const isVoting = true;

  const router = useRouter();

  return (
    <>
      <Main>
        <div className="-my-2 h-[30%] w-auto -mx-[1.5em] px-[1.5em] border-solid rounded-b-[20px] shadow-md border border-transparent cursor-pointer">
          <div className="flex items-center gap-2">
            <Icon icon="uil:times" className="text-3xl cursor-pointer" />
            <span className="text-[16px]">Time to select</span>
          </div>

          <div>
            <h1 className="text-[16px] mx-auto w-max my-3">
              Trip to New York with friends
            </h1>
            <div className={styles.like}>
              <Like color="bg-darkGrey" />
              <Like color="bg-darkGrey" />
              <Like color="bg-darkGrey" />
            </div>
            <span className="block italic font-mukta text-sm w-max mx-auto">
              <p>Cast 3 votes to see group's top picks</p>
            </span>
          </div>
        </div>

        <div className="max-h-[70%] overflow-y-scroll my-8">
          <div>
            {visit.map((data, index) => (
              <div key={index} className="mb-6 px-1">
                <Travel travelData={data} />
              </div>
            ))}
          </div>
          <div className="w-full">
            <Button
              type="submit"
              text="Submit my answer"
              onClick={() => setModal(true)}
            />
          </div>
        </div>

        {modal && (
          <div className="bg-[#B5B6B699]/60 absolute w-full h-screen left-0 top-0 bottom-0 right-0">
            <div
              className="h-[50vh] w-full"
              onClick={() => setModal(false)}
            ></div>
            {isVoting ? (
              <div className={styles.bottom}>
                <hr className={styles.hr} />
                <p className={styles.load2}>Voting in progress</p>
                <span className={styles.load}>{Loader}</span>
              </div>
            ) : (
              <div className={styles.bottom}>
                <hr className={styles.hr} />
                <p className={styles.load2}>Voting Successful</p>
                <span className={styles.load3}>
                  <Icon icon="akar-icons:thumbs-up" width="70" />
                </span>
                <button
                  className={styles.btn3}
                  onClick={() => router.push("/home")}
                >
                  Back to home
                </button>
              </div>
            )}
          </div>
        )}
      </Main>
    </>
  );
};

export default Vote;
