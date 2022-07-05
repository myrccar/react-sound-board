import './App.css';
import SoundBox from './components/sound_keyword-player';


function App() {
  return (
   <div class="h-screen w-screen px-0 py-0 fixed top-0 left-0 bg-slate-900">
    <SoundBox sndkey="A" name="spell snd" source="https://opengameart.org/sites/default/files/audio_preview/spell1_0.wav.mp3"></SoundBox>
    <SoundBox sndkey="Y" name="goast snd" source="https://opengameart.org/sites/default/files/audio_preview/ghost_2.flac_.mp3.ogg"></SoundBox> 
   </div>
  );
}

export default App;
