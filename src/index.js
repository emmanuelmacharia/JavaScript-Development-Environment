import numeral from 'numeral';

//STYLES:
import './index.css';


/* eslint-disable no-console */
const val = numeral(1000).format('$0.0.00')
console.log(`I would pay ${val} for the dog biscuits`);
