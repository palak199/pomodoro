import React,{Component} from 'react'
import soundfile from './media/sound.mp3'
import Sound from 'react-sound'
export default class Audio extends Component {
render() {
 return (
   <Sound
   url={soundfile}
   playStatus={Sound.status.PLAYING}
   onLoading={this.handleSongLoading}
   onPlaying={this.handleSongPlaying}
   //onFinishedPlaying={this.handleSongFinishedPlaying}
   />
  );
 }
}
