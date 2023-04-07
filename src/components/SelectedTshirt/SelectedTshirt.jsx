import React from 'react';

const SelectedTshirt = ({ selected }) => {
    console.log(selected)
    return (
        <div style={{ textAlign: 'center' }}>
            {
                selected.map(tshirt => {
                    return <div key={tshirt._id}>
                        <p>{tshirt.name}</p>
                    </div>
                })
            }
        </div>
    );
};

export default SelectedTshirt;