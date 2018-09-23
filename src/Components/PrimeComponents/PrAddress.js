import React, { Component } from 'react';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
class PrAddress extends Component {

    constructor() {
        super();
        this.state = {
            expandedRows:null
        };
    }

    rowExpansionTemplate(data) {
        return (

            <div className='p-grid p-fluid' style={{ padding: '1em' }}>
                <div>

                    <p> Our user <strong>{data.username}</strong>, whose name is <strong>{data.name}</strong>,  works at <strong>{data.company.name}</strong>.
                        You should call <strong>{data.name}</strong> at <strong>{data.phone} </strong> or send email to <strong>{data.email}</strong> to give more information about membership.
                    </p>
                    <p>
                        You should send a brochure 2 times a month, her/his address is <strong>{data.address.suite}, {data.address.street} st. {data.address.city}, postcode: {data.address.zipcode}</strong>.
                    </p>
                </div>
            </div>

        );
    }

    render() {
        return (
            <div>
                <div className='content-section introduction'>
                    <h1 style={{ textAlign: 'center' }} >Customer Address List</h1>
                </div>

                <div>
                    <DataTable
                        value={this.props.addressList}
                        expandedRows={this.state.expandedRows}
                        onRowToggle={(e) => this.setState({ expandedRows: e.data })}
                        rowExpansionTemplate={this.rowExpansionTemplate}>

                        <Column expander={true} style={{ width: '4em' }} />
                        <Column field='username' header='Nick' style={{ width: '10em' }} />
                        <Column field='name' header='Name' style={{ width: '10em' }} />
                        <Column field='email' header='E-Mail' style={{ width: '15em' }}/>
                        <Column field='phone' header='Phone' style={{ width: '10em' }} />
                        <Column field='website' header='Web Address' style={{ width: '10em' }} />

                    </DataTable>

                </div>
            </div>
        );
    }
}

export default PrAddress;