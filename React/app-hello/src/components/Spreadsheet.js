import React from 'react';
import {Grid, Input, Select} from 'react-spreadsheet-grid';

const rows =[
    {id: 'user1', name: "John Doe", positionId: 'position1'},
    {id: 'user2', name: "Juan Perez", positionId: 'position2'},
    {id: 'user3', name: "Monica Lopez", positionId: 'position3'}
]

class Spreadsheet extends React.Component {
    render() {
        return (
            <Grid
                columns={[
                    {
                        title: () => 'Name',
                        value: (row, { focus }) => {
                            return (
                                <Input
                                    value={row.name}
                                    focus={focus}
                                />
                            );
                        }
                    }, {
                        title: () => 'Position',
                        value: (row, { focus }) => {
                            return (
                                <Select
                                    value={row.positionId}
                                    isOpen={focus}
                                    // items={somePositions}
                                />
                            );
                        }
                    }
                ]}

                getRowKey={row => row.id}
            />
        )
    }
}


export default Spreadsheet;