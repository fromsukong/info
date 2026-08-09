import type {ReactNode} from 'react';
import {Text} from '@astryxdesign/core/Text';
import {VStack} from '@astryxdesign/core/Layout';

interface LinkSectionProps {
  title: string;
  children: ReactNode;
}

export default function LinkSection({title, children}: LinkSectionProps) {
  return (
    <section aria-label={title}>
      <VStack className="link-stack">
        <Text type="label" weight="bold" justify="center" display="block" className="section-header">
          {title}
        </Text>
        {children}
      </VStack>
    </section>
  );
}
