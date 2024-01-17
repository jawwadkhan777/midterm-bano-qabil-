import React from 'react'
import { Card ,Stack,Typography} from '@mui/material'
import Icon from '../assets/icons/gym.png'


const BodyPart = ({item, setBodyPart, bodyPart}) => {
  return (
    <Stack
        type="button"
        alignItems="center"
        justifyContent="center"
        className='bodyPart-card'
        sx={{
            borderTop:bodyPart === item ?'4px solid #ff2625':'none',
            backgroundColor:'#fff',
            borderBottomLeftRadius:'20px',
            width:'270px',
            height:'280px',
            cursor:'pointer',
            gap:'47px'
        }
    }
    >
        <img src={Icon} alt="dumbell"
        styles={{width: '20px', height: '20px'}}
        />
    </Stack>
  )
}

export default BodyPart