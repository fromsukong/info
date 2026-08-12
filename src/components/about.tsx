import {Theme} from '@astryxdesign/core/theme';
import {VStack} from '@astryxdesign/core/Layout';
import {fromsukongTheme} from '../themes/fromsukong';
import ProfileHeader from './ProfileHeader';
import InfoSection from './InfoSection';

export default function AboutPage() {
  return (
    <Theme theme={fromsukongTheme} mode="dark">
      <ProfileHeader />
      <VStack className="page">
        <VStack className="section-gap">
          <InfoSection />
        </VStack>
      </VStack>
    </Theme>
  );
}
