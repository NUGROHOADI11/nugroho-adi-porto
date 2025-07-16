import React from "react";
import { SECTION_IDS, ANIMATION_CLASSES } from "../../lib/constant";
import CustomLink from "./CustomLink";

interface FooterSectionProps {
  onScrollClick: (id: string) => void;
  idToScroll?: string;
}

export const LastSection: React.FC<FooterSectionProps> = ({
  onScrollClick,
  idToScroll = SECTION_IDS.HERO,
}) => {
  return (
    <section
      id={SECTION_IDS.LAST}
      className="h-screen flex items-center justify-center px-4 text-center"
    >
      <div className={`overflow-hidden ${ANIMATION_CLASSES.SCROLL_ANIMATE}`}>
        <CustomLink
          href={`#${SECTION_IDS.HERO}`}
          label={"Back to Top"}
          size="xxxl"
          onClick={(e) => {
            e.preventDefault();
            onScrollClick(idToScroll);
          }}
        />
      </div>
    </section>
  );
};
