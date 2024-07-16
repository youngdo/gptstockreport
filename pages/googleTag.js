"use client"
import { useEffect } from 'react';
const GoogleTag = () => {
    useEffect(() => {
        console.log('tag load');
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-9ZEBL0ZMYJ');
    }, []);
}
export default GoogleTag;