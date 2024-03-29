import React from 'react'; 
import classes from './BuildControls.module.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    {label: 'Salad', type: 'salad'},
    {label: 'Bacon', type: 'bacon'},
    // {label: 'Cheese', type: 'chesse'},
    {label: 'Meat', type: 'meat'},
];

const buildControls = (props) => (
    <div className = {classes.BuildControls}>
        <p>Price: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl 
                key={ctrl.lable} 
                label={ctrl.label}
                added={() => props.ingredientAdded(ctrl.type)}
                remove={() => props.ingredientRemoved(ctrl.type)} 
                disabled = {props.disabled[ctrl.type]}
                />
        ))}
    </div>
)

export default buildControls;