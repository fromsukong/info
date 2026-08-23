import {Theme} from '@astryxdesign/core/theme';
import {VStack} from '@astryxdesign/core/Layout';
import {fromsukongTheme} from '../themes/fromsukong';
import ProfileHeader from './ProfileHeader';
import LinkSection from './LinkSection';
import LinkCard from './LinkCard';
import ContactCard from './ContactCard';
import SocialLinks from './SocialLinks';
import {UserRound} from 'lucide-react';
import {ROAD85, LEARN_MORE} from './data';

export default function LinkBioPage() {
  return (
    <Theme theme={fromsukongTheme} mode="light">
      <ProfileHeader />
      <VStack className="page">
        <VStack className="section-gap">
          {/* Primary CTA — highlighted Road to 85kg card */}
          <LinkCard
            icon="/assets/road85-icon.png"
            iconAlt="Road to 85kg"
            label={ROAD85.title}
            sub={ROAD85.subtitle}
            href={ROAD85.href}
            target="_self"
            highlight
            eventName={ROAD85.eventName}
          />
          <LinkCard {...LEARN_MORE} target="_self" iconNode={<UserRound size={48} className="link-card-glyph" aria-hidden="true" />} />
          <ContactCard />
          <SocialLinks />
        </VStack>
      </VStack>
    </Theme>
  );
}
