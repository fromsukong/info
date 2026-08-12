import {Avatar} from '@astryxdesign/core/Avatar';
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
            <Avatar
              src={PROFILE.avatar}
              name={PROFILE.name}
              alt={`${PROFILE.name} avatar`}
              size={96}
              tooltip={false}
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
