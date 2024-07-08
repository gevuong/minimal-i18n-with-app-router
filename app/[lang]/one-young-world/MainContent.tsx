import type {
  OywNavbarTexts,
  OywSection,
} from '@/app/dictionaries/types/oneYoungWorld';
import { TeamLeadsType } from '@/app/dictionaries/types/teamLeads';
import ExportedImage from 'next-image-export-optimizer';
import { useState } from 'react';
import Navbar from './Navbar';
import OneYoungWorld from './OneYoungWorld';
import TeamLeads from './TeamLeads/TeamLeads';

interface Props {
  oyw: OywSection;
  navbarTexts: OywNavbarTexts;
  teamLeads: TeamLeadsType;
}

const MainContent = ({ teamLeads, oyw, navbarTexts }: Props) => {
  const [showTeamLeads, setShowTeamLeads] = useState(false);

  return (
    <>
      {/* image is only shown under 'One Young World' tab in non-mobile view */}
      {!showTeamLeads && (
        <ExportedImage
          className="hidden md:absolute md:block md:h-full md:w-full md:rotate-180 md:object-cover md:opacity-30"
          src={oyw.bgImage}
          alt={oyw.altText}
          priority
        />
      )}

      <Navbar
        showTeamLeads={showTeamLeads}
        setShowTeamLeads={setShowTeamLeads}
        navbarTexts={navbarTexts}
      />

      <main>
        {showTeamLeads ? (
          <TeamLeads {...teamLeads} />
        ) : (
          <OneYoungWorld {...oyw} />
        )}
      </main>
    </>
  );
};

export default MainContent;
