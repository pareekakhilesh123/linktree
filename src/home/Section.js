import React from 'react';
import './Section.css';

const Section= ({title, bodyText,displayStyle={}, reverse = false , imgURL  }) => {
const style = {  backgroundColor: displayStyle.bgColor }
if(reverse) {
  style.flexDirection = 'row-reverse'
}
const textStyle = {
  color: displayStyle.color
}

 return <>
    <div className='content' style={style}>
 <main className="main-content">
   <h1 style={textStyle}>{title}  </h1>
   <p style={textStyle}>
    {bodyText}
   </p>
   <div className="action-buttons">
     <input type="text" placeholder="linktr.ee/yourname" />
     <button className="claim-btn">Claim your Linktree</button>
   </div>
 </main>
 <div className='sectionimg'>
 <img src={imgURL} alt='img1'></img>
 </div>
 </div>
 </>

}

export default Section