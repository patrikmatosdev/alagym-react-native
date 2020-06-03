import React from 'react';
import {TouchableOpacity} from 'react-native';
import styles from './styles';
import AvatarBox from './AvatarBox';
import DescriptionBox from './DescriptionBox';
import NotificationBox from './NotificationBox';

export const BoxMessenger = ({
  avatar,
  menssage,
  name,
  surname,
  hour,
  notification,
  onPress,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <AvatarBox avatar={avatar} />
      <DescriptionBox name={name} surname={surname} menssage={menssage} />
      <NotificationBox hour={hour} notification={notification} />
    </TouchableOpacity>
  );
};

export default BoxMessenger;
