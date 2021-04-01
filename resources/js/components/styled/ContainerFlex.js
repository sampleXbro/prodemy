import styled from 'styled-components';
import {colors} from "../../colors/colors";

export const ContainerFlex = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${({width = '1250px'}) => width};
    height: ${({height = '100%'}) => height};
    background-color: ${({color = colors.mainLightGrey}) => color};
    border-radius: ${({radius = '5px'}) => radius};
    padding: ${({padding = '0'}) => padding};
    margin: ${({margin = '0 auto'}) => margin};
`

