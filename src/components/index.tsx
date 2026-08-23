import {Theme} from '@astryxdesign/core/theme';
import {VStack} from '@astryxdesign/core/Layout';
import {fromsukongTheme} from '../themes/fromsukong';
import ProfileHeader from './ProfileHeader';
import LinkSection from './LinkSection';
import LinkCard from './LinkCard';
import ContactCard from './ContactCard';
import SocialLinks from './SocialLinks';
import {ROAD85, LEARN_MORE} from './data';

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
            highlight
            eventName={ROAD85.eventName}
          />
          <ContactCard />
          <LinkCard {...LEARN_MORE} target="_self" />
          <SocialLinks />
        </VStack>
      </VStack>
    </Theme>
  );
}
