'use client'
import {Grid} from "@mui/material";
import {Carousel} from "nuka-carousel";
import Image from "next/image";
import hero1 from '@/public/pexels-01.jpg'
import hero2 from '@/public/pexels-02.jpg'
import EmphasisCard from "@/components/cards/EmphasisCard";

export default function HeroSection() {

    return (
        <Grid container size={12} sx={{ width: '100%',paddingY: 5, flexDirection:{xs: 'column',  md: 'row'}}} justifyContent={'space-between'}>
            <Grid size={{xs: 12, md: 8}} sx={{borderRadius: 5, overflow: 'hidden'}}>
                <Carousel showArrows={'always'} autoplay={true} autoplayInterval={2500} >
                    <Image src={hero1} alt={'hero1'} />
                    <Image src={hero2} alt={'hero1'} />
                </Carousel>
            </Grid>
            <Grid container flexDirection={'column'} justifyContent={'space-between'} size={{xs: 12, md: 3.5}}>
                <EmphasisCard title={'Jansen'} description={'Jansinho lalaal'}/>
                <EmphasisCard title={'Jansen'} description={'Jansinho lalaal'}/>
                <EmphasisCard title={'Jansen'} description={'Jansinho lalaal'}/>
            </Grid>
        </Grid>
    )
}