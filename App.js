import React from 'react';
import {
  View,
  Text,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {FolderPlus, Info, PlayCircle} from 'lucide-react-native';
import LinearGradient from 'react-native-linear-gradient';

export default function App() {
  return (
    <>
      <StatusBar
        backgroundColor={'transparent'}
        translucent={true}
        barStyle="light-content"
      />
      <View style={styles.container}>
        <ImageBackground
          source={{uri: 'https://source.unsplash.com/random'}}
          imageStyle={styles.imageStyle}
          style={styles.imageBackground}>
          <LinearGradient
            colors={['rgba(255,255,255,0)', 'rgba(255,255,255,0)', '#222']}
            style={{flex: 1, borderRadius: 8}}>
            <LinearGradient
              colors={['#222', 'rgba(255,255,255,0)', 'rgba(255,255,255,0)']}
              style={styles.linearGradient}>
              <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                  <FolderPlus color="white" />
                  <Text style={styles.buttonText}>Create</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                  <Info color="white" />
                  <Text style={styles.buttonText}>More info</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.flexContainer} />
              <View style={{flexDirection: 'row', alignSelf: 'center'}}>
                <Text style={[styles.title, {paddingRight: 0, color: 'black'}]}>
                  THE FIELD
                </Text>
                <Text
                  style={[styles.title, {paddingLeft: 0, color: 'skyblue'}]}>
                  {' '}
                  MURDER
                </Text>
              </View>
              <View style={styles.buttonContainer2}>
                <TouchableOpacity style={styles.playButton}>
                  <PlayCircle color="#111" />
                  <Text style={styles.playButtonText}>PLAY NOW</Text>
                </TouchableOpacity>
              </View>
            </LinearGradient>
          </LinearGradient>
        </ImageBackground>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#444',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    height: '100%',
    width: '100%',
    borderRadius: 8,
  },
  imageBackground: {
    aspectRatio: 2 / 3.5,
    width: '80%',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  linearGradient: {
    flex: 1,
    padding: 20,
    borderRadius: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
  flexContainer: {
    flex: 1,
  },
  title: {
    alignSelf: 'center',
    padding: 20,
    fontSize: 24,
    fontWeight: '900',
    color: 'white',
  },
  playButton: {
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
    paddingHorizontal: 20,
    backgroundColor: 'white',
    borderRadius: 6,
  },
  playButtonText: {
    color: '#111',
    marginLeft: 8,
  },
  buttonContainer2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
