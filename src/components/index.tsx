import {Theme} from '@astryxdesign/core/theme';
import {VStack} from '@astryxdesign/core/Layout';
import {Globe} from 'lucide-react';
import {fromsukongTheme} from '../themes/fromsukong';
import ProfileHeader from './ProfileHeader';
import LinkSection from './LinkSection';
import FeaturedCard from './FeaturedCard';
import LinkCard from './LinkCard';
import ContactCard from './ContactCard';
import SocialLinks from './SocialLinks';
import {WORK_LINK, HIRE_CARDS, LEARN_MORE} from './data';

export default function LinkBioPage() {
  return (
    <Theme theme={fromsukongTheme} mode="dark">
      <VStack className="page">
        <ProfileHeader />
        <VStack className="section-gap">
          <LinkSection title="Working on">
            <FeaturedCard {...WORK_LINK} />
          </LinkSection>
          <LinkSection title="Contact me" offset>
            {HIRE_CARDS.map(({icon, iconAlt, label, sub, href}) => (
              <LinkCard key={label} icon={icon} iconAlt={iconAlt} label={label} sub={sub} href={href} />
            ))}
            <LinkCard
              label={LEARN_MORE.label}
              href={LEARN_MORE.href}
              iconNode={<Globe size={48} className="link-card-contact-icon" />}
            />
            <ContactCard />
          </LinkSection>
          <SocialLinks />
        </VStack>
      </VStack>
    </Theme>
  );
}
