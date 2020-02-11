import React from 'react'
import { Modal, ActivityIndicator, View, StyleSheet } from 'react-native'
import {ThemeContext} from "../../App";

interface Interface {
  show: boolean;
}

export const ProgressModal = ({ show = false }: Interface) => {
  const theme = React.useContext(ThemeContext)
  return (
  <Modal transparent visible={show}>
    <View style={styles.mainView}>
      <ActivityIndicator animating size='large' color={theme.color.primary} />
    </View>
  </Modal>
)}

const styles = StyleSheet.create({
  mainView: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.2)'
  }
})
