import {Link} from '@astryxdesign/core/Link';
import {Icon} from '@astryxdesign/core/Icon';
import {HStack} from '@astryxdesign/core/Layout';
import {BRAND_ICONS} from './icons';
import {SOCIAL_LINKS} from './data';

export default function SocialLinks() {
  return (
    <nav aria-label="Social media">
      <HStack gap={0.5} hAlign="center" wrap="wrap" className="socials">
        {SOCIAL_LINKS.map(({name, url}) => (
          <Link key={name} href={url} target="_blank" label={name} className="social-link">
            <Icon icon={BRAND_ICONS[name]} size="lg" color="primary" className="social-icon" />
          </Link>
        ))}
      </HStack>
    </nav>
  );
}
