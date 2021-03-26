import styled,{css} from 'styled-components';

//css styles 
const primary= css`

`;

const secondary= css`

`;


//types 
type ButtonPriority='primary'|'secondary';
type ButtonSize ='small'|'medium'|'large';
type Props={
    priority?: ButtonPriority
    size?:ButtonSize
};
//maps
const priorityMap= new Map<ButtonPriority,any>([
    ['primary',primary],
    ['secondary',secondary]
])

export const Button=styled.button<Props>`
${(props)=>(props.priority?priorityMap.get(props.priority):primary)}
`