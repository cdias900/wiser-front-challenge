/* eslint-disable react/no-array-index-key */
import React from 'react';

import {
  Title, SubTitle, Normal, Link,
} from './styles';

interface TextProps {
  text: string;
  type: string;
  href?: string;
}

export const textTypes = {
  TITLE: 'TITLE',
  SUBTITLE: 'SUBTITLE',
  NORMAL: 'NORMAL',
  LINK: 'LINK',
};

const Text: React.FC<TextProps> = ({
  text, type, href, children,
}) => {
  const lines = text.split('\n');
  return (
    <>
      {lines.map(((t, i) => {
        const lastLine = i === lines.length - 1;
        switch (type) {
          case textTypes.TITLE:
            return (
              <Title key={i} margin={lastLine}>
                {t}
                {lastLine && children && ' '}
                {lastLine && children}
              </Title>
            );

          case textTypes.SUBTITLE:
            return (
              <SubTitle key={i} margin={lastLine}>
                {t}
                {lastLine && children && ' '}
                {lastLine && children}
              </SubTitle>
            );

          case textTypes.LINK:
            return <Link key={i} href={href}>{t}</Link>;

          default:
            return (
              <Normal key={i}>
                {t}
                {lastLine && children && ' '}
                {lastLine && children}
              </Normal>
            );
        }
      }))}
    </>
  );
};

export default Text;
