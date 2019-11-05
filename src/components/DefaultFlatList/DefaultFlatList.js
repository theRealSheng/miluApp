import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, FlatList } from 'react-native';

class DefaultFlatList extends Component {
  render() {
    const { 
      renderFlatListItem, 
      data,
      extraProps
    } = this.props;
    return (
      <View>
        <FlatList
          ref={(ref) => { this.flatListRef = ref; }}
          maxToRenderPerBatch={10}
          data={data}
          keyExtractor={(item, index) => `${index}`}
          renderItem={({ item, index }) => renderFlatListItem({ item, index })}
          {...extraProps}
        />
      </View>
    )
  }
};

DefaultFlatList.propTypes = {
  data: PropTypes.array.isRequired,
  renderFlatListItem: PropTypes.func.isRequired,
  extraProps: PropTypes.object
};

export { DefaultFlatList };