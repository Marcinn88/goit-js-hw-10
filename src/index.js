import './css/styles.css';
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';
import { fetchCounries } from './fetchCountries';
import counrtyCardTemp from '../country-card.hbs';
import counrtyCardTempList from '../country-card-list.hbs';

const DEBOUNCE_DELAY = 300;
