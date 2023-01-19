import React from "react";

export default function generateCSS(style: string) {
    React.useEffect(() => {
        const myElement = document.querySelector('style[data-voidui]') as HTMLStyleElement;
        const css = compress(style);

        if (myElement) {
            if (!isAdded(css)) {
                myElement.innerHTML += css;
            }
        } else {
            const style = document.createElement('style');
            style.setAttribute('data-voidui', '');
            style.innerHTML = `/* 
        This file is generated by VoidUI.
        Be careful when editing it.
    */
    ${css}`;
            document.head.appendChild(style);
        }
    }, []);
}

function compress(str: string) {
    return str.replace(/\s+/g, ' ').trim();
}

function isAdded(str: string) {
    const myElement = document.querySelector('style[data-voidui]') as HTMLStyleElement;
    if (myElement) {
        return myElement.innerHTML.includes(str);
    }
    return false;
}