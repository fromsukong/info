import {Theme} from '@astryxdesign/core/theme';
import {VStack} from '@astryxdesign/core/Layout';
import {fromsukongTheme} from '../themes/fromsukong';
import ProfileHeader from './ProfileHeader';
import LinkSection from './LinkSection';
import FeaturedCard from './FeaturedCard';
import LinkCard from './LinkCard';
import ContactCard from './ContactCard';
import SocialLinks from './SocialLinks';
import {WORK_LINK, HIRE_CARDS} from './data';

export default function LinkBioPage() {
  return (
    <Theme theme={fromsukongTheme} mode="dark">
      <VStack className="page">
        <ProfileHeader />
        <VStack className="section-gap">
          <LinkSection title="Working on">
            <FeaturedCard {...WORK_LINK} />
          </LinkSection>
          <LinkSection title="Hire me" offset>
            {HIRE_CARDS.map(({icon, iconAlt, label, sub, href}) => (
              <LinkCard key={label} icon={icon} iconAlt={iconAlt} label={label} sub={sub} href={href} />
            ))}
            <ContactCard />
          </LinkSection>
          <SocialLinks />
        </VStack>
      </VStack>
    </Theme>
  );
}
