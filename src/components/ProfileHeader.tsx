import {Center} from '@astryxdesign/core/Center';
import {Heading} from '@astryxdesign/core/Heading';
import {PROFILE} from './data';

export default function ProfileHeader() {
  return (
    <header className="profile-header">
      <Center>
        <div className="hero-wrap">
          <img className="hero-img" src={PROFILE.hero} alt={`${PROFILE.name} banner`} width={1152} height={648} />
          <div className="hero-overlay" aria-hidden="true" />
          <div className="hero-text">
            <Heading level={1} className="profile-title">
              {PROFILE.name}
            </Heading>
            <p className="hero-tagline">{PROFILE.tagline}</p>
          </div>
        </div>
      </Center>
    </header>
  );
}
