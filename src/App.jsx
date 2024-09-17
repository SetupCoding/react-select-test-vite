import { useState } from 'react'
import './App.css'
import Select from 'react-select';

function App() {

  const options = [
    {
      value: 'top-picks',
      label: 'Top Picks',
    },
    {
      label: 'Power Tools',
      options: [
        {
          value: 'battery-powered',
          label: 'Battery Powered Tools',
          leadingIconName: 'placeholder',
        },
      ],
    },
    {
      label: 'Gardening Equipment',
      options: [
        {
          value: 'chainsaw',
          label: 'Chainsaws',
        },
        {
          value: 'hedge-trimmer',
          label: 'Hedge Trimmers',
        },
        {
          value: 'lawnmower',
          label: 'Lawnmowers',
        },
        {
          value: 'pressure-washer',
          label: 'Pressure Washers',
        },
        {
          value: 'trimmer',
          label: 'Trimmers',
        },
      ],
    },
  ];


  const [value, setValue] = useState([]);

  const handleComboboxChange = (selectedOptions) => {
    setValue(selectedOptions);
  };
  return (

    <Select
      closeMenuOnSelect={false}
      hideSelectedOptions={false}
      isMulti={true}
      isSearchable={true}

      options={options}
      value={value}
      onChange={handleComboboxChange}
    />

  )
}

export default App
