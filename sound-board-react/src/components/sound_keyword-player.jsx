import React from "react";
import { Howl } from "howler";

function SoundBox(props) {
    const CallMySnd = (src) => {
          const MySnd = new Howl({
            src,
            html5: true
          });
          MySnd.play();
    }
    const sndkeyvar = props.sndkey;
    document.addEventListener('keydown', function(event){
        console.log(sndkeyvar.toLowerCase())
        if(event.key === sndkeyvar.toLowerCase()){
            console.log("yes");
            CallMySnd(props.source)
        }
    });
  
    return (
   <div onClick={() => CallMySnd(props.source)} class="border-black border-solid border-2 w-28 h-28 my-3 mx-3 px-0 py-0 bg-slate-700 rounded-md grid items-center grid-cols-1 grid-rows-2 grid-flow-col scale-100 hover:scale-105 transition-all active:scale-75 active:rotate-6">
    <div class="text-center text-4xl font-semibold text-slate-400 select-none">{props.sndkey}</div>
    <div class="text-center text-base text-slate-400 select-none">{props.name}</div>
   </div>
  );
}

export default SoundBox;
