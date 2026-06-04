import React from 'react'

export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

const downIcon = '\u25BC'   // ▼
const upIcon = '\u25B2'     // ▲
const noneIcon = '\u21C5'   // ⇅

export const pureChange = (sort: string, down: string, up: string) => {
    if (sort === down) return up
    if (sort === up) return ""
    return down
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
            style={{ cursor: 'pointer', userSelect: 'none' }}
        >
            {icon}  {/* Просто выводим символ, без <img> */}
        </span>
    )
}

export default SuperSort