import React from 'react';
import PropTypes from 'prop-types';
import {
  Keyboard,
  TextInput,
  View,
} from 'react-native';

import { COLORS } from '../../constants';
import styles from './SearchHeader.component.styles';
import { DefaultTouchable, StandardLeftArrowIcon } from '..';
import CloseIcon from '../../assets/svg/close.svg';

const SearchHeader = ({
  value,
  onChangeText,
  navigateBack,
  clearInput,
}) => (
  <View style={styles.container}>
    <View>
      <StandardLeftArrowIcon
        arrowSize={styles.arrow}
        arrowWrapperStyles={styles.icon_wrapper}
        onPress={() => navigateBack()}
      />
    </View>
    <TextInput
      value={value}
      placeholder="Search..."
      placeholderTextColor={COLORS.medium_grey}
      onChangeText={onChangeText}
      onSubmitEditing={Keyboard.dissmiss}
      onBlur={Keyboard.dismiss}
      style={styles.input}
    />
    <View>
      <DefaultTouchable
        onPress={() => clearInput()}
        item={(
          <View style={styles.icon_wrapper}>
            <CloseIcon {...styles.close} />
          </View>
        )}
      />
    </View>
  </View>
);

SearchHeader.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  navigateBack: PropTypes.func.isRequired,
  clearInput: PropTypes.func.isRequired,
};

export { SearchHeader };
