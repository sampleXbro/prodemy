import styled from 'styled-components'

export const Badge = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({textColor}) => textColor};
    font-size: ${({fontSize}) => fontSize};
    background-color: ${({color}) => color};
    width: ${({width, size}) => size || width};
    height: ${({height, size}) => size || height};
    border-radius: ${({radius}) => radius};
    user-select: none;
    position: ${({position}) => position};
    top: ${({top}) => top};
    right: ${({right}) => right};
`
