import React from 'react'
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function LinearProgressWithLabel({progress}) {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '100%', mr: 1 }}>
                <LinearProgress variant="determinate" value={progress.val} style={{ height: 10}}/>
            </Box>
            <Box sx={{ minWidth: 100 }}>
                <Typography noWrap variant="body1" style={{ textOverflow: "clip", overflow: "visible" }}>{progress.text}</Typography>
            </Box>
        </Box>
    )
}


export default LinearProgressWithLabel