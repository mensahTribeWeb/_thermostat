import React from 'react';

const TemperatureSetting = ({ temperatureSetting, onTemperatureSettingChange }) => {
const handleTemperatureSettingChange = (event) => {
onTemperatureSettingChange(event.target.value);
};

return (
<div className='temperature-setting'>
    <h2>Temperature setting:</h2>
    <input
            type="number"
            value={temperatureSetting}
            onChange={handleTemperatureSettingChange}
    />
</div>
);
};

export default TemperatureSetting;