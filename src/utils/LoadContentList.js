import ContentLoader, {Circle, Rect} from 'react-content-loader/native';

import {ListItem} from 'native-base';
import React from 'react';

const LoadContentList = () => {
  return (
    <ContentLoader
      speed={0.8}
      width={400}
      height={160}
      viewBox="0 0 400 160"
      backgroundColor="#c0c0c0"
      foregroundColor="#ff2600">
      <Circle cx="10" cy="20" r="8" />
      <Rect x="25" y="15" rx="5" ry="5" width="85%" height="10" />
      <Circle cx="10" cy="50" r="8" />
      <Rect x="25" y="45" rx="5" ry="5" width="85%" height="10" />
      <Circle cx="10" cy="80" r="8" />
      <Rect x="25" y="75" rx="5" ry="5" width="85%" height="10" />
      <Circle cx="10" cy="110" r="8" />
      <Rect x="25" y="105" rx="5" ry="5" width="85%" height="10" />
      <Circle cx="10" cy="140" r="8" />
      <Rect x="25" y="135" rx="5" ry="5" width="85%" height="10" />
    </ContentLoader>
  );
};

export default LoadContentList;
