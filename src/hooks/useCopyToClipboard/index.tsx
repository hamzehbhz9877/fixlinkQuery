import {useCallback, useState} from 'react';

const useCopyToClipboard = () => {

    const copyToClipboard = (str: string) => {
        const el = document.createElement('textarea');
        el.value = str;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        const selection = document.getSelection() as Selection
        const selected = selection.rangeCount > 0
            ? selection.getRangeAt(0)
            : false;
        el.select();
        const success = document.execCommand('copy');
        document.body.removeChild(el);
        if (selected) {
            selection.removeAllRanges();
            selection.addRange(selected);
        }
        return success;
    };

    const [text, setText] = useState("")

    const copy =useCallback((data) => {
        copyToClipboard(data)
        setText(data)
    }, []);

    return {copy, text};
};

export default useCopyToClipboard;