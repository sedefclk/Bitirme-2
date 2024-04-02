import React from 'react';
import './RequirementStyle.css';

const VRSystemInfo: React.FC = () => {
  return (
    <div className="vr-info-container">
      <h1>Herhangi bir SteamVR sisteminde oynanabilir</h1>
      <p>Bilgisayarda Ã§alÄ±ÅŸan bir VR donanÄ±mÄ±na sahipseniz bu, o donanÄ±mda SteamVR'Ä±n da Ã§alÄ±ÅŸacaÄŸÄ± anlamÄ±na gelir.</p>
      <p>HenÃ¼z VR donanÄ±mÄ±nÄ±z yoksa, ÅŸimdi almak iÃ§in tam zamanÄ±. VR baÅŸlÄ±klarÄ± farklÄ± Ã¶zelliklere sahip olacaÄŸÄ±ndan farklÄ± donanÄ±mlar arasÄ±nda deneyiminiz her zaman aynÄ± olmayabilir. Half-Life: Alyx, pazardaki en yÃ¼ksek doÄŸruluÄŸa sahip Valve Index kullanÄ±larak geliÅŸtirildi fakat Alyx'i gayet sorunsuz ve iyi bir ÅŸekilde Vive, Rift ve Windows Mixed Reality donanÄ±mlarÄ±nda da oynayabilirsiniz. FarklÄ± seÃ§enekler arasÄ±ndan size en uygun olan donanÄ±mÄ± seÃ§in.</p>
      <button className="vr-info-button">UYUMLU VR DONANIMLARINI Ã–ÄREN</button>
      <div className="vr-info-icons">
        <div className="vr-icon"><span>Valve Index</span></div>
        <div className="vr-icon"><span>HTC Vive</span></div>
        <div className="vr-icon"><span>Oculus Rift</span></div>
        <div className="vr-icon"><span>Windows Mixed Reality</span></div>
      </div>
    </div>
  );
};

export default VRSystemInfo;
