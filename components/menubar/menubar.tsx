import { useRouter } from "next/router";
import Menu from "../../public/icons/menu";
import Search from "../../public/icons/search";
import styles from "./menubar.module.scss";

const MenuBar = () => {
  const router = useRouter();
  const isSearch = router.pathname.includes("search");

  const handleRouting = () => {
    return router.pathname === "/search"
      ? router.back()
      : router.push(`${router.pathname}/`);
  };
  return (
    <div className="shadow-lightgrey p-4 flex items-center justify-center gap-40 z-10">
      <div
        className={`${!isSearch ? `${styles.active}` : ""} cursor-pointer`}
        onClick={handleRouting}
      >
        {Menu}
      </div>
      <div
        className={`${isSearch ? `${styles.active}` : ""} cursor-pointer`}
        onClick={() => router.push("/search")}
      >
        {Search}
      </div>
    </div>
  );
};

export default MenuBar;
