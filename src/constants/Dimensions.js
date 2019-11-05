import { Platform }from 'react-native';

const DIMENSIONS = {
  statusBar: {
    ...Platform.select({
      ios: {
        height: 30,
      },
      android: {
        height: 30,
        color: 'red'
      }
    })
  },
  bottomNavHeight: {
    height: 60
  }
}

export default DIMENSIONS;