// Import CSS file into entry point to add as dependency
import '../css/style.css';

import { buttonClick } from './button';

document.getElementById('btn').addEventListener('click', buttonClick);
