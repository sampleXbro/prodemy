import React, {useEffect, useState} from 'react';

export const WithInfiniteScroll = (Component) => ((props) => {
    const [qtyList, setQtyList] = useState(5);

    useEffect(() => {
        return () => {
            window.onscroll = null
        }
    }, []);

    window.onscroll = (ev) =>  {
        const set = () => {
            setQtyList(qtyList + 5);
        };
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            set()
        }
    };

    return <Component qtyList={qtyList} {...props}/>;
});
