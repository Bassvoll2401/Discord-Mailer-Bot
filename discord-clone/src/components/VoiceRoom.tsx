"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

export default function VoiceRoom() {
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [isVideoOn, setIsVideoOn] = useState(false);
  const [isScreenSharing, setIsScreenSharing] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current && stream) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  const toggleVideo = async () => {
    if (isVideoOn && stream) {
      stream.getTracks().forEach(track => {
        if (track.kind === 'video') track.stop();
      });
      setIsVideoOn(false);
      setIsScreenSharing(false);

      // Keep audio if it was on
      if (!isMuted) {
         try {
           const audioStream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
           setStream(audioStream);
         } catch(e) { console.error(e) }
      } else {
         setStream(null);
      }
      return;
    }

    try {
      const newStream = await navigator.mediaDevices.getUserMedia({
        video: {
          width: { ideal: 1920 },
          height: { ideal: 1080 },
          frameRate: { ideal: 60 }
        },
        audio: !isMuted
      });

      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }

      setStream(newStream);
      setIsVideoOn(true);
      setIsScreenSharing(false);
      setErrorMsg("");
    } catch (error: any) {
      console.error("Fehler beim Zugriff auf die Kamera:", error);
      setErrorMsg("Kamera nicht gefunden oder Zugriff verweigert.");
    }
  };

  const toggleMute = async () => {
    if (stream) {
      stream.getAudioTracks().forEach(track => {
        track.enabled = isMuted; // If currently muted, enable it (unmute)
      });
      setIsMuted(!isMuted);
    } else {
      // Stream is null, start just audio
      try {
        const audioStream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
        setStream(audioStream);
        setIsMuted(false);
        setErrorMsg("");
      } catch (error: any) {
         console.error("Fehler beim Zugriff auf das Mikrofon:", error);
         setErrorMsg("Mikrofon nicht gefunden oder Zugriff verweigert.");
      }
    }
  };

  const shareScreen = async () => {
    if (isScreenSharing && stream) {
      // Stop screen sharing and revert to camera if it was on, or stop
      stream.getTracks().forEach(track => track.stop());
      setIsScreenSharing(false);
      setStream(null);
      setIsVideoOn(false);
      return;
    }

    try {
      const displayStream = await navigator.mediaDevices.getDisplayMedia({
        video: {
          displaySurface: "monitor",
          frameRate: { ideal: 60 }
        },
        audio: true
      });

      if (stream) {
        stream.getTracks().forEach(track => track.stop());
      }

      setStream(displayStream);
      setIsScreenSharing(true);
      setIsVideoOn(false); // Screen share overrides camera in this simple demo
      setErrorMsg("");

      // Handle user stopping screen share from browser UI
      displayStream.getVideoTracks()[0].onended = () => {
        setIsScreenSharing(false);
        setStream(null);
      };

    } catch (error: any) {
      console.error("Fehler beim Bildschirmteilen:", error);
      setErrorMsg("Bildschirmfreigabe abgebrochen oder nicht unterstützt.");
    }
  };

  return (
    <div className="flex-1 bg-[#1E1F22] flex flex-col h-screen text-gray-200 relative">

      {/* Header */}
      <div className="h-12 border-b border-[#2B2D31] flex items-center px-5 shrink-0 shadow-sm z-10 bg-[#1E1F22]">
        <svg className="w-5 h-5 mr-3 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13.5 11c0-1.93-1.57-3.5-3.5-3.5S6.5 9.07 6.5 11v3c0 1.93 1.57 3.5 3.5 3.5s3.5-1.57 3.5-3.5v-3zM10 20c3.87 0 7-3.13 7-7v-3c0-3.87-3.13-7-7-7s-7 3.13-7 7v3c0 3.87 3.13 7 7 7zm6-7c0 3.31-2.69 6-6 6s-6-2.69-6-6h2c0 2.21 1.79 4 4 4s4-1.79 4-4h2z" />
        </svg>
        <span className="font-bold text-white mr-4 text-base tracking-wide">Lobby (Voice & Video)</span>
      </div>

      {/* Main Grid Area */}
      <div className="flex-1 p-4 flex flex-col items-center justify-center relative overflow-hidden bg-[#000000]">

        {errorMsg && (
          <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-red-500/90 text-white px-4 py-2 rounded-md shadow-lg font-medium z-50">
            {errorMsg}
          </div>
        )}

        <div className={`w-full h-full max-w-[1400px] gap-4 grid ${stream && (isVideoOn || isScreenSharing) ? 'grid-cols-1' : 'grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'} place-items-center transition-all duration-300`}>

          {/* Main User Card (You) */}
          <div className={`relative bg-[#2B2D31] rounded-2xl border-2 ${stream ? 'border-[#23A559]' : 'border-[#1E1F22]'} overflow-hidden shadow-xl flex items-center justify-center w-full h-full max-h-[70vh] group transition-all`}>

            {(isVideoOn || isScreenSharing) && stream ? (
              <video
                ref={videoRef}
                autoPlay
                playsInline
                muted // Mute own video to avoid echo
                className={`w-full h-full ${isScreenSharing ? 'object-contain' : 'object-cover'} transform ${!isScreenSharing && 'scale-x-[-1]'}`}
              />
            ) : (
              <div className="w-24 h-24 rounded-full bg-[#5865F2] flex items-center justify-center text-white shadow-lg">
                <img src="https://github.com/shadcn.png" alt="Avatar" className="w-full h-full rounded-full" />
              </div>
            )}

            <div className="absolute bottom-4 left-4 flex items-center bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg">
               <span className="text-white font-bold text-sm shadow-sm">Jules (Du)</span>
               {isMuted && (
                  <svg className="w-4 h-4 ml-2 text-red-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5.91-3c-.49 0-.9.36-.98.85C16.52 14.2 14.47 16 12 16s-4.52-1.8-4.93-4.15a1 1 0 00-1.97.24C5.64 15.11 8.52 17.65 11 17.96V21h2v-3.04c2.48-.31 5.36-2.85 5.9-5.87.14-.78-.45-1.5-1.24-1.5z"/><path d="M2.1 2.1l19.8 19.8-1.4 1.4L18.7 21.5C16.8 22.4 14.5 23 12 23c-5.5 0-10-4.5-10-10 0-2.5.6-4.8 1.5-6.7L.7 3.5 2.1 2.1z"/></svg>
               )}
            </div>

            {isScreenSharing && (
               <div className="absolute top-4 left-4 flex items-center bg-red-500/80 px-2.5 py-1 rounded text-white text-xs font-bold uppercase tracking-wider animate-pulse">
                 Live
               </div>
            )}
          </div>

          {/* Dummy User 1 */}
          {(!stream || (!isVideoOn && !isScreenSharing)) && (
             <div className="relative bg-[#2B2D31] rounded-2xl border-2 border-[#1E1F22] overflow-hidden shadow-xl flex items-center justify-center w-full h-full max-h-[70vh] aspect-video">
                <div className="w-24 h-24 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-3xl shadow-lg">
                  U2
                </div>
                <div className="absolute bottom-4 left-4 flex items-center bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg">
                  <span className="text-white font-bold text-sm shadow-sm">User2</span>
                </div>
             </div>
          )}

        </div>
      </div>

      {/* Voice Control Bar */}
      <div className="h-20 bg-[#2B2D31] shrink-0 flex items-center justify-center space-x-4 border-t border-[#1E1F22]">

        {/* Screen Share Button */}
        <div className="relative group">
          <button
            onClick={shareScreen}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${isScreenSharing ? 'bg-[#23A559] text-white hover:bg-[#1E8A4A]' : 'bg-[#3B3D44] text-gray-300 hover:bg-[#474952]'}`}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </button>
        </div>

        {/* Video Button */}
        <div className="relative group">
          <button
            onClick={toggleVideo}
            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${isVideoOn ? 'bg-[#3B3D44] text-gray-300 hover:bg-[#474952]' : 'bg-[#3B3D44] text-gray-300 hover:bg-[#474952]'}`}
          >
            {isVideoOn ? (
               <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/></svg>
            ) : (
               <svg className="w-5 h-5 text-red-400" fill="currentColor" viewBox="0 0 24 24"><path d="M21 6.5l-4 4V7c0-.55-.45-1-1-1H9.82L21 17.18V6.5zM3.27 2L2 3.27 4.73 6H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.21 0 .39-.08.54-.18L19.73 21 21 19.73 3.27 2z"/></svg>
            )}
          </button>
        </div>

        {/* Mute Button */}
        <div className="relative group">
          <button
            onClick={toggleMute}
            className={`w-14 h-14 rounded-full flex items-center justify-center transition-all ${isMuted ? 'bg-[#DA373C] hover:bg-[#C9292D] text-white' : 'bg-[#3B3D44] hover:bg-[#474952] text-gray-300'}`}
          >
            {isMuted ? (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 11h-1.7c0 .74-.16 1.43-.43 2.05l1.23 1.23c.56-.98.9-2.09.9-3.28zm-4.02.17c0-.06.02-.11.02-.17V5c0-1.66-1.34-3-3-3S9 3.34 9 5v.18l5.98 5.99zM4.27 3L3 4.27l6 6V11c0 1.66 1.34 3 3 3 .23 0 .44-.03.65-.08l1.66 1.66c-.71.33-1.5.52-2.31.52-2.76 0-5.3-2.1-5.3-5.1H5c0 3.41 2.72 6.23 6 6.72V21h2v-3.28c.91-.13 1.77-.45 2.54-.9L19.73 21 21 19.73 4.27 3z"/></svg>
            ) : (
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3z"/><path d="M17 11c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/></svg>
            )}
          </button>
        </div>

        {/* Disconnect Button */}
        <Link href="/">
          <button className="w-14 h-14 rounded-full flex items-center justify-center bg-[#DA373C] hover:bg-[#C9292D] text-white transition-all transform hover:scale-105 shadow-md ml-4">
            <svg className="w-6 h-6 transform rotate-135" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 15.5c-.78 0-1.55-.13-2.28-.38-.23-.08-.49-.02-.67.16l-2.2 2.2c-2.83-1.44-5.15-3.75-6.59-6.59l2.2-2.2c.18-.18.24-.44.16-.67-.25-.73-.38-1.5-.38-2.28 0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-5.27c0-.55-.45-1-1-1z"/>
            </svg>
          </button>
        </Link>

      </div>
    </div>
  );
}
