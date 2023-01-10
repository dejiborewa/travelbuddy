import { Icon } from "@iconify/react";
import Like from "../components/actions/like";
import Travel from "../components/travel/travel";
import { visit } from "../utils/contants";
import styles from "../components/travel/travel.module.scss";
import Loader from "../public/icons/loader";
import { useState } from "react";

//
const trip1 = () => {
  const [modal, setModal] = useState(false);

  function change() {
    setModal((prev) => {
      return !prev;
    });
  }
  return (
    <div className={styles.base}>
      <div className="h-[220px] w-full mx-auto border-solid rounded-b-[20px] shadow-md border border-transparent cursor-pointer">
        <div className="flex  ">
          <Icon icon="uil:times" className="text-2xl  cursor-pointer" />
          <span className={styles.heading}>
            <h1>Time to select</h1>
          </span>
        </div>

        <div className={styles.tophead}>
          <h1>Trip to New York with friends</h1>
          <div className={styles.like}>
            <Like color="bg-darkGrey" />
            <Like color="bg-darkGrey" />
            <Like color="bg-darkGrey" />
          </div>
          <span className={styles.tophead2}>
            <p>Cast 3 votes to see group's top picks</p>
          </span>
        </div>
      </div>

      <div className={styles.cols}>
        <div className="grid grid-rows-3 gap-x-4 gap-y-6">
          {visit.map((data, index) => (
            <div key={index} className="min-w-[45%]">
              <Travel travelData={data} />
            </div>
          ))}
        </div>
      </div>

      <button onClick={change} className={styles.btn2}>
        Submit my answer
      </button>
      {true ? (
        <div className={modal ? styles.bottom : styles.bottom2}>
          <hr className={styles.hr} />
          <p className={styles.load2}>Voting in progress</p>
          <span className={styles.load}>{Loader}</span>
        </div>
      ) : (
        <div className={modal ? styles.bottom : styles.bottom2}>
          <hr className={styles.hr} />
          <p className={styles.load2}>Voting Successful</p>
          <span className={styles.load3}>
            <Icon icon="akar-icons:thumbs-up" width="70" />
          </span>
          <button className={styles.btn3}>Back to home</button>
        </div>
      )}
    </div>
  );
};

export default trip1;
