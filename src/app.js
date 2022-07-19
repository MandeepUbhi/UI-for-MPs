import { LightningElement } from "lwc";

const columns = [
  {label: 'Quote Line Item', fieldName:'name', editable:true},
  {label: 'Description', fieldName:'Description', editable:true}
]

export default class App extends LightningElement 
{
  data = [{name: 'PM Service',Description:'Visit 2022'},{name: 'PM Service',Description:'Visit 2022'},{name: 'PM Service',Description:'Visit 2022'},{name: 'PM Service',Description:'Visit 2022'},{name: 'PM Service',Description:'Visit 2022'},{name: 'PM Service',Description:'Visit 2022'},{name: 'PM Service',Description:'Visit 2022'},{name: 'PM Service',Description:'Visit 2022'},{name: 'PM Service',Description:'Visit 2022'},{name: 'PM Service',Description:'Visit 2022'},{name: 'PM Service',Description:'Visit 2022'},{name: 'PM Service',Description:'Visit 2022'},{name: 'PM Service',Description:'Visit 2022'},{name: 'PM Service',Description:'Visit 2022'}, {name: 'PM Service',Description:'Visit 2023'}]
  rowOffset = 0
  columns = columns;

  handleClick()
  {
    alert(`${event.target.label} has been pressed`);
  }
}
