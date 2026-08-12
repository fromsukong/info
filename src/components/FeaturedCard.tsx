import {ClickableCard} from '@astryxdesign/core/ClickableCard';
import {Text} from '@astryxdesign/core/Text';
import {AspectRatio} from '@astryxdesign/core/AspectRatio';

interface FeaturedCardProps {
  title: string;
  subtitle?: string;
  href: string;
  image: string;
  imageAlt: string;
}

export default function FeaturedCard({title, subtitle, href, image, imageAlt}: FeaturedCardProps) {
  return (
    <ClickableCard href={href} target="_blank" label={title} padding={0} className="link-card featured-highlight">
      <div className="featured-thumb">
        <AspectRatio ratio={16 / 9} fit="cover">
          <img src={image} alt={imageAlt} loading="eager" />
        </AspectRatio>
      </div>
      <div className="link-card-inner featured-label">
        <Text type="body" weight="medium" justify="center" display="block" className="link-card-label">
          {title}
        </Text>
        {subtitle && (
          <Text type="supporting" justify="center" display="block" className="link-card-sub">
            {subtitle}
          </Text>
        )}
      </div>
    </ClickableCard>
  );
}
