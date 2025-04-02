import {Typography} from "@mui/material";
import {EmphasisCardContainer} from "@/components/cards/emphasis.styles";

type EmphasisCardProps = {
    title: string,
    description: string,
    image?: string,
    alt?: string
}

export default function EmphasisCard({title, description, image, alt}: EmphasisCardProps) {
    return (
        <EmphasisCardContainer>
            <Typography>{title}</Typography>
            <Typography>{description}</Typography>
        </EmphasisCardContainer>
    )
}