import React, {useEffect, useState} from 'react'

export const useChannelListener = (channelName, eventName) => {
    const [event, setEvent] = useState({})

    useEffect(() => {
        Echo.private(channelName)
            .listen(eventName, (e) => {
                setEvent(e);

            });
    }, [event])

    return [event];
}
