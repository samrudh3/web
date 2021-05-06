import React, {useState} from 'react';
import HeroSection from '../Components/HeroSection';
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/SideBar';
import ImageSlider from '../Components/ImageSlider';
import { SliderData } from '../Components/SliderData';
import InfoSection from '../Components/InfoSection';
import { homeObjOne } from '../Components/InfoSection/Data';

const Home = () => {

    const [isOpen, setIsOpen] = useState(false)

    const toggle = () =>{
        setIsOpen(!isOpen)
    };
    return (
        <>
          <Sidebar isOpen={isOpen} toggle={toggle} />
          <Navbar toggle={toggle} />
          {/* <ImageSlider slides={SliderData} />; */}
          <HeroSection />
          <InfoSection {...homeObjOne}/>
         </>
    )
}
export default Home
