import React from 'react';
import {TouchableOpacity} from 'react-native';
import styles from './styles';
import AvatarBox from './AvatarBox';
import DescriptionBox from './DescriptionBox';
import NotificationBox from './NotificationBox';

export const BoxChat = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <AvatarBox />
      <DescriptionBox />
      <NotificationBox />
    </TouchableOpacity>
  );
};

export default BoxChat;
