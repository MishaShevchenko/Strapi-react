import { useGlobalContext } from "./Сontext";
import sublinks from "./data";

const NavLinks = () => {
  const { setPageId } = useGlobalContext();
  return (
    <div className="nav-links">
      {sublinks.map((item) => {
        const { pageId, page } = item;

        return (
          <button
            key={pageId}
            className="nav-link"
            onMouseEnter={() => {
              setPageId(pageId);
            }}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};
export default NavLinks;
