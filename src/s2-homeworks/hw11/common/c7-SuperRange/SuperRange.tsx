import {Slider, SliderProps} from '@mui/material'
import React from 'react'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{ // стили для слайдера // пишет студент
                color: '#00CC22',
                height: 6,
                // ползунок
                '& .MuiSlider-thumb': {
                    height: 18,
                    width: 18,
                    backgroundColor: 'white',
                    border: '1px solid #00CC22',
                    // точка в центре ползунка
                    '&::after': {
                        content: '""',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        height: 6,
                        width: 6,
                        backgroundColor: '#01CB22',
                        borderRadius: '50%',
                    },
                    '&:hover': {
                        boxShadow: 'inherit',
                    },
                },
                // "Дорожка, часть по которой движется ползунок и показывает какое значение выбрано"
                '& .MuiSlider-track': {
                    height: 4,
                },
                // "Рельс" часть, которая находится под "дорожкой"
                '& .MuiSlider-rail': {
                    height: 4,
                    backgroundColor: '#8B8B8B',
                },
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange
