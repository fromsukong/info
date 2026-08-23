import {Theme} from '@astryxdesign/core/theme';
import {VStack} from '@astryxdesign/core/Layout';
import {fromsukongTheme} from '../themes/fromsukong';
import ProfileHeader from './ProfileHeader';
import LinkSection from './LinkSection';
import LinkCard from './LinkCard';
import ContactCard from './ContactCard';
import SocialLinks from './SocialLinks';
import {ROAD85} from './data';

export default function LinkBioPage() {
  return (
    <Theme theme={fromsukongTheme} mode="dark">
      <ProfileHeader />
      <VStack className="page">
        <VStack className="section-gap">
          <LinkCard
            icon="/assets/road85-icon.png"
            iconAlt="Road to 85kg"
            label={ROAD85.title}
            sub="365-day weight-loss challenge · live tracker"
            href={ROAD85.href}
            target="_self"
            eventName={ROAD85.eventName}
          />
          <ContactCard />
          <SocialLinks />
        </VStack>
      </VStack>
    </Theme>
  );
}
