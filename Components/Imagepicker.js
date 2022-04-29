import React from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

class Imagepicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imagePickerResponse: {},
    };

	this.AddImage = this.AddImage.bind(this);
  }

  AddImage = () => {
   ImagePicker.openPicker({
		  width: 200,
		  height: 200,
		  cropping: true
		}).then(response => {
      console.log(response);
      let source = response;
      this.setState({
        imagePickerResponse: source,
      });
		});
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ alignItems: 'center' }}>
            Image Crop Picker Test
          </Text>
      
            <Image
            source={{ uri: this.state.imagePickerResponse.path }}
            style={{ width: 250, height: 250 }}
          />

            <Image
            source={{ uri: this.state.imagePickerResponse.path }}
            style={{ width: 200, height: 200, borderRadius: 100 }}
          />

          <Text style={{ alignItems: 'center' }}>
            {this.state.imagePickerResponse.uri}
          </Text>
          <Button title="Add Image" onPress={()=>this.AddImage()} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Imagepicker;