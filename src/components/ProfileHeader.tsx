import {Center} from '@astryxdesign/core/Center';
import {Heading} from '@astryxdesign/core/Heading';
import {VStack} from '@astryxdesign/core/Layout';
import {PROFILE} from './data';

export default function ProfileHeader() {
  return (
    <header className="profile-header">
      <Center>
        <VStack hAlign="center" gap={4}>
          <div className="avatar-wrap">
            <div className="avatar-glow" aria-hidden="true" />
            <img
              className="profile-banner"
              src={PROFILE.avatar}
              alt={`${PROFILE.name} avatar`}
              width={400}
              height={400}
            />
          </div>
          <Heading level={1} className="profile-title" justify="center">
            {PROFILE.name}
          </Heading>
        </VStack>
      </Center>
    </header>
  );
}
