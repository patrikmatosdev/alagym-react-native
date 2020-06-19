import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {List} from 'react-native-paper';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ButtonIcon from './ButtonIcon/index';

const ListWorkouts = props => {
  return (
    <View style={styles.container}>
      <ButtonIcon
        title="Treino A"
        description="Peitoral, braços, pernas"
        icon="dumbbell"
      />
      <ButtonIcon
        title="Treino A"
        description="Peitoral, braços, pernas"
        icon="dumbbell"
      />
      <ButtonIcon
        title="Treino A"
        description="Peitoral, braços, pernas"
        icon="dumbbell"
      />
      <ButtonIcon
        title="Treino A"
        description="Peitoral, braços, pernas"
        icon="dumbbell"
      />
    </View>
  );
};

export default ListWorkouts;
