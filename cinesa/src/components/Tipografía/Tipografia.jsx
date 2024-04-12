import styles from "./Tipografia.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const Tipografia = ({
  color,
  text,
  isTitleNavbar,
  isTitleSwiper,
  isTitleSection,
  isTitleMovie,
  isTitleBanner,
  isTitleCard,
  isBodyCard,
  isBodySection,
  isTitleBodySection,
  isFooterLinks

}) => {
  const classNames = cx({
    titleNavbar: isTitleNavbar,
    titleSwiper: isTitleSwiper,
    titleSection: isTitleSection,
    titleMovie: isTitleMovie,
    titleBanner: isTitleBanner,
    titleCard: isTitleCard,
    bodyCard: isBodyCard,
    bodySection: isBodySection,
    titleBodySection: isTitleBodySection,
    footerLinks: isFooterLinks

  });
  return (
    <p className={classNames} style={{ color: `var(${color})` }}>
      {text}
    </p>
  );
};

export default Tipografia;
