import {Box, styled} from "@mui/material";

export const EmphasisCardContainer = styled(Box)`
    height: 200px;
    min-height: 200px;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
    transition: all 0.3s;
    cursor: pointer;
    &:hover {
        transform: scale(1.05);
    }

`