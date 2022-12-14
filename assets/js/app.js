import '../css/app.scss';
import { Dropdown } from 'bootstrap';

document.addEventListener('DOMContentLoaded', () => {
enableDropdowns();
});

const enableDropdowns = () => {
    const dropdownElementList = document.querySelectorAll('.dropdown-toggle')
    dropdownElementList.map(function (dropdownToggleEl) {
    return new Dropdown(dropdownToggleEl)
    });
}