import React from "react";
import Link from "next/link";


interface socials {
    image: string
    link: string
  }
  
  const socials: Array<socials> = [
    {
      image: "./social1.svg",
      link: "https://www.tiktok.com/",
    },
    {
      image: "./social2.svg",
      link: "https://www.instagram.com/",
    },
    {
      image: "./social3.svg",
      link: "https://www.twitter.com/",
    },
    {
        image: "./social4.svg",
        link: "https://www.facebook.com/",
    },
  ]

const Footer=()=>{
    return (
        <section className="footer">
            <div className="menu-container">
                <Link href="#herosection"><div className="menu-item">Home</div></Link>
                <Link href="#pageone"><div className="menu-item">Page 1</div></Link>
                <Link href="#pagetwo"><div className="menu-item">Page 2</div></Link>
            </div>
            <hr className="break"/>
            <div className="socials">
            {socials.map((item,idx) => (
                <a href={item.link} rel="noreferrer" target="_blank">
                <img
                key={idx}
                src={item.image}
                />
                </a>
            ))} 
            </div>
        </section>
    );
}

export default Footer;