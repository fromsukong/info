import {Theme} from '@astryxdesign/core/theme';
import {VStack} from '@astryxdesign/core/Layout';
import {fromsukongTheme} from '../themes/fromsukong';
import ProfileHeader from './ProfileHeader';
import LinkSection from './LinkSection';
import FeaturedCard from './FeaturedCard';
import LinkCard from './LinkCard';
import ContactCard from './ContactCard';
import SocialLinks from './SocialLinks';
import {FASTWORK, CONTACT_CARDS, LEARN_MORE} from './data';

export default function LinkBioPage() {
  return (
    <Theme theme={fromsukongTheme} mode="dark">
      <ProfileHeader />
      <VStack className="page">
        <VStack className="section-gap">
          <LinkSection title="Hire me">
            <FeaturedCard {...FASTWORK} />
          </LinkSection>
          <LinkSection title="Contact me">
            {CONTACT_CARDS.map(({icon, iconAlt, label, sub, href, eventName, target}) => (
              <LinkCard key={label} icon={icon} iconAlt={iconAlt} label={label} sub={sub} href={href} eventName={eventName} target={target} />
            ))}
            <LinkCard
              label={LEARN_MORE.label}
              sub={LEARN_MORE.sub}
              href={LEARN_MORE.href}
              icon={LEARN_MORE.icon}
              iconAlt={LEARN_MORE.iconAlt}
              target="_self"
              eventName={LEARN_MORE.eventName}
            />
            <ContactCard />
          </LinkSection>
          <SocialLinks />
        </VStack>
      </VStack>
    </Theme>
  );
}
